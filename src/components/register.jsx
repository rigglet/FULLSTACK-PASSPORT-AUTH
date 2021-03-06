import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { SiPassport } from "react-icons/si";
//message components
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//REST api call
import { register } from "../api/api";

const Register = ({ setAuth }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const notify = (type) => {
    switch (type) {
      case "MISSING":
        toast.warn("Please enter a username and password", { color: "black" });
        break;
      case "INVALID":
        toast.error("Please check username and password are correct", {
          color: "black",
        });
        break;
      default:
        toast.dark("Nothing to report");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email.length > 0 && password.length > 0 && username.length > 0) {
      const data = { email, username, password };
      const res = await register(data);

      if (res.status === 200) {
        setAuth({
          username: res.data.username,
          email: res.data.email,
        });

        //reset fields
        setUsername("");
        setPassword("");
        setEmail("");

        //redirect
        navigate("/admin");
      } else {
        //toast message - invalid credentials
        notify("INVALID", res.error);
        setLoading(false);
      }
    } else {
      //toast message - missing credentials
      notify("MISSING");
      setLoading(false);
    }
  };

  return (
    <StyledRegister>
      <ToastContainer
        closeButton={false}
        transition={Zoom}
        position="bottom-center"
        draggable={false}
        pauseOnHover
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
      <div className="register-container">
        <SiPassport color="#de7721" size="50px" />
        <h1 className="form-title">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              autoComplete="none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="false"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            {/* <button className="button-sign">Sign in</button> */}
            <button className="button button-register">Register</button>
          </div>
          <Link to="/login">Back to Sign in</Link>
        </form>
      </div>
    </StyledRegister>
  );
};

export default Register;

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;

  .register-container {
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 6px solid #7721de;
    border-radius: 20px;
    box-shadow: 0 0 10px black;
    gap: 2rem;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      padding: 1rem;
      height: auto;
      flex: 1 1 250px;

      .input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.5rem;
      }
      label {
        font-weight: bold;
        font-size: 1rem;
        color: #7721de;
        text-transform: uppercase;
      }
      input[type="text"],
      input[type="email"],
      input[type="password"] {
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1rem;
        border: 1px solid $313131;
        border-radius: 8px;
        outline: none;
        border: 3px solid #de7721;
        color: #313131;
      }
    }
  }
`;
