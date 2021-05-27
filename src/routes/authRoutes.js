const express = require('express');
const mongoose = require('mongoose')

const router = express.Router();

const jwt = require('jsonwebtoken')

const User = mongoose.model('User')
router.post('/signup',async (req,res)=>{
    console.log(req.body);
    const {email,password} = req.body
    try{
        const user = new User({email,password})
        await user.save();

        const token = jwt.sign({userId: user._id }, 'MY_SECRET_KEY');
        res.send({token})
    }catch(e){
        res.status(422).send(e)
    }
   
})

router.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(422).send({error:'Must provide email and password'})
    }

   const user = await User.findOne({email})
   if(!user){
        res.status(404).send({error:'Invalid password or email'})
   }

   try{
     await user.comparePassword(password)
     const token = jwt.sign({userId: user._id }, 'MY_SECRET_KEY');
     res.send({token})
   }catch(e){
      res.status(404).send({error:'Invalid password or emaisl'})
   }
})

module.exports = router;