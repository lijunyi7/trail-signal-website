const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

// Fake trails data
const trails = [
  { id: 1, name: "Local Ridge Trail" },
  { id: 2, name: "Lake Loop Trail" },
  { id: 3, name: "Forest Summit Trail" }
];

// GET /api/trails
app.get('/api/trails', (req, res) => {
  res.json(trails);
});

// GET /api/trails/:id
app.get('/api/trails/:id', (req, res) => {
  const trail = trails.find(t => t.id == req.params.id);
  if (trail) {
    res.json(trail);
  } else {
    res.status(404).json({ error: "Trail not found" });
  }
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});

