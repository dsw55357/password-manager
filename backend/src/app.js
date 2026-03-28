import express from "express";
import securityRoutes from "./routes/security.routes.js";


const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend działa");
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});