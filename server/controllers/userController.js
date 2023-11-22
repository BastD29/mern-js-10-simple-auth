import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    await User.signup(email, password);
    res
      .status(201)
      .json({ message: "User successfully created", email: email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "60s",
    });

    res.status(200).json({ message: "User successfully logged in", token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signup, login };
