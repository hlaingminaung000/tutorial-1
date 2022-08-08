const express = require('express');
const handlebars = require("handlebars");
const db=require("./db");
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// const compiled= handlebars.compile("hello from {{name}} {{age}}");
// const result=compiled({name: "hlaing min aung",age: 20});
// console.log(`result`)
// console.log(result)
app.listen(3009,()=> console.log("Listening from 3009..."));

db.query('select * from template').then(res=>{
    const body=res[1].body;
    const compiled= handlebars.compile(body);
    const result=compiled({name: "hlaing min aung",age: 20});
    const parsed=JSON.parse(result);
    const replaced = parsed.body.replace(/[``]+/g, '"');
    console.log(replaced);
})