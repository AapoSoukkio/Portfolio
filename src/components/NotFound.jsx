import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { data } from '../data/data.js';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  padding: 34px 0;
  font-size: 34px;
  display: flex;
  justify-content: center;
`;

const ButtonLink = styled(Link)`
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const NotFound = () => {
  return (
    <Container>
      <ButtonLink to="/">Back to Home page</ButtonLink>
      <Description>Page not found 404😕</Description>
    </Container>
  );
};

export default NotFound;
