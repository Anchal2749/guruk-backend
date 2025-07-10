
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); //  Load .env variables

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contacts', contactRoutes);

// Connect DB using .env value
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(' DB connection error:', err));

app.listen(5000, () => console.log('Server running on port 5000'));
