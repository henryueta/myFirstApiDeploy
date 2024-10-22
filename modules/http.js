const http = require('http');

const port = process.env.PORT || 2005;



const server = http.createServer( async (req,res)=>{

    if(req.url == "/users"){
        try{
       await res.writeHead(200,{"Content-Type":"application/json"});
       const user = require('../src/model/user.js');
            await res.end(JSON.stringify(user,null,3));
        }
        catch(error){
            return console.log(error);
        }

    }

});

server.listen(port,(error)=>{

if(error){
    return console.log(error);
}

console.log("Sucess");

})