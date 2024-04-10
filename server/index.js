const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/submit-form", (req, res) => {
  console.log(req.body);
  res.status(200).send("Form submitted successfully");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
