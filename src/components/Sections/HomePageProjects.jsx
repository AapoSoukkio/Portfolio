import React, { useState } from "react";
import styled from "styled-components";
import FullStack from "./FullStack";
import WebDev from "./WebDev";
import MoreOfMyWork from "./MoreOfMyWork";
import Security from "./Security";

const data = [
  "Full stack",
  "Web Dev",
  "Security",
  "Others"
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
    margin-bottom: 150px
  }
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

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

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

      @media only screen and (max-width: 768px) {
        animation: none; 
      }
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

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
    margin-bottom: 100px
  }
`;

const ArrowIndicator = styled.span`
  font-size: 30px;
  color: white;
  margin-left: 10px;
  display: none;

  @media only screen and (max-width: 768px) {
    display: inline;
  }
`;

const HomePageProjects = () => {
  const [work, setWork] = useState("Full stack");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} data-text={item} onClick={()=>setWork(item)}>
                {work === item ? <ArrowIndicator>→ </ArrowIndicator> : null}
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        {work === "Full stack" ? (
            <FullStack />
          ) : work === "Web Dev" ? (
            <WebDev />
          ) : work === "Security" ? (
            <Security />
          ) : (
            <MoreOfMyWork />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default HomePageProjects 