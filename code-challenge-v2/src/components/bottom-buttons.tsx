import { styled } from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1.5em;

  display: flex;
  flex-direction: column;
`;

const TransferButton = styled.button`
  padding: 1.5em 0;

  background-color: var(--primary-action-background-color);
  color: var(--primary-action-text-color);
  font-weight: bold;
`;
const CancelButton = styled.button`
  padding: 1em 0;

  background-color: transparent;
  color: var(--secondary-text-color);
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