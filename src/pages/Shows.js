import React from 'react';
import Layout from '../containers/Layout';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 85vh;
  h1 {
    font-size: 8rem;
    margin: 0 auto;
    font-weight: 400;
    padding: 3rem;
    padding-top: 0;

    font-family: 'Mr Dafoe';
    font-size: rem;
    background: -webkit-linear-gradient(45deg, #6780de, #c64274);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    /* text-shadow: 0px 2px 4px #79468c99, 0px 8px 13px #79468c11,
      10px 18px 23px #79468c11; */
  }
`;
const Shows = () => {
  return (
    <Layout>
      <Container>
        <h1>Shows</h1>
      </Container>
    </Layout>
  );
};

export default Shows;
