
// const { redirectUrl } = require('../utils/redirectUrl');
const customer = require('./customer.routes');
const turn = require('./turn.routes');


const routes = (app) => {
  app.use('/api/customer', customer);
  app.use('/api/turn',turn);
  // app.get('/', redirectUrl);
}


module.exports = routes;