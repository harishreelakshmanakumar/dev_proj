const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');



const connectionString = `mongodb+srv://Admin:<password>@mern-cluster.7bnyv8m.mongodb.net/<your-database>`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});



app.listen(5501, function(){
  console.log('Server is working');
});
