fis.hook('relative');

fis.match('**.md', {
    parser: fis.plugin('marked-template'),
    useCache: false,
    relative: true,
    rExt: '.html'
})
fis.match('(**/)README.md', {
    release: '$1index.html',
})