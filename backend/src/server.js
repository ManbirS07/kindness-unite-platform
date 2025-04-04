const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 5000;
const dbURI = 'mongodb+srv://arnavkesari13:PGl6XauYuABQ1CO5@hackbyte.wq7nmwt.mongodb.net/';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });