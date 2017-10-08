const app = require("express")();
const fs = require("fs");

const port = process.env.PORT || 3001;
const utilData = JSON.parse(fs.readFileSync('data/utilData.json', 'utf8'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
}

/*
 *  GET /data?q=[column] => [{ month: Date, [column]: [data] }, ...]
 */
app.get("/data", (req, res) => {
  if (!req.query.q) {
    res.json(utilData); // No query specified -- get unaltered dataset
  } else {
    res.json(
      utilData
        .map(entry => [Date.UTC(entry.year, entry.month - 1), entry[req.query.q]])
        .sort((a, b) => a[0] - b[0])
    );
  }
});

// Possible to establish more routes/queries for data preprocessing --
// might be useful for larger amounts of data

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
