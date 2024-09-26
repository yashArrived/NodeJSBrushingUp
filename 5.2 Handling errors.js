//There is another parameter in this fnc: 
app.use("/",(err,re,res,next)=>{
  if(err) {
    //also we can log the errors
    res.status(500).send("Something went Wrong"));}
  //but the good way is to use try catch
});

app.get(.....{
  try{
//Logic of db calls
  }
  catch(err){
     res.status(500).send("Something went Wrong"));
  }
});
