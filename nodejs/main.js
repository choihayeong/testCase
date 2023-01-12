const http = require('http');
const fs = require('fs');

const app = http.createServer((request, response) => {
    let appUrl = request.url;

    if(appUrl == '/') {
        appUrl = '/index.html';
    }

    if(appUrl == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + appUrl));
});

app.listen(3000);