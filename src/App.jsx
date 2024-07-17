import "./App.css";
import info from "/src/assets/info/info.json";
import Container from "./assets/components/Container";
import ItemInfo from "./assets/components/ItemInfo";
import styled from "styled-components";

const Titulo = styled.div`
  margin: 40px 0px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  img {
    border-radius: 50%;
    width: 30%;
  }
  div {
    margin: 0 30px;
    text-align: start;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;

function App() {
  const sections = Object.keys(info);
  const a = sections.map((elem, index) => {
    return (
      <>
        <Container key={index} data={info[elem]} category={elem}></Container>
      </>
    );
  });
  return (
    <>
      <Titulo>
        <img src="src\assets\images\selfie.png"></img>
        <div>
          <h1>Edith Santana </h1>
          <h2>Biomedical Engineer & Aspiring Front-End Developer</h2>
        </div>
      </Titulo>
      <div>
        <p>
          I am a Biomedical Engineering student at Universidad de Guadalajara,
          graduating in 2024. I have experience in programming, analyzing
          physiological data, and repairing medical equipment. I am also
          expanding my skills in front-end development to create user-friendly
          interfaces in biomedical technology.
        </p>
      </div>
      {a}
    </>
  );
}

export default App;
