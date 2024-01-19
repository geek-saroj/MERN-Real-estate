import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import cookieParser from 'cookie-parser';
import authRouter  from './routes/auth.route.js';
import path from 'path';
import listingRoute  from './routes/listing.route.js';

dotenv.config();
const __dirname = path.resolve();
const app = express();
app.use(cookieParser());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('database connected successfull');
}
).catch((err) =>{
    console.log(err);
});


app.listen(3000,()=>{
    console.log('server is runing on 3000 port')
})
app.use(express.json());
app.use('/backend/user',userRouter);
app.use('/backend/auth',authRouter);
app.use('/backend/listing',listingRoute);
app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})





app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });

