const http = require ('http');
const fs = require('fs');
const app = http.createServer ((req,res) => {
            res.writeHead(200, {'Content-Type':'text/html'});
            const lecture=fs.createReadStream('w.html');
                  lecture.pipe(res);
});
app.listen (8658);
console.log ('yassine');
