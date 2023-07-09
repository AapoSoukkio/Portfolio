import React from "react";
import styled  from 'styled-components'
import { Link } from 'react-router-dom';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  scroll-snap-align: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
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
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
    return (
      <Section>
        <Container>
          <Links>
            <Logo src="./img/logoV4.png" />
            <List>
              <ListItem>
                <StyledLink to="/">Home</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/about">About</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/portfolio">Projects</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="/contact">Contact</StyledLink>
              </ListItem>
            </List>
          </Links>
          <Icons>
            <Icon src="./img/search.png" />
            <Button>Hire Now</Button>
          </Icons>
        </Container>
      </Section>
    )
}

export default Navbar