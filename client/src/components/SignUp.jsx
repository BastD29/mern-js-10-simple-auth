import { useState } from "react";
import { signup } from "../services/auth.service";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(email, password);
      alert(response.message);
      setError(null);
    } catch (error) {
      setError(error.message);
      console.log("error message:", error.message);
    }
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Email:</label>
      <div>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <label>Password:</label>
      <div>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button type="submit">Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
