import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [user, setUser] = useState({
    email: " ",
    pass: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    // get from input field
    const { name, value } = e.target;
    setUser((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };
  //   const handleClick = () => {
  //     navigate("/Home");
  //   };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!user.email || !user.pass) {
      alert("Please enter both email and password");
      return;
    }
    try {
      const res = await axios.post(" http://localhost:3001/foodlogin/add", {
        email: user.email,
        pass: user.pass,
      });
      alert("user login successful");
      console.log(res.data);
      navigate("/Home");
    } catch (err) {
      alert("user login ");
      console.log(err);
      navigate("/");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          name="pass"
          value={user.pass}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
