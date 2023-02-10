const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json()); // Make sure it comes back as json


mongoose.connect('mongodb+srv://Ellyn:Ellyn20@cluster0.cizcja0.mongodb.net/lab04?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });