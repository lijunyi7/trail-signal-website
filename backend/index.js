const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example API routes
app.get('/api/trails', (req, res) => {
  res.json([
    { id: 1, name: "Local Ridge Trail" },
    { id: 2, name: "Lake Loop Trail" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
