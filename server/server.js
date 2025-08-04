import express, { response } from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()   
app.use(express.json())
app.use(cors())
dotenv.config();
console.log("my very secret key is", process.env.MY_VERY_SECRET_KEY);



app.get("/", function(req, res){
    res.send("this is my root route hun")
})

app.listen(2222, function(){
    console.log('server is running on port: 2222')
}

)