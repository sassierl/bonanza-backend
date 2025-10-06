import express from "express";
import cors from "cors";
import playersRouter from "./routes/players.js";

const app = express();
const port = 3001;

// Définitions des middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api/players", playersRouter);

app.get('/lobby', (req, res) => {
  // demande le  niveau des joueurs
  res.send('Salut Thomas!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


export default app;


