import React from "react";
import styled from "styled-components";
const Contact = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  a {
    padding: 10px 0px;
  }
`;
const Item = styled.div`
  padding: 15px 0px;
  display: flex;
  height: 50px;
  align-items: center;

  .Fecha {
    min-width: 40%;
  }

  .Info {
    flex: 1;
    display: flex;
    flex-direction: column;

    p,
    h2 {
      text-align: center;
    }
  }
`;

const TitleCategory = styled.div`
  margin: 30px 0;
  padding: 10px 10px;
  text-align: start;
  font-size: 1.5rem;
  color: #0040a6;
`;

const Container = (props) => {
  const { category, data, type } = props;

  const acc = data.map((elem, key) => {
    if (elem.type == 1) {
      return (
        <Item key={key}>
          <div className="Fecha">
            <p>
              {elem.start} - {elem.end || "Now"}
            </p>
          </div>
          <div className="Info">
            <h3>
              {elem.position} at {elem.company}
            </h3>
            <p>{elem.location}</p>
          </div>
        </Item>
      );
    }
    if (elem.type == 2) {
      return (
        <Contact key={key}>
          <a href={elem.link} target="_blank" rel="noopener noreferrer">
            {elem.socialMedia}
          </a>
        </Contact>
      );
    }

    return null;
  });

  return (
    <>
      <TitleCategory>
        <h2>{category}</h2>
      </TitleCategory>
      {acc}
    </>
  );
};

export default Container;
