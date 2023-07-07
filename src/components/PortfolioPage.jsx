import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { data } from '../data/data.js';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 4px;
  display: flex;
  flex-direction: column;
  justify-content: none;
  height: 100%;
  scroll-snap-align: center;
`;

const Description = styled.p`
  padding: 34px 0;
  font-size: 34px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 46px;
`;

const ProjectItem = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-image: url(${(props) => props.image});
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
  cursor: default;

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

const ProjectCategory = styled.span`
  font-size: 1.3rem;
  color: #000000;
  font-weight: bold;
  margin: 4px;
  justify-content: center;
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
  cursor: pointer;
`;

const PortfolioPage = () => {
  const projects = data;

  return (
    <Container>
    <Description>Check out some of my recent work</Description>
    <ProjectGrid>
      {projects.map((item, index) => (
        <ProjectItem key={index} image={item.image}>
          <ProjectCategory>{item.category}</ProjectCategory>
          <ProjectOverlay>
            <ProjectTitle>{item.name}</ProjectTitle>
            {item.github ? (
              <Link to={item.github} target="_blank" rel="noopener noreferrer">
                <Button>Code</Button>
              </Link>
            ) : (
              <p>Code not available</p>
            )}
            {item.preview ? (
              <Link to={item.preview} target="_blank" rel="noopener noreferrer">
                <Button>Preview</Button>
              </Link>
            ) : (
              <p>Preview not available</p>
            )}
          </ProjectOverlay>
        </ProjectItem>
      ))}
    </ProjectGrid>
  </Container>
  );
};

export default PortfolioPage;
