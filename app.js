const proxy = require('express-http-proxy');
const app = require('express')();
const os = require('os');
const port = 9000;

function displayIpAddress() {
  var ifaces = os.networkInterfaces();

  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        console.log(ifname, iface.address);
      }
      ++alias;
    });
  });
}

// app.use('/', proxy('http://finops-backoffice.test'));
app.use('/', proxy('http://api.nordic-live.test'));

app.listen(port, () => {
  displayIpAddress();
  console.log(`Listening on port ${port}`);
});

