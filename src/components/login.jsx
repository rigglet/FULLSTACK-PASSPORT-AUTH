import { useState } from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${username} ${password}`);
  };

  return (
    <StyledLogin>
      <div className="login-container">
        <FaUser color="#de7721" size="50px" />
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
            <button className="button-register">Register</button>
          </div>
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
        justify-content: space-between;
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
