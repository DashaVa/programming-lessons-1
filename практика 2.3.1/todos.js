const fs = require('fs');
const axios = require('axios');
const Path = require('path');
const http = require('http');
const express = require('express');

const app = express()
const port = 3000


axios.get("https://jsonplaceholder.typicode.com/todos").then(
        response => {
            const a = response.data;
            console.log(response);
            let json = JSON.stringify(a);
            console.log(typeof json);
            console.log(json);
            fs.writeFile('code.json', json, function (err) {
                if (err) return console.log(err);
                console.log('json file has created');

            });

        }
    )
    .catch(function (error) {
        console.log(error);
    })
app.get('/todos/:id', (req, res) => {

    fs.readFile('code.json', 'utf8', function (error, data) {
        if (error) {
            console.error(error)
            console.log("Error")
            return
        }
        const todos = JSON.parse(data);
        console.log("upload has done");
        
        res.send(todos[req.params.id]);

    })
})




http.createServer(requestHandler).listen(3000);