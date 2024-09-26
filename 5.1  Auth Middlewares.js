//logic of checking auth

app.get('/admin/getDetails', (req, res) => {    
   const token = 
   "xyz";
   const isAdminAuthorised = token === "xyz";
   if(isAdminAuthorised){
       res.send("Welcome Admin");}
    else{
        res.status(401).send("You are not authorised to view this page");
    }
});

//if i need to check for different route the same thing whthter isadminauthorised or not then will i be doing the above procedure again n
///agian , is this a good way???

//This is where middleware comes into picture

//We will create a middleware function which will check if the user is authorised or not and then we will use this middleware function in the route handler
//we will run it for /admin route so it will check for all the related child paths


app.use('/admin', (req, res, next) => {
    const token = 
    "xyz";
    const isAdminAuthorised = token === "xyz";
    if(!isAdminAuthorised){
        res.status(401).send("You are not authorised to view this page");}
     else{
        next();
     }
});

app.get('/admin/getDetails', (req, res) => {    
    res.send("Welcome Admin");
});

//to maintain the code we can create a separate middleware function and then use it in the route handler
//the best practice is to create a middlewares folder , then we create a function in it and export it using module.exports = {functionName};
//and it is a named export so we can import it using import {functionName} from 'path';
//and we can then use it in the route handler : app.use('/admin', functionName);

// we can also use middleware in a single route handler : 
app.use('/admin', authFncName,(req, res, next) => {   
});


