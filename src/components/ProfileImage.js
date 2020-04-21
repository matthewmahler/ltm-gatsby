import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 20vw;

  img {
    transition: 0.2s;
  }

  .overlay {
    background-color: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white}ff;
    position: absolute;
    width: 70%;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.5em;
    max-width: 200px;
  }
  @media (max-width: 768px) {
    .overlay {
      display: none;
    }
  }
  @media (max-width: 450px) {
    padding: 0.5em;
    img {
      border-radius: 5px;
    }

    img:hover {
      transition: 0.2s;
      border-radius: 15px;
    }
    .overlay {
      display: none;
      font-size: 0.5em;
      padding: 0 auto;
    }
  }
`;

const ProfileImage = ({ fluid, theme, name, role }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      theme={theme}
    >
      <img
        src={fluid.src}
        style={{
          width: '90%',
          borderRadius: '100rem',
          maxWidth: '350px',
        }}
      />
      <p
        className="overlay"
        style={{
          opacity: hovered ? 1 : 0,
          transition: '0.3s',
        }}
      >
        {name}
        <br />
        {role}
      </p>
    </Container>
  );
};

export default ProfileImage;
