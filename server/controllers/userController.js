import User from "../models/userModel.js";

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

export { signup };
