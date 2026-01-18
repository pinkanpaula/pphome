const express = require('express');
const path = require('path');
const app = express();
const port = 8080; // or any other port

// Serve static files from the Angular dist directory
app.use(express.static(path.join(__dirname, 'dist/pphome')));

// Redirect all non-API routes to the Angular app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/pphome/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
