import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  width: 30%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 2rem;
`;
const SocialContainer = () => {
  return (
    <Container>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faFacebook}
          size="4x"
          style={{ color: '#4078c0' }}
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faTwitter}
          size="4x"
          style={{ color: '#0077b5' }}
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faInstagram}
          size="4x"
          style={{ color: '#5851db' }}
        />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
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
