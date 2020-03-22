import React from 'react';
import styled from 'styled-components';
import img from '../images/testBackground.png';
import { useSpring, animated } from 'react-spring';

import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import BackgroundImage from 'gatsby-background-image';
import { useWindowSize } from '../hooks/useWindowResize';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 83vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #040404, #04040499, #040404);
  background-size: cover;
  background-repeat: no-repeat;
  img {
    margin: 2rem;
    max-width: 80%;
    max-height: 30vh;
    box-sizing: border-box;
  }
  button {
    :hover {
      background: -webkit-linear-gradient(45deg, #6780de, #c64274);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      border-width: 5px;
      border-style: solid;
      border-image: linear-gradient(to right, #6780de, #c64274) 100 0% / 5px;
      transition: 0.2s;
    }
    transition: 0.2s;

    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    color: #ccc;
    border: none;
    border-top: 5px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
`;
const Landing = ({ theme }) => {
  let [width, height] = useWindowSize();
  const fade = useSpring({
    from: {
      opacity: 0,
    },

    opacity: 1,
  });
  return (
    <StaticQuery
      query={query}
      render={data => {
        const portrait = data.contentfulLanding.portraitBackground.fluid;
        const landscape = data.contentfulLanding.landscapeBackground.fluid;
        return (
          <BackgroundImage
            Tag="section"
            fluid={height > width ? portrait : landscape}
            backgroundColor={theme.pink}
            fadeIn={true}
          >
            <Container theme={theme} bg={img}>
              <animated.img
                src={data.contentfulLanding.logo.file.url}
                style={fade}
              />
              <button
                onClick={() => window.open(data.contentfulLanding.buttonLink)}
              >
                <span>
                  {data.contentfulLanding.buttonLink.includes('youtube')
                    ? 'Watch Now on Youtube'
                    : 'Listen Now On Spotify'}
                </span>
                <FontAwesomeIcon
                  icon={
                    data.contentfulLanding.buttonLink.includes('youtube')
                      ? faYoutube
                      : faSpotify
                  }
                  transform="grow-6"
                  style={{ color: '#ff0000', marginLeft: '1rem' }}
                />
              </button>
            </Container>
          </BackgroundImage>
        );
      }}
    />
  );
};

export default Landing;

const query = graphql`
  query LandingQuery {
    contentfulLanding {
      buttonLink
      logo {
        file {
          url
        }
      }
      landscapeBackground {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
          tracedSVG
        }
      }
      portraitBackground {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
          tracedSVG
        }
      }
    }
  }
`;
