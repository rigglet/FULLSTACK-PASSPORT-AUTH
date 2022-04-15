import styled from "styled-components";
import Register from "../components/register";
import Projects from "../components/projects";

const Signup = ({ setAuth, projects, handleItemAdd, handleItemDelete }) => {
  return (
    <StyledSignup>
      <div className="image-side">
        <Projects
          projects={projects}
          handleItemAdd={handleItemAdd}
          handleItemDelete={handleItemDelete}
        />
      </div>
      <div className="form-side">
        <Register setAuth={setAuth} />
      </div>
    </StyledSignup>
  );
};

export default Signup;

const StyledSignup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
