import ProjectItem from "./projectItem";
import styled from "styled-components";

const Projects = ({ projects, handleItemDelete, handleItemAdd }) => {
  return (
    <StyledProjects className="project-container">
      <h1>Projects</h1>
      <div className="button-container">
        <button className="button button-new" onClick={() => handleItemAdd()}>
          New...
        </button>
      </div>
      <div className="project-list">
        {projects.map((p) => {
          return (
            <ProjectItem
              project={p}
              key={p.projectName}
              handleItemDelete={handleItemDelete}
              handleItemAdd={handleItemAdd}
            />
          );
        })}
      </div>
    </StyledProjects>
  );
};

export default Projects;

const StyledProjects = styled.div`
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
      .project-list{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
    
`;
