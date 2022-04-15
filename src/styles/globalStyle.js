import { createGlobalStyle } from "styled-components";
import pattern from "../assets/pattern.svg";
const GlobalStyle = createGlobalStyle`

//#DE7721
//#21DE77
//#7721DE

* {
    //font-family: 'Lobster Two', cursive;
    //font-family: 'Poppins', sans-serif;
    font-family: 'Comfortaa', cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: whitesmoke;
}

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
  }
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
.form-title{
    font-size: 2rem;
    font-weight: bold;
    color: #7721DE;
}

//BUTTONS
.button-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .button{
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 4px;
        transition: 0.3s ease;
        padding: 0.75rem;
        border: 0;
    }

    //Register and new project buttons
    .button-register, .button-new {
        outline: 3px solid #de7721;
        color: #de7721;
    }
    .button-register:hover, .button-new:hover {
        color: whitesmoke;
        background: #da9e6c;
        box-shadow: 0 3px 3px 3px #7c7c7c;
    }

    //signin button
    .button-signin {
        outline: 3px solid #de7721;
        background: #de7721;
        color: whitesmoke;
    }
    .button-signin:hover {
        color: #de7721;
        background: whitesmoke;
        box-shadow: 0 3px 3px 3px #7c7c7c;
    }
}
`;

export default GlobalStyle;
