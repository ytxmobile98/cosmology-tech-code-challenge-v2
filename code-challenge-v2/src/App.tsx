import styled from 'styled-components';

import BottomButtons from './components/bottom-buttons';
import Title from './components/title';
import EstimatedTime from './components/estimated-time';
import SelectAmount from './components/select-amount';
import FromTo from './components/from-to';

const Wrapper = styled.div`
  width: 40%;
  margin: auto;
`;

function App() {
  return (
    <Wrapper>
      <Title>Deposit Atom</Title>
      <FromTo from={{
        name: 'Cosmos Hub',
        token: 'atom1xy5y…m6wwz9a',
        image: 'atom.svg',
      }} to={{
        name: 'Osmosis',
        token: 'osmo1xy5y…w9a',
        image: 'osmosis.svg',
      }} />
      <SelectAmount availableAmount={2} />
      <EstimatedTime time='20 seconds' />
      <BottomButtons />
    </Wrapper>
  );
}

const StyledApp = styled(App)`
  margin: auto;
`;

export default StyledApp;
