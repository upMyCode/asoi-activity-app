const dotEnv = require('dotenv');
const express = require('express');
const db = require('./database/dbConnections');
const bodyParser = require('body-parser');

dotEnv.config();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const checkDBConnection = async() => {
  try {
    await db.authenticate();
    console.log('DB connected');
  } catch (e) {
    console.error('DB is not connected', e)
  }
}

checkDBConnection()
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const server = express();

server.use(cors(corsOptions));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json())
server.use('/auth', require('./routes/auth.routes'))


server.listen(PORT, () => console.log(`Server starting on port ${PORT}`));
