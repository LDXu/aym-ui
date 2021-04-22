var ghpages = require('gh-pages')
ghpages.publish('dist', {
    branch: 'gh-pages',
    repo: 'git@github.com:LDXu/aym-ui.git'
}, (res) => {
    console.log('ok!')
})
