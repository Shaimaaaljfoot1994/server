'use strict'
require('dotenv').config();
const cors= require('cors');
const express=require('express');
const PORT=process.env.PORT
const server=express();

server.get('/',(Request,Response) => {
const data=require();
Response.status(200).send("Home Page");
});



server.get('/data',(Request,Response) => {
    const data=require();
Response.send(200).json("");

 });


server.use('*',()
Response.status(404).send('Not Found')

);
