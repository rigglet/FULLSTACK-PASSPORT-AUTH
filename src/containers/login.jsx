import styled from "styled-components";
import LoginForm from "../components/login";
import Projects from "../components/projects";

const Login = ({ setAuth, projects, handleItemDelete, handleItemAdd }) => {
  return (
    <StyledLogin>
      <div className="image-side">
        <Projects
          projects={projects}
          handleItemAdd={handleItemAdd}
          handleItemDelete={handleItemDelete}
        />
      </div>
      <div className="form-side">
        <LoginForm setAuth={setAuth} />
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
`;
