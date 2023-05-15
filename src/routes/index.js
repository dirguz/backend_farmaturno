const { redirectUrl } = require('../controllers/customer.controller');
const customer = require('./customer.routes');

const routes = (app) => {
  app.get('/', redirectUrl);
  app.use('/api', customer);
}


module.exports = routes;