import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// SIGNUP

userSchema.statics.signup = async function (email, password) {
  if (!email || !password) throw Error("All fields must be filled");
  if (!validator.isEmail(email)) throw Error("Email not valid");
  if (!validator.isStrongPassword(password))
    throw Error("Password not strong enough");

  const existingEmail = await this.findOne({ email });
  if (existingEmail) throw Error("Email already in use");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// LOGIN

userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("All fields must be filled");

  const user = await this.findOne({ email });
  if (!user) throw Error("Incorrect email");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw Error("Incorrect password");

  return user;
};

export default mongoose.model("User", userSchema);
