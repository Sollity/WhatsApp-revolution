const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Rodando na porta " + port));
