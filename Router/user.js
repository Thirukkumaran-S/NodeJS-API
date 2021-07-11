const express=require('express');
const router=express.Router();

//const mongoose=require()

const User=require('../Model/user');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'this is get'
    });
});

router.post('/',(req,res,next)=>{

    const user=new User({
        userName:req.body.name1,
        age:req.body.age1
    });

    user.save()
    .then(result=>{
        res.status(200).json({
            message:'user details  is saved',
            resultIs:result
        });
    
    }).catch(err=>{
        res.status(500).json({
            message:'user details  is not saved',
            resultIs:err
        });
    });


   
});


router.put('/',(req,res,next)=>{
    res.status(200).json({
        message:'this is put'
    });
});


router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message:'this is patch'
    });
});



router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message:'this is delete'
    });
});

module.exports=router;