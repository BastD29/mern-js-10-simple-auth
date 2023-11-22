import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded:", decoded);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default auth;