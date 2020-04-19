import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 90%;
`;
const TwitterContainer = () => {
  useEffect(() => {
    if (window !== undefined) {
      window.twttr.widgets.createTimeline(
        {
          sourceType: 'profile',
          screenName: 'loyaltytome_',
        },
        document.getElementById('twitterContainer'),
        { count: 10 }
      );
    }
  }, []);
  return <Container id="twitterContainer"></Container>;
};

export default TwitterContainer;
