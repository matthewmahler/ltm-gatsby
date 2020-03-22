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
  width: 30%;
  height: 8vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
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
      <a href="" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faItunes}
          size="4x"
          style={{ color: '#7572FF' }}
        />
      </a>
    </Container>
  );
};

export default SocialContainer;
