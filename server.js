const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/preview/browser'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/preview/browser/index.html'));
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
