import express from "express";
import { login, signup } from "../controllers/userController.js";
import auth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/", auth, (req, res) => {
  res.json({ message: "You have accessed a protected route" });
});

export default router;
