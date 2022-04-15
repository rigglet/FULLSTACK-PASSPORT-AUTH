import styled from "styled-components";
import { Link } from "react-router-dom";
import orange from "../assets/profile-orange.svg";
import pattern from "../assets/pattern.svg";
import Projects from "../components/projects";

const Admin = ({ projects, handleItemAdd, handleItemDelete }) => {
  return (
    <StyledAdmin>
      <div className="image-side">
        <Projects
          projects={projects}
          handleItemAdd={handleItemAdd}
          handleItemDelete={handleItemDelete}
        />
      </div>
      <div className="form-side">
        <div className="profile-image">
          <img src={orange} alt="profile pic" />
        </div>
        <div className="logout-container">
          <h1>Logged in!</h1>
          <Link to="/login">Logout</Link>
        </div>
      </div>
    </StyledAdmin>
  );
};

export default Admin;

const StyledAdmin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .form-side {
    width: 50%;
    height: 100%;
    background-image: url(${pattern});
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    .profile-image {
      aspect-ratio: 1;
      width: 50%;
      border-radius: 50%;
      background: whitesmoke;
      border: 6px solid #7721de;
      img {
        padding: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .logout-container {
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
  }

  .image-side {
    background: linear-gradient(#7621de, #9e70d5);
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
