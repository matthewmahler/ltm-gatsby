import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import { useWindowSize } from '../hooks/useWindowResize';
import ProfileImage from '../components/ProfileImage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 85vh;
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
    /* text-shadow: 0px 2px 4px #79468c99, 0px 8px 13px #79468c11,
      10px 18px 23px #79468c11; */
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
    }
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 2rem;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    color: #ccc;
    border: none;
    border-top: 5px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  .band {
    width: 100%;
    min-height: 65vh;
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr;
    grid-gap: 1rem;
    padding: 0 2rem;
    .images {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .story {
        text-align: center;
        p {
          width: 100%;
          font-size: 1.5rem;
          color: #ccc;
        }
      }
    }
  }
`;

const Story = props => {
  let [width, height] = useWindowSize();

  return (
    <StaticQuery
      query={query}
      render={data => {
        const portrait = data.contentfulStory.portraitBackground.fluid;
        const landscape = data.contentfulStory.landscapeBackground.fluid;
        const images = data.contentfulStory.profileImages;
        return (
          <BackgroundImage
            Tag="section"
            fluid={height > width ? portrait : landscape}
            backgroundColor={props.theme.pink}
            fadeIn={true}
          >
            <Container>
              <h1>{data.contentfulStory.header}</h1>
              <div className="band">
                <div className="images">
                  <ProfileImage
                    fluid={images[0].fluid}
                    theme={props.theme}
                    name="// James Conrad //"
                    role="// Guitar //"
                  />
                  <ProfileImage
                    fluid={images[1].fluid}
                    theme={props.theme}
                    name="// Ryan Keller //"
                    role="// Bass // Vocals //"
                  />
                </div>

                <div>
                  <div
                    className="story"
                    dangerouslySetInnerHTML={{
                      __html: data.contentfulStory.bio.childMarkdownRemark.html,
                    }}
                  />

                  <ProfileImage
                    fluid={images[2].fluid}
                    theme={props.theme}
                    name="// Devin Mcguire //"
                    role="// Guitar // Vocals //"
                  />
                </div>
                <div className="images">
                  <ProfileImage
                    fluid={images[3].fluid}
                    theme={props.theme}
                    name="// Wil Patrick Jackson //"
                    role="// Vocals //"
                  />
                  <ProfileImage
                    fluid={images[4].fluid}
                    theme={props.theme}
                    name="// Kevin Castro //"
                    role="// Drums //"
                  />
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
  query StoryQuery {
    contentfulStory {
      header
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
      profileImages {
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
      bio {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
