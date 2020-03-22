import React from 'react';
import { useTrail } from 'react-spring';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { fakeInstaData } from '../mock/mockInstagram';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 90vh;
  .mediaWrapper {
    width: 80%;
    min-height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .my-masonry-grid {
      display: flex;
      width: 100%;
    }
    .my-masonry-grid_column {
      background-clip: padding-box;
    }
    .my-masonry-grid_column > div {
      /* change div to reference your elements you put in <Masonry> */
      background: grey;
    }
    @media all and (max-width: 1200px) {
      grid-template-columns: 1fr;
    }

    img,
    video {
      width: 100%;
      :hover {
        filter: brightness(1.5);
      }
    }
    img {
      opacity: 1;
      display: block;
      width: 100%;
      height: auto;
      transition: 0.2s;
      backface-visibility: hidden;
    }
  }
  @media only screen and (max-width: 420px) {
    .mediaWrapper {
      padding: 0;
      margin: 1rem;
      width: 100%;
      .insta-container {
        .profileImageContainer {
          .overlay {
            display: none;
          }
        }
      }
    }
  }
`;

const MediaWrapper = props => {
  const trail = useTrail(fakeInstaData.data.length, {
    marginLeft: 0,
    opacity: 1,
    transform: 'translate3d(0,0px,0)',
    from: {
      marginRight: -200,
      opacity: 0,
      transform: 'translate3d(0,-20px,0)',
    },
  });
  const breakpointColumnsObj = {
    default: 2,
    1200: 2,
    991: 2,
    768: 2,
  };
  return (
    <Container theme={props.theme}>
      <div className="mediaWrapper">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {trail.map((animation, i) => {
            return fakeInstaData.data[i].media_type !== 'VIDEO' ? (
              <img src={fakeInstaData.data[i].media_url} alt="" key={i} />
            ) : (
              <video src={fakeInstaData.data[i].media_url} controls key={i} />
            );
          })}
        </Masonry>
      </div>
    </Container>
  );
};

export default MediaWrapper;
