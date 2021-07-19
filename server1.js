const http = require('http');
const port = 8080;
const host = `127.0.0.1`

var server = http.createServer(function (req, res) {

  console.log(req.url)

  const router = (path, cb) => {
    if (req.url.indexOf(path) > -1) {
      return cb(req, res)
    }
  }

  res.writeHead(200, {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Header": "x-requested-with,content-type",
    'Access-Control-Allow-Method': '*',
    'Access-Control-Allow-Credentials': true,
    // 'Access-Control-Allow-Origin': 'http://' + host + ':8000',
    'Access-Control-Allow-Origin': '*',
  });

  // const time = 2000;
  const time = 0;

  if (req.url.indexOf('/test') > -1) {
    res.write(JSON.stringify({ name: 'jyjin', content: '看你多久能看到我' }));    // ttfb
    setTimeout(function () {
      res.end();       // content download end
    }, time);
  } else if (req.url.indexOf('/tes') > -1) {
    for (var i = 0; i < 100000; i++) {
      console.log(i)
    }
    res.write(JSON.stringify({ age: 18 }));    // ttfb
    res.end();       // content download end
  }

});
console.log(`listening on port ${port}...`)
// server.listen(port, '127.0.0.1');
server.listen(port, '0.0.0.0');