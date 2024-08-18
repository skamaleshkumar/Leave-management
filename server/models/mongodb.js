const mongoose =require('mongoose')
const dbUrl="mongodb+srv://skamaleshkumar89251:QC6pYLOPZDuH5viP@cluster0.oinm01a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dbUrl)
.then(() => {
    console.log("mongodb connected")

})
.catch(()=>{
    console.log("not conneted")
})

const EmployeeSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const EmployeeModel =new mongoose.model("employees",EmployeeSchema)
module.exports=EmployeeModel