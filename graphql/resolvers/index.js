const authResolver = require('./auth')
const eventsResolver = require('./events')
const booknigResolver = require('./booking')

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...booknigResolver
}
module.exports = rootResolver