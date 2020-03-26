import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHome } from '@fortawesome/free-solid-svg-icons';

const Container = styled.header`
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 100vw;
  justify-self: flex-start;
  height: 7vh;
  background-color: #040404;
  font-family: 'bodoni-urw';
  font-style: italic;
  font-weight: 400;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    a {
      text-decoration: none;
      color: inherit;
    }
    span {
      text-align: left;
      margin: 0;
      padding: 2rem;
      :hover {
        background: -webkit-linear-gradient(45deg, #6780de, #c64274);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      :after {
        mix-blend-mode: difference;
      }
    }

    ul {
      mix-blend-mode: difference;

      li {
        font-size: 1.5rem;
        padding: 0 0.5rem;
        display: inline;
        :hover {
          background: -webkit-linear-gradient(45deg, #6780de, #c64274);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        :after {
          mix-blend-mode: difference;
        }
      }
      .slash {
        :hover {
          background: #fff;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
`;
const Nav = props => {
  return (
    <Container waypoint={props.waypoint}>
      <nav>
        <span>
          <Link to="/">
            <FontAwesomeIcon
              icon={faHome}
              size="3x"
              style={{ color: '#ffffff' }}
            />
          </Link>
        </span>
        <ul>
          <li className="slash">//</li>
          <li>
            <Link to="/Story">Story</Link>
          </li>
          <li className="slash">//</li>
          <li>
            <Link to="/Store">Store</Link>
          </li>
          <li className="slash">//</li>
          <li>
            <Link to="/Shows">Shows</Link>
          </li>
          <li className="slash">//</li>

          <li>
            <Link to="/Social">Social</Link>
          </li>
          <li className="slash">//</li>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
