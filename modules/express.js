const express = require('express');

const port = process.env.PORT || 2005;

const app = express();

const server = app.get("/users",async (req,res)=>{

    try{
        const user = require('../src/model/user');
        await res.status(200).json(user);
    }
    catch(error){
        res.status(500).send(error);
    }
})

app.listen(port,"::",(error)=>{
    if(error){
        return console.log(error);
    }

    console.log("SUCESS");
})