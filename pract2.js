const fs = require('fs');
const Path = require('path');  
const axios = require('axios');
const http = require('http');



axios.get('https://jsonplaceholder.typicode.com/todos') 
.then (res=> {
const json= JSON.stringify(res.data);
fs.writeFile('code.json',json,(err)=>{
        if (err) return reject(err);
        console.log('wrote');
        let arr = JSON.parse(json)
        console.log(typeof(arr));
        let mas = Object.fromEntries(
           Object.entries(arr).map(([key,value])=>[key,value])
        );
        console.log(typeof(mas));
        console.log(mas[0]);
        var string = JSON.stringify(mas[0])
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/todos/1" || request.url === "/") {
        response.write(string);
        fs.appendFileSync("hello.txt","переход в home\n");
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");
        fs.appendFileSync("hello.txt","переход в about\n");
    }else {
        response.write("<h2>Not found</h2>");
    }
    response.end();
};
http.createServer(requestHandler).listen(3000); 
        //var counter = 0;
        //for (let key of Object.values(arr)){
//console.log(key);
        //}
        //console.log(key + arr[key]);
        //for (k = 0; k < arr.length; ++k){
            //console.log(k + arr[k])
        //}

        //console.log(json.search('delectus'))
    })
})
.catch(e => console.error(e))