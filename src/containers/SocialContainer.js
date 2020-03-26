import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faTwitter,
  faFacebook,
  faItunes,
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  width: 100%;
  height: 10vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  a {
    margin: 0 1rem;
  }
  @media only screen and (max-width: 420px) {
    width: 90%;
    height: 5vh;
    a {
      margin: 0;
      transform: scale(0.5);
    }
  }
`;
const SocialContainer = () => {
  return (
    <Container>
      <a
        href="http://www.bit.ly/loyaltybook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          size="4x"
          style={{ color: '#4078c0' }}
        />
      </a>
      <a
        href="http://www.bit.ly/loyaltytweets"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          size="4x"
          style={{ color: '#0077b5' }}
        />
      </a>
      <a
        href="http://www.bit.ly/loyaltygram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="4x"
          style={{ color: '#5851db' }}
        />
      </a>

      <a
        href="http://www.bit.ly/loyaltyapple;"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faItunes}
          size="4x"
          style={{ color: '#7572FF' }}
        />
      </a>
      <a
        href="http://www.bit.ly/loyaltyspot;"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faSpotify}
          size="4x"
          style={{ color: '#1db954' }}
        />
      </a>
    </Container>
  );
};
export default SocialContainer;
