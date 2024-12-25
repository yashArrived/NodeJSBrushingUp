//Middlewares are functions that we want each route to pass through before its code execution..
//It have req,res,next ; 3 parameters
//We have 3 kinds of middlewares :

/*
1) Built-in -- given by express
2) Custom - we make own
3) Thirdparty -  we install : 
       -> morgan ; it is a http req logger
       npm i morgan
    app.use(morgan('dev'));
    logs the time,req of routes.
The app.use(()=>{}) ; these kind of middlewares run for all routes


To pass middleware to specific routes . do  : app.use("/" , middleware , (req,res)=>{})
or app.use("/" , (req,res,next)=>{... next()} , {req,res}=>{})

    */