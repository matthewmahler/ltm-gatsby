import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Media from '../components/Media';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 85vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #040404, #04040499, #040404);
  background-size: cover;
  background-repeat: no-repeat;
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
  }
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    .instagram,
    .twitter {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      h2 {
        font-size: 2rem;
        padding: 1rem;

        font-size: rem;
        background: -webkit-linear-gradient(45deg, #6780de, #c64274);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

const Story = props => {
  console.log(props);
  return (
    <StaticQuery
      query={query}
      render={data => {
        const portrait = data.contentfulSocial.portraitBackground.fluid;
        return (
          <BackgroundImage
            Tag="section"
            fluid={portrait}
            backgroundColor={props.theme.pink}
            fadeIn={true}
          >
            <Container>
              <h1>{data.contentfulSocial.header}</h1>
              <div className="grid">
                <div className="instagram">
                  <h2>{data.contentfulSocial.instagram}</h2>
                  <Media theme={props.theme} />
                </div>
                <div className="twitter">
                  <h2>{data.contentfulSocial.twitter}</h2>
                </div>
              </div>
            </Container>
          </BackgroundImage>
        );
      }}
    />
  );
};

export default Story;

const query = graphql`
  query SocialQuery {
    contentfulSocial {
      header
      twitter
      instagram
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
