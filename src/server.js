const path = require('path');
const express = require('express');

const app = express();

const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const PORT = process.env.PORT || 4000;
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get('*', function (req, res) {
  res.sendFile(HTML_FILE);
});

app.listen(PORT,function listenHandler() {
  console.log(`Server running on Port ${PORT}...`);
});
