fis.hook('relative');
var markrun = require('markrun')
fis.match('**.md', {
    parser: function (content) {
        return markrun(content)
    },
    useCache: false,
    relative: true,
    rExt: '.html'
})
fis.match('(**/)README.md', {
    release: '$1index.html',
})
