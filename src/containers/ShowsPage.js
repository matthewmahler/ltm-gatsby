import React from 'react';
import { fakeFaceBookData as shows } from '../mock/mockFacebookEvents';
import moment from 'moment';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useWindowSize } from '../hooks/useWindowResize';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: calc(85vh - 2rem);
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
  .showlist {
    width: 80vw;
    max-height: 50vh;
    overflow: scroll;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: 1rem;
    color: ${props => props.theme.white};
    font-family: 'bodoni-urw';
    font-weight: 500;
    font-size: 2rem;
    text-transform: uppercase;
    .location {
      font-size: 3rem;
      background: -webkit-linear-gradient(45deg, #6780de, #c64274);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    button {
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
`;
const ShowsContainer = ({ theme }) => {
  console.log(shows);
  const filteredEvents = shows.events.data.filter(event => {
    return moment() < moment(event.start_time);
  });
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
                {filteredEvents.reverse().map((show, i) => {
                  return (
                    <>
                      <span> {moment(show.start_time).format('MMM D')}</span>
                      <span>
                        {show.place ? show.place.name : 'TBA'}
                        <br />
                        {show.place && show.place.location ? (
                          <span className="location">
                            {show.place.location.city},{' '}
                            {show.place.location.state
                              ? show.place.location.state
                              : show.place.location.country}
                          </span>
                        ) : (
                          <span className="location">TBA</span>
                        )}
                      </span>
                      <button>Tickets</button>
                    </>
                  );
                })}
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
