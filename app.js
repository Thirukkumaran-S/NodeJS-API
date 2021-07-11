const express=require('express');
const app=express();

const mongoose = require('mongoose');

const morgan=require('morgan');

const user=require('./Router/user');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req,res,next)=>
{
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content-Type,Accept,Authorization'
        );

        if(req.method==='OPTIONS')
        {
            res.header('Accept-Control-Methods','PUT,POST,PATCH,DELETE,GET');
            return res.status(200).json({

            })
        }
        next();
});

//db connection

 mongoose.connect('mongodb+srv://dbthiru:dbthirupwd@cluster0.ux5nz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
        console.log('database connected');
  }).catch(err=>{
    console.log('database err is '+err);
  });

  mongoose.Promise=global.Promise;
  mongoose.set('useNewUrlParser',true);
  mongoose.set('useFindAndModify',false);
  mongoose.set('useCreateIndex',true);
  mongoose.set('useUnifiedTopology',true);
  


app.use(morgan('dev'));

app.use('/user',user);


module.exports=app;





// app.use('/',(req,res,next)=>{

//     res.status(200).json({
//         message:'hello world',
//         here:'thiru new'
//     });

// });