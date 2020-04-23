import React from 'react';
import styled from 'styled-components';
import Products from './Products';
import ContentLoader from 'react-content-loader';
import { useTransition, animated } from 'react-spring';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: 85vh;
  .merchGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    color: #eee;
    overflow-y: scroll;
    height: 60vh;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
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
  }

  @media only screen and (max-width: 420px) {
    .merchGrid {
      grid-template-columns: 1fr 1fr;
      div {
        h2 {
          font-size: 1em;
        }
      }
    }
  }
`;
const Merch = ({ products, loading, width, height }) => {
  const transitions = useTransition(loading, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <Container>
      {transitions.map(({ item, key, props: animation }) =>
        item ? (
          <animated.div style={animation} className="merchGrid" key={key}>
            <Loader width={width} height={height} />
            <Loader width={width} height={height} />
            <Loader width={width} height={height} />
            <Loader width={width} height={height} />
          </animated.div>
        ) : (
          <animated.div style={animation} className="merchGrid" key={key}>
            {products.map((product, key) => {
              return (
                <div>
                  <h2>{product.name}</h2>
                  <Products
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    url={product.url}
                  />
                </div>
              );
            })}
          </animated.div>
        )
      )}
    </Container>
  );
};

export default Merch;

const Loader = ({ width, height }) => {
  const isMobile = height > width ? true : false;
  return (
    <ContentLoader
      speed={1}
      width={isMobile ? width / 2 : width / 4}
      height={isMobile ? width / 2 : width / 4.5}
      viewBox={`0 0 ${isMobile ? width / 2 : width / 4} ${
        isMobile ? width / 2 : width / 4.5
      }`}
      backgroundColor="#9cabe4"
      foregroundColor="#eb75ee"
    >
      <rect
        x="0"
        y="0"
        rx="0"
        ry="0"
        width={isMobile ? width / 2 : width / 4}
        height={isMobile ? width / 2 : width / 4.5}
      />
    </ContentLoader>
  );
};
