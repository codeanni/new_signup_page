const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const SignupModel = require('./models/Signup')

//middleware
const app = express()
app.use(cors(
    {
        origin: ["https://new-signup-page-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
))
app.use(express.json())


mongoose.connect('mongodb+srv://anni:anni123@cluster0.lvcbz17.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')

app.post('/signup' , (req,res) =>{
    const {name, email, password, confirmpassword} = req.body;
    SignupModel.findOne({email:email})
    .then(user =>{
        if(user){
            res.json("Already have an Account")
        }else{
            SignupModel.create({name:name,email:email,password:password,confirmpassword:confirmpassword })
            .then(result => res.json("Account created"))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})
app.listen(3001,() => {
    console.log("server is running")
})
