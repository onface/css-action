fis.hook('relative');
var markrun = require('markrun')
var codeTemplate = markrun.string(function() {
/*!
<% if(__lang === "html") {%>
    <div class="markrun-html"><%- html %></div>
<%- __code %>
    <% if(prehide === false) {%>
        <div class="markrun-source">
            <pre class="markrun-source-pre"><%- __source %></pre>
        </div>
    <% }%>
<% } else { %>
    <div class="markrun markrun--<%- __lang %>">
        <div class="markrun-html"><%- html %></div>
        <div class="markrun-code">
        <% if(__lang === "js") {%>
            <script data-markrun-lastrun="<%- markrun_lastrun %>">
                <%- __code %>
            </script>
        <% } %>
        <% if(__lang === "css") {%>
            <style>
                <%- __code %>
            </style>
        <% } %>
        </div>
        <div class="markrun-source">
        <pre class="markrun-source-pre"><%- __source %></pre>
        </div>
    </div>
<% }%>
*/
})
fis.match('**.md', {
    parser: function (content) {
        return markrun(content, {
            codeTemplateDefaultData: {
                markrun_lastrun: true,
                html: '',
                prehide: false
            },
            codeTemplate: codeTemplate
        })
    },
    useCache: false,
    relative: true,
    rExt: '.html'
})
fis.match('(**/)README.md', {
    release: '$1index.html',
})
