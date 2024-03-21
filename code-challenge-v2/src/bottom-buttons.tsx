import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TransferButton = styled.button`
  background-color: black;
  color: white;
`;
const CancelButton = styled.button`
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