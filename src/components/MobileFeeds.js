import React, { useState } from 'react';
import styled from 'styled-components';
import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';
const Container = styled.div`
  display: none;

  button {
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem;
    background: -webkit-linear-gradient(45deg, #6780de, #c64274);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    border-width: 5px;
    border-style: solid;
    border-image: linear-gradient(to right, #6780de, #c64274) 100 0% / 1px;
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
    height: 100%;
    width: 100%;
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      width: 95%;
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
