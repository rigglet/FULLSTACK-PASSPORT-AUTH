import { FaMinusCircle } from "react-icons/fa";
import styled from "styled-components";

const ProjectItem = ({ project, handleItemDelete }) => {
  return (
    <StyledProjectItem className="project-item" key={project.projectName}>
      <p>{project.projectName}</p>
      <p>{project.projectDescription}</p>
      <FaMinusCircle
        //color="#313131"
        size="25px"
        className="icon"
        onClick={(e) => handleItemDelete}
      />
    </StyledProjectItem>
  );
};

export default ProjectItem;

const StyledProjectItem = styled.div`
  display: flex;
  gap: 1rem;
  border: 3px solid #313131;
  border-radius: 8px;
  padding: 1rem;
  font-weight: 400;
  font-size: 14pt;
  .icon {
    cursor: pointer;
    transistion: 0.3 ease;
  }
  .icon:hover {
    cursor: pointer;
    color: #de7721;
    transform: scale(1.2);
  }
`;
