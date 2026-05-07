const express = require("express");
const prisma = require("../db");
const { protect } = require("../middleware/auth");
const router = express.Router();

router.use(protect);

router.get("/", async (req, res) => {
  const tasks = await prisma.task.findMany({ where: { userId: req.user.id } });
  res.json({ tasks });
});

router.post("/", async (req, res) => {
  const task = await prisma.task.create({ data: { title: req.body.title, userId: req.user.id } });
  res.status(201).json(task);
});

router.patch("/:id", async (req, res) => {
  const task = await prisma.task.update({ 
    where: { id: req.params.id }, 
    data: { completed: req.body.completed } 
  });
  res.json(task);
});

router.delete("/:id", async (req, res) => {
  await prisma.task.delete({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
});

module.exports = router;
