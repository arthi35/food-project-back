const express= require("express");
const Pizza=require("./models/pizzaModel")
const db=require("./db.js")
const app=express();
require('dotenv').config();
const cors = require("cors");
app.use(express.json());
 
const port = process.env.PORT || 5000;
const pizzasRoute =require("./routes/pizzasRoute")
const userRoute =require("./routes/userRoute")
const ordersRoute =require("./routes/ordersRoute")

app.use(cors({
    origin: "*",
}))
app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
// order delete
 app.use('/api/orders/',ordersRoute)
// order delete 
app.get("/",(req,res)=>{
    res.send("Server Working") 
})


app.listen(port, ()=>{
    console.log('listening to', port)
    })
