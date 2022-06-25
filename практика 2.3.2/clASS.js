const fs = require('fs');
const axios = require('axios');
const Path = require('path');
const express = require('express');
const app = express()
const port = 3000
const http = require("http");


class Person {
constructor(login,password) { 
    this.login = login;
    this.password = password;
}
sayHi() {
console.log(this.login);
console.log(this.password);
}
}
function User(login,password){
    this.login = login;
    this.password = password;
    this.displayInfo = function(){
        console.log('Login: ${this.login} Password: ${this.password}');
    }
}

User.prototype.sayHi = function(){
    console.log('My data: ${this.name} ${this.password}');
};

module.exports = User;


axios.get("https://jsonplaceholder.typicode.com/todos").then(
        response => {
            const a = response.data;
            console.log(response);
            let json = JSON.stringify(a);
            console.log(typeof json);
            console.log(json);
            fs.writeFile('todos1.json', json, function (err) {
                if (err) return console.log(err);
                console.log('json file has created');

            });

        }
    )
    .catch(function (error) {
        console.log(error);
    })
    url = 'http://localhost:3000'
app.get(url, (req, res) => {

    fs.readFile('todos1.json', 'utf8', function (error, data) {
        if (error) {
            console.error(error)
            console.log("ERRORrr")
            return
        }
        const todos = JSON.parse(data);
        console.log("upload has done");
        digit = 69;
        kirpich = todos[digit];
        console.log(kirpich);
        console.log("данные получены!");

        res.send(todos[req.params.id]);

    })
})




http.createServer(requestHandler).listen(3000); 



//const requestHandler = (request, response) => {
//response.setHeader("Content-Type", "text/html; charset=utf-8;");
//function Input(){
//login_ok = false;
//user_name = "";
//password = "";
//user_name = ("Логин","");
//user_name = user_name.toLowerCase();
//password = prompt("Пароль","");
//password = password.toLowerCase();
//if (user_name=="login" && password=="pass") {
//login_ok = true;
//window.location = "index.php";
//}
//if (user_name=="login2" && password=="pass2") {
//login_ok = true;
//window.location = "forum/index.php";
//}

//if (login_ok==false) alert("Неверный логин или пароль!");
//}
//Input;
//response.end();
//if (request.url === "/ivanov" || request.url === "/") {
//response.write('login: '+'password: ');

//} else if (request.url == "/petrov") {
//response.write('login: '+'password: ');
//}


//};

//http.createServer(requestHandler).listen(3000);
