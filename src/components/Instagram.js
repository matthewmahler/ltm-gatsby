import React from 'react';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
    }
  }
`;

const MediaWrapper = (props) => {
  const [gallery, galleryLoading] = useFetch(
    `https://graph.facebook.com/v6.0/17841406484907284/media?fields=permalink%2Clike_count%2Ccaption%2Cmedia_type%2Cmedia_url&access_token=${process.env.GATSBY_FACEBOOK_ACCESS_TOKEN}`
  );
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    991: 3,
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
          {!galleryLoading ? (
            gallery.data.map((image, i) => {
              return image.media_type !== 'VIDEO' ? (
                <a href={image.permalink} target="_blank" key={i}>
                  <img src={image.media_url} alt="" />
                </a>
              ) : (
                <a href={image.permalink} target="_blank" key={i}>
                  <video src={image.media_url} controls />
                </a>
              );
            })
          ) : (
            <p>...Loading...</p>
          )}
        </Masonry>
      </div>
    </Container>
  );
};

export default MediaWrapper;
