var hljs = require('highlight.js')
var Handlebars = require('handlebars')
var cheerio = require('cheerio')
var marked = require('marked')
var md5 = require('md5')


// ````js\r\ncontent\r\n```` 语法内容记录
var oRunPreMap = {}
/*
编译 ````js\r\ncontent\r\n```` 并记录内容将内容替换为 md5 
marked 执行后再根据 oRUnPreMap 还原信息
如果只编译不替换为 md 再转换会被 marked 改变代码内容
*/
function compileRunPre (html) {
    hljs.configure({
        tabReplace: '    '
    });
    html = html.replace(/````([a-z]*)([\s\S]*?)````/g, function () {
        var arg = arguments
        var pre = arg[0]
        // ```` 默认 为 ````html
        var lang = arg[1] || 'html'
        var content = arg[2]
        var output = ''
        switch (lang) {
            case 'css':
            output = '<div style="display:none;">\r\n<style>' + content + '</style>\r\n</div>'
            break
            case 'js':
            output = '<div style="display:none;">\r\n<script>' + content + '</script>\r\n</div>'
            break
            case 'html':
            output = '<div>\r\n' + content + '<div style="clear:both;" ></div>\r\n</div>'
            break
            
        }
        content = '<pre>' + hljs.highlight(lang, content).value + '</pre>'
        /*
        当内容是这种情况时

            some text<pre>
            - demo
            - css
            - hahah
            </pre>

        没有 \r\n 会出bug
        */
        var placeholder = md5(content)
        oRunPreMap[placeholder] = output + '\r\n<div class="highlight">' + content + '</div>'
        return placeholder
    })
    return html
}

marked.defaults.renderer.heading = function(text, level, raw){
    if(typeof this.options.heading === 'function'){
        return this.options.heading.call(this, text, level, raw);
    } else {
        return '<h'
            + level
            + ' id="'
            + this.options.headerPrefix
            + encodeURIComponent(text.toLowerCase())
            + '">'
            + text
            + '</h'
            + level
            + '>\n';
    }
}

// 默认模板
var _notTemplate = Handlebars.compile(''+
'<!DOCTYPE html>'+
'<html lang="en">'+
'<head>'+
'    <meta charset="UTF-8">'+
'    <meta name="renderer" content="webkit">'+
'    <meta http-equiv="X-UA-Compatible" content="IE=edge" >'+
'    <title>{{title}}</title>'+
'</head>'+
'<body>'+
'{{{content}}}'+
'</body>'+
'</html>')



function compile (content, file, conf){
    // parser config 
    hljs.configure(conf.hljs || {
        tabReplace: '    '
    });
    conf.templateDir = conf.templateDir || '/static/_template/'

    function mdtouri (str) {
        return str.replace(/href="([^"]+?\.md)"/g, function () {
            var path = arguments[1]
            // Ref: http://fis.baidu.com/fis3/api/fis.uri.html
            var targetFile = fis.uri(path).file || {}
            var url = targetFile.url || path
            // https://github.com/fex-team/fis3-hook-relative
            // relative api
            if (file.relative) {
                var message = {
                    target: url,
                    file: file
                }
                fis.emit('plugin:relative:fetch', message);
                url = message.ret
            }
            return 'href="' + url + '"'
        })
    }

    var config = {}
    content = compileRunPre(content)
    content.replace(/^<!--CONFIG([\s\S]+)CONFIG-->/, function (content, json) {
        if (json) {
            try {
                config = JSON.parse(json.trim())
            } catch (err) {
                fis.log(err)
                fis.log(file.origin + " <!--CONFIG JSON CONFIG--> 中 JSON 格式错误")
            }
        }
    })
    config.template = config.template || 'default.html'

    var templatePath = fis.project.getProjectPath() + conf.templateDir + config.template

    if (fis.util.isFile(templatePath)) {
        var html = fis.util.read(templatePath)
        var template = html
        /*
            {{{include "/nav.md"}}}
        */
        template = template.replace(/\{\{include\s+['"]([^'"]+)['"]\}\}/g,function () {
            var path = arguments[1]
            var path = fis.project.getProjectPath() + path
            file.cache.addDeps(path)
            if (fis.util.isFile(path)) {
                var content = fis.util.read(path)
                content = marked(content)
                content = mdtouri(content)
                return content
            }
            else {
                return '<!-- not find ' + path +  ' -->'
            }
            return path
        })
        render = Handlebars.compile(template)
    }
    else {
        render = _notTemplate
    }

    var content = marked(content)
    content = mdtouri(content)
    var $ = cheerio.load(content)

    config.title = config.title || $('h1').text() || $('h2').text()

    var html = render({
        content: content,
        config: config
    })
    var hash
    for(hash in oRunPreMap) {
        html = html.replace(new RegExp(hash,'g'), oRunPreMap[hash])
    }
    return html
};

fis.hook('relative');

fis.match('**/**.md', {
    parser: compile,
    useCache: false,
    relative: true,
    rExt: '.html'
})
fis.match('(**/)README.md', {
    release: '$1index.html',
})