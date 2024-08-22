const express =require("express")
const cors=require("cors")
const app = express()
const EmployeeModel=require("./models/mongodb")
app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({extended:false}))

app.get("/",cors(),(req,res)=>{
    res.render("/Login")
})
app.post('/', async(req,res)=>{  
    const{email,password}=req.body
    const data={
        email:email,
        password:password
    }

try {
    const check =await EmployeeModel.findOne({email:email})

    if(check){
        res.json("exist")
    }
    else{
        res.send("not exist")
    }
}
catch{
    res.json("wrong details")
    await EmployeeModel.insertMany([data])
}

})

app.listen(3001, ()=>{
    console.log("server is running")
})