import React from 'react';
import Nav from '../components/Nav';
import styled, { createGlobalStyle } from 'styled-components';
import SocialContainer from './SocialContainer';

const GlobalStyle = createGlobalStyle`
html{
  font-family: "Montserrat", sans-serif; 
}
   

  body {
    margin:0;
  
}


  
  @media all and (max-width: 1200px) {
    width: 100%;
    html{
      margin: 0;
    }
  }
  ::-webkit-scrollbar {
    width: 0px; 
    background: transparent; 
  }
`;
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #040404;
`;
const theme = {
  black: '#040404',
  white: '#cccccc',
  royalBlue: '#6780DE',
  midnightBlue: '#1F2479',
  pink: '#C64274',
  purple: '#79468C',
};

const Layout = props => {
  return (
    <>
      <Container>
        <GlobalStyle />
        <Nav />
        {React.cloneElement(props.children, { theme: theme })}
        <SocialContainer />
      </Container>
    </>
  );
};

export default Layout;
