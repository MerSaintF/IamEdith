import React from "react";
import styled from "styled-components";

const Item = styled.div`
  margin: 0px 0px 50px 0px;
  display: flex;
  //align-items: center;

  .Fecha {
    min-width: 30%;
  }

  .Info {
    flex: 1;
    display: flex;
    flex-direction: column;

    p,
    h2 {
      text-align: center;
    }

    h3 {
      font-weight: bold;
    }
  }
`;

const TitleCategory = styled.div`
  margin: 30px 0;
  padding: 10px 10px;
  text-align: start;
  font-size: 1.5rem;
  color: #0040a6;
  hr {
    color: #0040a6;
    size: 5;
  }
`;

const Container = (props) => {
  const { category, data } = props;

  const acc = data.map((elem, key) => {
    if (elem.type == 1) {
      return (
        <Item key={key}>
          <div className="Fecha">
            <p>
              {elem.start} - {elem.end}
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
        <a key={key} href={elem.link} target="_blank" rel="noopener noreferrer">
          <img src={elem.img} alt={elem.socialMedia} />
        </a>
      );
    }
    return null;
  });

  return (
    <>
      <TitleCategory>
        <h2>{category}</h2>
        <hr/>
      </TitleCategory>
      <div className={category}>{acc}</div>
    </>
  );
};

export default Container;
