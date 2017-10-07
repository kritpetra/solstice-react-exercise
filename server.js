const app = require("express")();
const fs = require("fs");

const port = process.env.PORT || 3001;
const utilData = JSON.parse(fs.readFileSync('data/utilData.json', 'utf8'));

app.get("/data", (req, res) => { // GET everything -- for testing
  res.json(utilData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
