// If we did not send any response in a route handler then it will run intoo infinite loop.
ex: app.use("/user" , (req,res)=>{
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

    },
    
    (req,res,next)=>{
   // if we did not call next() in the previous route handler then this will not be executed

    } 
);
