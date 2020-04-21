import React from 'react';
import styled from 'styled-components';
import Products from './Products';
import Masonry from 'react-masonry-css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: 85vh;
  overflow-y: scroll;
  div {
    color: #eee;
    :hover {
      transition: 0.2s;
      color: #c64274;
    }
    h2 {
      text-align: center;
      font-size: 1.5em;
      font-family: 'bodoni-urw';
      font-style: italic;
      font-weight: 400;
    }
  }
  .masonryContainer {
    width: 100%;
  }
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: auto;
    margin-left: -30px; /* gutter size offset */
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 30px;
  }

  h1 {
    box-sizing: border-box;
    font-size: 2em;
    span {
      border-bottom: 5px solid #a06367;
    }
  }
  @media all and (max-width: 1200px) {
    .my-masonry-grid {
      margin-left: -15px; /* gutter size offset */
    }
    .my-masonry-grid_column {
      padding-left: 15px; /* gutter size offset */
    }
    .my-masonry-grid_column > div {
      margin-bottom: 15px; /* space between items */
    }
    .masonryContainer {
      width: 100%;
    }
  }
  @media only screen and (max-width: 420px) {
    div {
      h2 {
        font-size: 1em;
      }
    }
  }
`;
const Merch = ({ products, loading }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 3,
    500: 2,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {loading ? (
          <h2>...Loading...</h2>
        ) : (
          products.map((product, key) => {
            return (
              <div key={key}>
                <h2>{product.name}</h2>
                <Products
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  url={product.url}
                />
              </div>
            );
          })
        )}
      </Masonry>
    </Container>
  );
};

export default Merch;
