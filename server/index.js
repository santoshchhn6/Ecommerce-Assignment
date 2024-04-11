const express = require("express");

const cors = require("cors");
const authRoute = require("./routes/auth");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
