const proxy = require('express-http-proxy');
const app = require('express')();
const port = 9000;

// app.use('/', proxy('http://finops-backoffice.test'));
app.use('/', proxy('http://dev.nordic-api.test'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

