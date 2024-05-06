const express = require('express');
const mongoose = require('mongoose');
const adviceRoutes = require('./api/routes/adviceRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/adviseNextStep', { useNewUrlParser: true });

app.use('/api/advice', adviceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
