// Route Handlers are called Middleware functions in Express.js

// If we did not send any response in a route handler then it will run into infinite loop.
 app.use("/user" , (req,res)=>{
    // only a console.log or any other statement but not res.send()
    }, () => {
    // second route handler
    }
      )
    // There can be multiple route handlers , but only single res.send() 
    
    // to transfer control  to the next route handler one more argument is passed to the route handler function called next() , next() is a function that is called to transfer control to the next route handler.
    
    // Ex: 
    app.use("/user" , (req,res,next)=>{

            console.log("First route handler"); 
            //no re.send() here
            next(); // transfer control to the next route handler
            
    },
    
    (req,res,next)=>{
                //the previous route handler has called next() so this will be executed
             next();

    },
    
    (req,res,next)=>{
   // if we did not call next() in the previous route handler then this will not be executed

    } 
);

// We cannot have multiple res.send() in a single route handler or in multiple route handlers for a single route.

//if we have multiple res.send() in a single route handler then it will throw an error as "Cannot set headers after they are sent to the client"

//if we use next in the last route handler then it will throw an error as "Cannot set headers after they are sent to the client";
//at the end of the route handler we should use res.send() or res.end() to send the response to the client.

//Middlewares and request handlers :

app.use("/",(req,res,next)=>{
    console.log("Middleware 1");
    next();
});

app.get("/users",(req,res)=>{    // request handler
    console.log("Request handler 1");
    res.send("Hello world");
});

// In the above code snippet, the middleware function is executed first and then the request handler is executed. The middleware function is executed first because the middleware function is defined before the request handler.
//if we do res.send() in the middleware function then the request handler will not be executed.

