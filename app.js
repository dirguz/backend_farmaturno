const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const dbConnection = require('./src/config/mongoDB');
const Colors = require('@colors/colors');
const routes = require('./src/routes');



const app = express();
const PORT = process.env.PORT || 3003;
const URL = process.env.URL_SERVER || 'http://localhost';

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
routes(app);

function main(){

  app.listen(PORT, () => {
    console.log(Colors.bgGreen.black(`==>> Server is running on ${URL}:${PORT} `));
  })
  dbConnection();
}

main();



