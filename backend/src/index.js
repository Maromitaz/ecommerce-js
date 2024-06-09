const express = require('express');
const app = express();
const port = 8080;

const fs = require('fs');
const __frontend_src = "./frontend/";

app.get('/', (req, res) =>{
    fs.readFile(__frontend_src + "index.html", function(error, html){
        if(error){
            throw error;
        }
        res.end(html);
    });
});

app.listen(port, () =>{
    console.log(`Running server on port: ${port}`);
});

