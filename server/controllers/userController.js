import User from "../models/userModel.js";

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    res.status(201).json({ email: user.email, password: user.password });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signup };
