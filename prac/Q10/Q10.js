const http = require("http");

const server = http.createServer((req, res) => {
    res.write("<h1>Hello world, This is my Node.js server<h1>");
    res.end();
});

server.listen(10000, (err) => {
    if (err)
        throw err;
    console.log("Server Listening at 10000");
})