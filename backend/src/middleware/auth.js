const jwt = require("jsonwebtoken");
const prisma = require("../db"); // Use your central prisma instance

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      const user = await prisma.user.findUnique({ where: { id: decoded.id } });
      
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
      
      req.user = user;
      return next(); // Use 'return' to stop execution here
    } catch (error) {
      console.error("Auth Error:", error.message);
      return res.status(401).json({ error: "Not authorized, token failed" });
    }
  }

  // This should only run if the 'if' above never started
  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }
};

module.exports = { protect };
