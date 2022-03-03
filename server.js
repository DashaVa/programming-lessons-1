const fs = require("fs");
const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>Class work</h2>");
        fs.appendFileSync("hello.txt","переход в home\n");
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");
        fs.appendFileSync("hello.txt","переход в about\n");
    } else if (request.url == "/contact") {
        response.write("<h2>Contacts</h2>");
        fs.appendFileSync("hello.txt","переход в contacts\n")
    } else {
        response.write("<h2>Not found</h2>");
    }
    response.end();
};
http.createServer(requestHandler).listen(3000);