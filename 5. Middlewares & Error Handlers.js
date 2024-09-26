// If we did not send any response in a route handler then it will run intoo infinite loop.
ex: app.use("/user" , (req,res)=>{
//only a conole.log or any other sstatement but not res.send()
})
