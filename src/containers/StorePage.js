import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useWindowSize } from '../hooks/useWindowResize';
import Merch from '../components/Merch';
import cheerio from 'cheerio';
import axios from 'axios';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 85vh;
  overflow: scroll;
  width: 100vw;
  background-image: linear-gradient(to bottom, #040404, #04040499, #040404);
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    font-size: 8rem;
    margin: 0 auto;
    font-weight: 400;
    padding: 0 2rem;
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
  @media only screen and (max-width: 420px) {
    min-height: 87vh;

    h1 {
      font-size: 4rem;
      padding: 0 2rem;
      margin: 0 auto;
    }
  }
`;
const StorePage = ({ theme }) => {
  let [width, height] = useWindowSize();
  const [productsLoading, setProductsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const baseURL = 'https://loyaltytome.bandcamp.com';
    var cors = 'https://cors-anywhere.herokuapp.com/';

    axios
      .get(cors + 'https://loyaltytome.bandcamp.com/merch')
      .then((response) => {
        const $ = cheerio.load(response.data);

        const urlElems = $('li.merch-grid-item');
        // We now loop through all the elements found
        for (let i = 0; i < urlElems.length; i++) {
          let product = {
            id: i,
            name: null,
            image: null,
            price: null,
            url: null,
          };
          const name = $(urlElems[i]).find('p.title');
          const image = $(urlElems[i]).find('img');
          const price = $(urlElems[i]).find('span.price');
          const url = $(urlElems[i]).find('a');

          if (name && image && price && url) {
            product.name = $(name).text().trim();

            product.image = $(image).attr('src');

            product.price = $(price).text().trim();
            product.url = baseURL + $(url).attr('href');
          }
          setProducts((oldArray) => [...oldArray, product]);

          if (i === urlElems.length - 1) {
            setProductsLoading(false);
          }
        }
      });
  }, []);
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const portrait = data.contentfulStorePage.portraitBackground.fluid;
        const landscape = data.contentfulStorePage.landscapeBackground.fluid;
        return (
          <BackgroundImage
            Tag="section"
            fluid={height > width ? portrait : landscape}
            backgroundColor={theme.pink}
            fadeIn={true}
          >
            <Container>
              <h1>Store</h1>

              <Merch
                width={width}
                height={height}
                loading={productsLoading}
                products={products}
                theme={theme}
              />
            </Container>
          </BackgroundImage>
        );
      }}
    />
  );
};

export default StorePage;

const query = graphql`
  query StoreQuery {
    contentfulStorePage {
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
