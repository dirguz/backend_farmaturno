const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const dbConnection = require('./src/config/mongoDB');
const Colors = require('@colors/colors');
const cron = require('node-cron');
const routes = require('./src/routes');
const { handleTurns } = require('./src/utils/handleTurns');
const handleRestartDBTurn = require('./src/utils/handleRestartDBTurn');
const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault('America/Bogota');


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

  console.log('Hora del sistema >> '+ new Date());
  console.log('Hora de libreria >> ' + moment().format('MMMM Do YYYY, h:mm:ss a'));
  console.log('Hora de comparacion >> ' + moment().format('HH'));
  /**
   * Cron library that executes the function of load all turns every hour.
  */
  cron.schedule('59 06-18 * * *', async () => {
   await handleTurns();
  },
  {
    scheduled: true,
    timezone: "America/Bogota"
  })
  //handleTurns(); // Descomentar esta linea para que ejecute la funcion sin temporizador

  /**
   * Cron library that executes the function of restarting the Turn collection every day at 0 hours.
  */
  cron.schedule('59 59 23 * * *', async () => {
    console.log(Colors.cyan('==>> Restarting Turn collection'))
    await handleRestartDBTurn()
  },
  {
    scheduled: true,
    timezone: "America/Bogota"
  })

}

main();



