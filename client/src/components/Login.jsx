import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { setToken, setIsAuthenticated } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.token);
      setToken(response.token);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log("error message:", error.message);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
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
      <button type="submit">Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
