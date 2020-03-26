import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useWindowSize } from '../hooks/useWindowResize';
import ProfileImage from '../components/ProfileImage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 85vh;
  background-image: linear-gradient(to bottom, #040404, #04040499, #040404);
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    font-size: 8rem;
    margin: 0 auto;
    font-weight: 400;
    padding: 0;

    font-family: 'Mr Dafoe';
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
    font-family: 'Merriweather Sans';
    font-weight: 400;
    width: 100%;
    min-height: 65vh;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 1rem;
    margin-bottom: 2rem;
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
          font-size: 1.2rem;
          color: #ccc;
        }
      }
    }
  }
`;

const Story = props => {
  let [width, height] = useWindowSize();
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        const portrait = data.contentfulStoryPage.portraitBackground.fluid;
        const landscape = data.contentfulStoryPage.landscapeBackground.fluid;
        const images = shuffle(data.contentfulStoryPage.profileImages);
        return (
          <BackgroundImage
            Tag="section"
            fluid={height > width ? portrait : landscape}
            backgroundColor={props.theme.pink}
            fadeIn={true}
          >
            <Container>
              <h1>{data.contentfulStoryPage.header}</h1>
              <div className="band">
                <div className="images">
                  <ProfileImage
                    fluid={images[0].fluid}
                    theme={props.theme}
                    name={images[0].title}
                    role={images[0].description}
                  />
                  <ProfileImage
                    fluid={images[1].fluid}
                    theme={props.theme}
                    name={images[1].title}
                    role={images[1].description}
                  />
                </div>

                <div>
                  <div
                    className="story"
                    dangerouslySetInnerHTML={{
                      __html:
                        data.contentfulStoryPage.bio.childMarkdownRemark.html,
                    }}
                  />

                  <ProfileImage
                    fluid={images[2].fluid}
                    theme={props.theme}
                    name={images[2].title}
                    role={images[2].description}
                  />
                </div>
                <div className="images">
                  <ProfileImage
                    fluid={images[3].fluid}
                    theme={props.theme}
                    name={images[3].title}
                    role={images[3].description}
                  />
                  <ProfileImage
                    fluid={images[4].fluid}
                    theme={props.theme}
                    name={images[4].title}
                    role={images[4].description}
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
    contentfulStoryPage {
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
        title
        description
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
