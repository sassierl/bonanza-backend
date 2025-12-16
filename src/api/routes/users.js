import express from "express";
const router = express.Router();

// GET /api/players
router.get("/", (req, res) => {
  res.json(["Thomas", "Louis", "Julie"]);
  console.log(req.body);
});

// POST /api/players
router.post("/", (req, res) => {
  console.log("req.body:", req.body); // doit afficher { name: "Louis" }
  const { name } = req.body;
  res.json({ message: `Player ${name} created!` });
});


export default router;
