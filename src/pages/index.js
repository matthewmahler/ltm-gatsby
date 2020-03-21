import React from 'react';
import styled from 'styled-components';
import img from '../images/testBackground.png';

const Container = styled.div`
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #040404cc, #040404ee),
    url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    font-family: sans-serif;
    font-size: 10rem;
    background: -webkit-linear-gradient(45deg, #6780de, #c64274);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 10px 14px 13px #79468c99, 0px 8px 13px #79468c11,
      10px 18px 23px #79468c11;
  }
`;

const HomePage = () => (
  <Container bg={img}>
    <h1>Loyalty To Me</h1>
  </Container>
);

export default HomePage;
