const app = require("express")();
const fs = require("fs");

const port = process.env.PORT || 3001;

const data = JSON.parse(fs.readFileSync('data/utilData.json', 'utf8'));

console.log(JSON.stringify(data));

app.get("/api", (req, res) => {
  // Parse data request
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
