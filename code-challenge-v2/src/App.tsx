import styled from 'styled-components';

import BottomButtons from './bottom-buttons';
import Title from './title';
import EstimatedTime from './estimated-time';

const Wrapper = styled.div`
  width: 40%;
  margin: auto;
`;

function App() {
  return (
    <Wrapper>
      <Title>Deposit Atom</Title>
      <EstimatedTime time='20 seconds' />
      <BottomButtons />
    </Wrapper>
  );
}

const StyledApp = styled(App)`
  margin: auto;
`;

export default StyledApp;