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
  overflow-y: auto; 
  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 100px;
    scroll-snap-align: none;
  }
`;

const Description = styled.p`
  padding: 10px;
  padding-bottom: 1px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const SubTitle = styled.p`
  padding-top: 6px;
  padding-bottom: 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 36px;

  @media only screen and (max-width: 768px) {
    padding-bottom: 200px;
  }
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
    <SubTitle>
      CRM Wep-App live demo (behind preview button) uses free hosting and
      may take up to 2 minutes to download. Thanks for your understanding🙂
    </SubTitle>
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
