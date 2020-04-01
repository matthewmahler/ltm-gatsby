import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useWindowSize } from '../hooks/useWindowResize';
import { useFetch } from '../hooks/useFetch';

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
  h2 {
    text-align: center;
  }
  .showlist {
    width: 80vw;
    height: 50vh;
    overflow: scroll;

    color: ${props => props.theme.white};
    font-family: 'bodoni-urw';
    font-weight: 500;
    font-size: 2rem;
    text-transform: uppercase;
    .show {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      grid-gap: 1rem;
      margin-bottom: 2rem;
      .location {
        font-size: 3rem;
        background: -webkit-linear-gradient(45deg, #6780de, #c64274);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      a {
        text-decoration: none;
        transition: 0.2s;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        font-size: 1.2rem;
        padding: 1rem;
        font-weight: 600;
        height: 70%;
        width: 80%;
        cursor: pointer;
        color: #ccc;
        border: none;
        border-top: 5px solid #ccc;
        border-bottom: 5px solid #ccc;
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
    .showlist {
      width: 95%;
      height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: 1rem;
      text-align: center;
      .show {
        box-sizing: border-box;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        border: 2px solid #ccc;
        margin-bottom: 1rem;
        .location {
          font-size: 1.5rem;
        }
        a {
          font-size: 1rem;
          padding: 0.5rem;
          border: none;
        }
      }
    }
  }
`;
const ShowsContainer = ({ theme }) => {
  const [
    shows,
    loading,
  ] = useFetch(`https://api.songkick.com/api/3.0/artists/9608559-loyalty-to-me/gigography.json?apikey=${process.env.GATSBY_SONGKICK_API_KEY}
`);

  let [width, height] = useWindowSize();

  return (
    <StaticQuery
      query={query}
      render={data => {
        const portrait = data.contentfulShowsPage.portraitBackground.fluid;
        const landscape = data.contentfulShowsPage.landscapeBackground.fluid;
        return (
          <BackgroundImage
            Tag="section"
            fluid={height > width ? portrait : landscape}
            backgroundColor={theme.pink}
            fadeIn={true}
          >
            <Container theme={theme}>
              <h1>Shows</h1>
              <div className="showlist">
                {loading ? (
                  <h2>Loading</h2>
                ) : shows.resultsPage.totalEntries < 1 ? (
                  <h2>More Shows TBA</h2>
                ) : (
                  shows.resultsPage.results.event.map((show, i) => {
                    return (
                      <div className="show">
                        <span> {moment(show.start.date).format('MMM D')}</span>
                        <span>
                          {show.venue ? show.venue.displayName : 'TBA'}
                          <br />
                          {show.location ? (
                            <span className="location">
                              {show.location.city.replace(', US', '')}
                            </span>
                          ) : (
                            <span className="location">TBA</span>
                          )}
                        </span>
                        <a href={show.uri} target="_blank">
                          Get Tickets
                        </a>
                      </div>
                    );
                  })
                )}
              </div>
            </Container>
          </BackgroundImage>
        );
      }}
    />
  );
};

export default ShowsContainer;

const query = graphql`
  query ShowsQuery {
    contentfulShowsPage {
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
    }
  }
`;
