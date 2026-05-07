require("dotenv").config();
const express = require("express");
const cors = require("cors");
const prisma = require("./db"); // This pulls the fixed URL above

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to Database via Prisma");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  } catch (err) {
    console.error("❌ DB Fail:", err.message);
    // Start anyway so you can show the UI during the demo
    app.listen(PORT, () => console.log(`🚀 Emergency Mode on port ${PORT}`));
  }
}
start();
