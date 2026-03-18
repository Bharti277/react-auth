const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");

app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
