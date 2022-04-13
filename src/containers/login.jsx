import styled from "styled-components";
// import Register from "../components/register";
import LoginForm from "../components/login";
import green from "../assets/profile-green.svg";
import orange from "../assets/profile-orange.svg";
import purple from "../assets/profile-purple.svg";
import pattern from "../assets/pattern.svg";
//import { signup } from "../api/api";

const Login = () => {
  //const handleRegisterUser = () => {};

  return (
    <StyledLogin>
      <div className="image-side">
        <div className="profile-image">
          <img src={orange} alt="profile pic" />
        </div>
      </div>
      <div className="form-side">
        <LoginForm />
      </div>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .form-side {
    width: 50%;
    height: 100%;
    background-image: url(${pattern});
  }
  .image-side {
    background: linear-gradient(#7621de, #9e70d5);
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .profile-image {
      aspect-ratio: 1;
      width: 30%;
      border-radius: 50%;
      background: whitesmoke;
      img {
        padding: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
`;
