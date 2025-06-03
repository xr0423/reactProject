const express = require('express');
const router = express.Router();
const db = require('../connect'); // Use the updated db connection

// Test route to verify database connection
router.get('/test', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    res.json({ success: true, message: 'Database connected successfully!', result: rows[0].result });
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).json({ success: false, message: 'Failed to connect to the database.', error: error.message });
  }
});

module.exports = router;
