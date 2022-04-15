import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { SiPassport } from "react-icons/si";
//message components
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//REST api call
import { signin } from "../api/api";

const Login = ({ setAuth }) => {
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

    if (password.length > 0 && username.length > 0) {
      const data = { username, password };
      const res = await signin(data);

      console.log(res);
      if (res.status === 200) {
        setAuth(() => ({
          username: res.data.username,
          email: res.data.email,
        }));
        //token: res.data.token,

        //reset fields
        setUsername("");
        setPassword("");

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
    <StyledLogin>
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
      <div className="login-container">
        {/* <FaUser color="#de7721" size="50px" /> */}
        <SiPassport color="#de7721" size="50px" />
        <h1 className="form-title">Sign in</h1>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button className="button-sign">Sign in</button>
            {/* <button className="button-register">Register</button> */}
          </div>

          <Link to="/register">Not a user? Register here...</Link>
        </form>
      </div>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;

  .login-container {
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
      gap: 3rem;
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
      input[type="password"] {
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1rem;
        border: 1px solid $313131;
        border-radius: 8px;
        outline: none;
        border: 3px solid #de7721;
        //size: 50;
        color: #313131;
      }
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        .button-register {
          font-size: 1.5rem;
          padding: 0.75rem;
          border: 0;
          outline: 3px solid #de7721;
          color: #de7721;
          font-weight: bold;
          border-radius: 4px;
          transition: 0.3s ease;
        }
        .button-register:hover {
          color: whitesmoke;
          font-weight: bold;
          border-radius: 4px;
          background: #da9e6c;
          box-shadow: 0 3px 3px 3px #7c7c7c;
        }
        .button-sign {
          font-size: 1.5rem;
          padding: 0.75rem;
          border: 0;
          outline: 3px solid #de7721;
          background: #de7721;
          color: whitesmoke;
          font-weight: bold;
          border-radius: 4px;
          transition: 0.3s ease;
        }
        .button-sign:hover {
          color: whitesmoke;
          font-weight: bold;
          border-radius: 4px;
          color: #de7721;
          background: whitesmoke;
          box-shadow: 0 3px 3px 3px #7c7c7c;
        }
      }
    }
  }
`;
