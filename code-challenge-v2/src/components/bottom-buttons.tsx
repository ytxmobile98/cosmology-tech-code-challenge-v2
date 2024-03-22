import { styled } from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1.5em;

  display: flex;
  flex-direction: column;
`;

const TransferButton = styled.button`
  padding: 1.5em 0;

  background-color: black;
  color: white;
`;
const CancelButton = styled.button`
  padding: 1em 0;

  background-color: transparent;
  color: gray;
`;

function BottomButtons() {
  return (
    <Wrapper>
      <TransferButton>Transfer</TransferButton>
      <CancelButton>Cancel</CancelButton>
    </Wrapper>
  );
}

export default BottomButtons;