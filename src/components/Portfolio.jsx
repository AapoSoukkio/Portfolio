import React from 'react';
import styled from 'styled-components';
import { data } from '../data/data.js';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  scroll-snap-align: center;

`;

const Title = styled.p`
  font-size: 4xl;
  font-weight: bold;
  display: inline;
  border-bottom: 4px solid #4a5568;
  color: #4a5568;
`;

const Description = styled.p`
  padding: 24px 0;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`;

const ProjectItem = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  ${ProjectItem}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.span`
  font-size: 2xl;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
`;

const Button = styled.button`
  text-align: center;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 8px;
  background-color: white;
  color: #4a5568;
  font-weight: bold;
  font-size: 16px;
`;

const Portfolio = () => {
  const projects = data;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <Container>
        <Title>Work</Title>
        <Description>// Check out some of my recent work</Description>
        <ProjectGrid>
          {projects.map((item, index) => (
            <ProjectItem key={index} image={item.image}>
              <ProjectOverlay>
                <ProjectTitle>{item.name}</ProjectTitle>
                <div>
                  <a href={item.github} target="_blank" rel="noopener noreferrer">
                    <Button>Code</Button>
                  </a>
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <Button>Live</Button>
                  </a>
                </div>
              </ProjectOverlay>
            </ProjectItem>
          ))}
        </ProjectGrid>
      </Container>
    </div>
  );
};

export default Portfolio;
