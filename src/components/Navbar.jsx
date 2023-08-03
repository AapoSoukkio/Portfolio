import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavbarMobile from "./NavbarMobile";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-left: 10px;
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
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
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
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 10px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
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

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section>
      <Container>
        {isMobile ? (
          <NavbarMobile />
        ) : (
          <>
            <Links>
              <LogoLink to="/">
                <Logo src="./img/logoV6.png" />
              </LogoLink>
              <List>
                <ListItem>
                  <StyledLink to="/">Home</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink to="/about">About</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink to="/projects">Projects</StyledLink>
                </ListItem>
                <ListItem>
                  <StyledLink to="/contact">Contact</StyledLink>
                </ListItem>
              </List>
            </Links>
            <Icons>
              <a href="https://www.linkedin.com/in/aapo-soukkio-a132b2244/" target="_blank" rel="noopener noreferrer">
                <Icon src="./img/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/AapoSoukkio" target="_blank" rel="noopener noreferrer">
                <Icon src="./img/github.png" alt="GitHub" />
              </a>
              <ButtonLink to="/contact">Hire Now!</ButtonLink>
            </Icons>
          </>
        )}
      </Container>
    </Section>
  );
};

export default Navbar;
