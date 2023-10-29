import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;

const ToggleBar = styled.div`
  width: 20px;
  height: 2px;
  background-color: #000;
  margin: 2px;
`;

const Links = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;

const Logo = styled.img`
  height: 50px;
  width: 80px;
`;

const LogoLink = styled(Link)`
  text-decoration: none; 
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const Icons = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

const Icon = styled.img`
  width: 35px;
  cursor: pointer;
`;

const ButtonLink = styled(Link)`
  background-color: #da4ea2;
  color: white;
  font-weight: 400;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarMobile = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Section>
      <Container>
        <NavbarWrapper>
          <LogoLink to="/">
            <Logo src="./img/logoV6.png" />
          </LogoLink>
          <ToggleButton onClick={toggleMenu}>
            <ToggleBar />
            <ToggleBar />
            <ToggleBar />
          </ToggleButton>
        </NavbarWrapper>
        <Links isVisible={isMenuOpen}>
          <List>
            <ListItem>
              <StyledLink to="/" onClick={handleLinkClick}>Home</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/about" onClick={handleLinkClick}>About</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/projects" onClick={handleLinkClick}>Projects</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/contact" onClick={handleLinkClick}>Contact</StyledLink>
            </ListItem>
          </List>
        </Links>
        <Icons isVisible={isMenuOpen}>
          <a href="https://www.linkedin.com/in/aapo-soukkio-a132b2244/" target="_blank" rel="noopener noreferrer">
            <Icon src="./img/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/AapoSoukkio" target="_blank" rel="noopener noreferrer">
            <Icon src="./img/github.png" alt="GitHub" />
          </a>
          <ButtonLink to="/contact" onClick={handleLinkClick}>Contact me!</ButtonLink>
        </Icons>
      </Container>
    </Section>
  );
};

export default NavbarMobile;
