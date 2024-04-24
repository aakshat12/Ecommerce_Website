import React from "react";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("isLogedIn", true);
    axios
      .post("http://localhost:3001/Login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/Home");
        }
      })
      .catch((err) => console.log(err));
  };
  const signup = () => {
    navigate("/");
  };

  return (
    <>
      {/* <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label for="username" >Username</label>
        <input type="email"  name="email" placeholder="Email "  onChange={(e) => setEmail(e.target.value)} />

        <label for="password">Password</label>
        <input type="password"  name="pswd" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
        <button>Log In</button>

       
        
      </form> */}
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div
          className="   bg-white p-3 rounded w-25"
          style={{ height: "450px" }}
        >
          <h1
            className="d-flex justify-content-center align-items-center"
            style={{
              opacity: "0.5",
              textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)",
            }}
          >
            LOGIN
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4" style={{ margin: "3rem 0" }}>
              <label htmlFor="email">
                <strong style={{ fontSize: "25px" }}>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3" style={{ margin: "1rem 0" }}>
              <label htmlFor="email">
                <strong style={{ fontSize: "20px" }}>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success w-100 rounded-0"
              style={{ margin: "2rem 0" }}
            >
              Submit
            </button>
            <div
              className="Register-forget"
              style={{
                margin: "0.2rem 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                type="button"
                className="btn btn-outline-dark btn-rounded"
                onClick={() => signup()}
                style={{ fontSize: "12px" }}
              >
                Register
              </button>
              <button
                type="button"
                className="btn btn-outline-dark btn-rounded"
                style={{ fontSize: "12px" }}
              >
                FORGET PASSSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
// export default Login;
