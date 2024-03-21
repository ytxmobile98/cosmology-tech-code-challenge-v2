import styled from 'styled-components';

import Title from './title';

const Wrapper = styled.div`
  width: 40%;
  margin: auto;
`;

function App() {
  return (
    <Wrapper>
      <Title>Deposit Atom</Title>
    </Wrapper>
  );
}

const StyledApp = styled(App)`
  margin: auto;
`;

export default StyledApp;
