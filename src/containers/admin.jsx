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
          {/* <button className="button-logout">Logout</button> */}
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
    /* .button-logout {
      font-size: 1.5rem;
      padding: 0.75rem;
      border: 0;
      outline: 3px solid #de7721;
      color: #de7721;
      font-weight: bold;
      border-radius: 4px;
      transition: 0.3s ease;
    }
    .button-logout:hover {
      color: whitesmoke;
      font-weight: bold;
      border-radius: 4px;
      background: #da9e6c;
      box-shadow: 0 3px 3px 3px #7c7c7c;
    } */
  }
  
  .image-side {
    background: linear-gradient(#7621de, #9e70d5);
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .project-container {
      //aspect-ratio: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      width: 90%;
      height: 90%;
      padding 1rem;
      border-radius: 4px;
      background: whitesmoke;
      /* .project-buttons{
        .button-sign{
          font-size: 1.5rem;
        padding: 0.75rem;
        border: 0;
        outline: 3px solid #de7721;
        color: #de7721;
        font-weight: bold;
        border-radius: 4px;
        transition: 0.3s ease;
        }
        .button-sign:hover {
        color: whitesmoke;
        font-weight: bold;
        border-radius: 4px;
        background: #da9e6c;
        box-shadow: 0 3px 3px 3px #7c7c7c;
      }
      } */
      
    }
  }
`;
