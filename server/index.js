const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Import routes
const yourRoutes = require('./routes/yourRoutes');
app.use('/api/yourroute', yourRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
