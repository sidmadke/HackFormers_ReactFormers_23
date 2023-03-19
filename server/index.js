const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser());

//routes
const userRoutes=require('./routes/user');
const detailsRoutes=require('./routes/details');
const planRoutes=require('./routes/plan');
const openaiRoutes=require('./routes/openai')

const url="mongodb+srv://Pranjali:pranjali12@cluster0.3witd4n.mongodb.net/?retryWrites=true&w=majority";
const port=2000;

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Database Connected");
    }
})

app.use(cors());
app.use('/api',userRoutes);
app.use('/api',detailsRoutes);
app.use('/api',planRoutes);
app.use('/api',openaiRoutes);

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})