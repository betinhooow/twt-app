import React from 'react';
import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Roberto Nobre</strong>
          <span>21 Tweets</span>
        </ProfileInfo>
      </Header>
    </Container>
  );
};

export default Main;
