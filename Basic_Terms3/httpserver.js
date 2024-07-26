const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.statusCode = 200,
    res.setHeader
    ('Content-type', 'text/html'),
    res.end('<h1>Yee... This is my first http server port page!!</h1> <p> Hey this is a way to rock the world</p>');
});

server.listen(port, () => {
    console.log(`Server is listen on the port ${port}`)
})