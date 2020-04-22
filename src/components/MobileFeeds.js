import React, { useState } from 'react';
import styled from 'styled-components';
import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';
const Container = styled.div`
  display: none;

  button {
    color: #eee;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem;
    background: transparent;
    border: 2px solid #eee;
    border-radius: 5px;
    :hover {
      filter: brightness(1.5);
    }
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    .wrapper {
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 95%;
      height: 70vh;
      overflow-y: scroll;
    }
  }
`;
const MobileFeeds = ({ theme }) => {
  const [toggle, set] = useState(true);
  return (
    <Container>
      <button onClick={() => set(!toggle)}>
        View {toggle ? 'Instagram' : 'Twitter'}
      </button>
      <div className="wrapper">
        {toggle ? <Twitter theme={theme} /> : <Instagram theme={theme} />}
      </div>
    </Container>
  );
};

export default MobileFeeds;
