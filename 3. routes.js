const express  = require("express");
const app = express();

app.use('/hello' , (req, res) => {
  res.send("helllo there")
}) 
// SO a.use will respond to all the requests whether it is get , push , delete etc with the same route path, we need different operation for diff http reqs.

app.get(..);
app.use(..);

// if we use app.use on the top and we have different methods below it with same route file then only the first the app.use will execute and not the below ones for all the http methods.

//SO always do app.use() at the end to cover the error at edge cases.

// if there is : 

app.get('/hello');
//and 
app.get('/hello/hisd'); 
//the second one  will never get executed even you open /hello/hisd then also the first route will open.

//We can also have different types,varieties of routes here : 
app.get("/ab?c")  // b is optional , /abc and /ac will point to same route.
app.get("/ab*cd") //any expression can be written betweem ab and cd , the route should always start with ab and end with cd , ex : abYashcd;
app.get("a(bc)+d") //bc can be written any number of time , ex: abcbcbcbcbcd; abcd; abcbcd;
//regix expression too :
app.get(/.*fly$/) //it should always end with fly

//this callback functions in app.get, post , use are called route handler.

//URl:  localhost/user?userID=101&pwd=test
// to get those details : 
app.get("/user" , (req,res) => {
  console.log(req.query);
}
  );

// Making routes dynamic : 
app.get("/user/:userId/:name" , (req,res)=>{
  console.log(req.params);
})


app.listen(3000 ,, ()=> {}) //app.listen is mandatory. It basically runs on the passed port number.








