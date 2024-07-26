const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200,
    res.setHeader('Content-type', 'text/html'),
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200,
        res.end('<h1>Yee... This is my first http server port page!!</h1> <p> Hey this is a way to rock the world</p>');
    } else if(req.url == '/home'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }else {
        res.statusCode = 200,
        res.end('<h1>Page Not Found</h1>')
    }
});

server.listen(port, () => {
    console.log(`Server is listen on the port ${port}`)
})