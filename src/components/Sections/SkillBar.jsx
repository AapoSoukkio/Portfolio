import React from "react";
import styled from "styled-components";

const SkillBarContainer = styled.div`
  width: 70%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 30px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const SkillName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const SkillBarFill = styled.div`
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    height: 15px;
  }
`;

const SkillBarProgress = styled.div`
  height: 100%;
  background-color: #da4ea2;
  width: ${(props) => `${props.progress}%`};
  transition: width 0.5s ease;

  @media only screen and (max-width: 768px) {
    height: 10px;
  }
`;

const SkillBar = () => {
  const skills = [
    { name: "Object-Oriented Programming", progress: 90 },
    { name: "Back-end Development", progress: 75 },
    { name: "Front-end Development", progress: 70 },
    { name: "Database Management", progress: 80 },
    { name: "Version Control Systems", progress: 85 },
    { name: "Testing and Quality Assurance", progress: 65 },
    { name: "Cloud Architecture", progress: 50 },
  ];

  return (
    <>
      {skills.map((skill, index) => (
        <SkillBarContainer key={index}>
          <SkillName>{skill.name}</SkillName>
          <SkillBarFill>
            <SkillBarProgress progress={skill.progress} />
          </SkillBarFill>
        </SkillBarContainer>
      ))}
    </>
  );
};

export default SkillBar;