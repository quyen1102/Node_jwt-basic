const loginRouter = require('./login')
const siteRouter = require('./site')
function route (app) {
    app.use('/api/v1', loginRouter)
    app.use('/', siteRouter)
}

module.exports = route