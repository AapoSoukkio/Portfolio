import React, { useState } from "react";
import styled from "styled-components";
import FullStack from "./FullStack";
import WebDesign from "./WebDesign";

//Note: Use short words in order to prevent the overflow problem
//TODO: Find out the cause of this problem
const data = [
  "Web development",
  "Fullstack",
  "Hackathons",
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
  const [work, setWork] = useState("Web Design");
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
        {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Fullstack" ? (
            <FullStack />
          ) : (
            <WebDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Projects 