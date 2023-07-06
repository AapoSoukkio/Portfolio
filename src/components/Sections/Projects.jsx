import React, { useState } from "react";
import styled from "styled-components";
import FullStack from "./FullStack";
import WebDesign from "./WebDesign";
import MoreOfMyWork from "./MoreOfMyWork";
import Development from "./Development";

const data = [
  "Fullstack",
  "Web Design",
  "Development",
  "More of my work"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  white-space: nowrap;

  &::after {
    content: attr(data-text); 
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
          overflow: hidden;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;

const Projects = () => {
  const [work, setWork] = useState("Fullstack");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} data-text={item} onClick={()=>setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        {work === "Fullstack" ? (
            <FullStack />
          ) : work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <MoreOfMyWork />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Projects 