const express = require('express'); //This is the import

const app = express() //this is app initialisation.

//Our server or the app listenss to requests.
//listen() takes 2 parameters , one the port number and the other a callback function that runs only when our server is up and running.

app.listen('3000' , () => {
  console.log("Running");
});
// we can have app.use without route also, it will be for all the paths and will be the default path.
app.use( "/about",(req,res)=> {
  res.send("hello there , server running on 3000");
});
