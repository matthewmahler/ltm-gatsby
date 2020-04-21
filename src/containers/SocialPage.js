import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 85vh;
  width: 100vw;
  background-image: linear-gradient(to bottom, #040404, #04040499, #040404);
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    font-size: 8rem;
    margin: 0 auto;
    font-weight: 400;
    padding: 0 3rem;
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
    h2 {
      font-family: 'bodoni-urw';
      font-style: italic;
      font-weight: 400;
      font-size: 2rem;
      padding: 1rem;
      text-align: center;
      background: -webkit-linear-gradient(45deg, #6780de, #c64274);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0 auto;
    }
    .instagram,
    .twitter {
      width: 100%;
      overflow-y: scroll;
      height: 50vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      .mobileHide {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 420px) {
    min-height: 87vh;

    h1 {
      font-size: 4rem;
      padding: 0 2rem;
      margin: 0 auto;
    }
    .grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 87vh;
      overflow-y: scroll;
      h2 {
        display: none;
      }
      .instagram,
      .twitter {
        width: 95%;
        min-height: 40vh;
        margin-bottom: 1rem;
        .mobileHide {
          display: block;
          font-family: 'bodoni-urw';
          font-style: italic;
          font-weight: 400;
          font-size: 2rem;
          padding: 0.5rem;
          text-align: center;
          background: -webkit-linear-gradient(45deg, #6780de, #c64274);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 auto;
        }
      }
    }
  }
`;

const Story = (props) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const portrait = data.contentfulSocialPage.portraitBackground.fluid;
        return (
          <BackgroundImage
            Tag="section"
            fluid={portrait}
            backgroundColor={props.theme.pink}
            fadeIn={true}
          >
            <Container>
              <h1>{data.contentfulSocialPage.header}</h1>
              <div className="grid">
                <h2>{data.contentfulSocialPage.instagram}</h2>
                <h2>{data.contentfulSocialPage.twitter}</h2>
                <div className="instagram">
                  <h2 className="mobileHide">
                    {data.contentfulSocialPage.instagram}
                  </h2>

                  <Instagram theme={props.theme} />
                </div>
                <div className="twitter">
                  <h2 className="mobileHide">
                    {data.contentfulSocialPage.twitter}
                  </h2>

                  <Twitter theme={props.theme} />
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
    contentfulSocialPage {
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
