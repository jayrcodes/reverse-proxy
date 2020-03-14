const proxy = require('express-http-proxy');
const app = require('express')();
const displayIpAddress = require('./displayIpAddress')

require('dotenv').config() // load .env file to process.env

const port = process.env.PORT;

// app.use('/', proxy('http://finops-backoffice.test'));
app.use('/', proxy(process.env.ORIGIN_URL));

app.listen(port, () => {
  displayIpAddress();
  console.log(`Listening on port ${port}`);
});
