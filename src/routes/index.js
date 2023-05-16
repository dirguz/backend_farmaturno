const { redirectUrl } = require('../utils/redirectUrl');
const customer = require('./customer.routes');

const routes = (app) => {
  app.use('/api/customer', customer);
  app.get('/', redirectUrl);
}


module.exports = routes;