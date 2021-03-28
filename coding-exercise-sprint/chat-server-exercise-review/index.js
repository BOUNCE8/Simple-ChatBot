const express = require("express");
const router = require("./router");

const app = express();

const PORT = 3005;

app.use(express.static("./client"));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} 🚀👨‍🎤`);
});
