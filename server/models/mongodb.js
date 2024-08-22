const mongoose =require('mongoose')
const dbUrl="mongodb+srv://skamaleshkumar89251:Ku3qdgtSIdLm0WHx@cluster0.oinm01a.mongodb.net/"

mongoose.connect(dbUrl)
.then(() => {
    console.log("mongodb connected")

})
.catch(()=>{
    console.log("not conneted")
})

const EmployeeSchema = new mongoose.Schema({
    email:String,
    password:String
})

const EmployeeModel =new mongoose.model("employees",EmployeeSchema)
module.exports=EmployeeModel;