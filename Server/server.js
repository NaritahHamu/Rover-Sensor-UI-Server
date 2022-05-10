// server.js
const {exec} = require('child_process');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const portNum = 4000;

//Arduino Functions

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({ path: '/COM3', baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n'}))
const FileSystem = require('fs'); 

app.use(bodyParser.urlencoded({ extended: false }));



// Set up home route
app.get('/', (req, res) => {
  res.send('This is the homepage!!');
});
// Set up second page
app.get('/second', (req, res) => {
  res.send('This is the second page');
});

app.listen(portNum, () => {
  console.log(`Success! Your application is running on port ${portNum}.`);
});

port.on('open', () => {
  console.log(port)
})
parser.on('data', data =>{
  FileSystem.writeFileSync('./Database/sensorData.json', data);
});