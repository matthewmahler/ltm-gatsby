import React from 'react';
import styled from 'styled-components';
import Products from './Products';
import img1 from '../images/product1.jpg';
import img2 from '../images/product2.jpg';
import img3 from '../images/product3.jpg';
import Masonry from 'react-masonry-css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
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
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 20px;
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
`;
const Merch = () => {
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
        <Products
          name="Product 1"
          url="http://www.google.com"
          image={img1}
          price="$10"
        />
        <Products
          name="Product 1"
          url="http://www.google.com"
          image={img2}
          price="$10"
        />
        <Products
          name="Product 1"
          url="http://www.google.com"
          image={img3}
          price="$10"
        />
      </Masonry>
    </Container>
  );
};

export default Merch;
