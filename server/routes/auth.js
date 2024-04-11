const router = require("express").Router();
const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://santosh:admin_315@cluster0.iwffdmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const passwd = req.body.password;
    console.log({ username, passwd });

    if (username === "" && passwd === "")
      return res.status(500).json({ Error: "Empty username or password!" });

    await client.connect();
    console.log("connected");
    const database = client.db("ecommerce");
    const users = database.collection("users");
    const user = await users.findOne({ username });

    if (!user) {
      res.status(401).json("Wrong credentials!");
    }

    await client.close();

    if (user) {
      const { password, ...others } = user;
      res.status(200).json({ ...others });
    }
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json(err);
  }
});

module.exports = router;
