import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 90vh;
  width: 90%;
`;
const TwitterContainer = () => {
  useEffect(() => {
    window.twttr.widgets.createTimeline(
      {
        sourceType: 'profile',
        screenName: 'loyaltytome_',
      },
      document.getElementById('twitterContainer'),
      { count: 10 }
    );
  }, [window.twttr]);
  return <Container id="twitterContainer"></Container>;
};

export default TwitterContainer;
