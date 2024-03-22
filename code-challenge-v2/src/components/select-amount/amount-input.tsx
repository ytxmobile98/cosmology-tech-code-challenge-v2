import styled from 'styled-components';

function AmountInput({ className, amount, setAmount, amountToValue }: {
  className?: string;
  amount: number;
  setAmount: (amount: number) => void;
  amountToValue: (amount: number) => number;
}) {
  return (
    <AmountInputWrapper>
      <StyledIcon />
      <div className={className}>
        <input value={amount} onInput={event => setAmount(parseInt((event.target as HTMLInputElement).value) || 0)} />
        <div><strong>ATOM</strong> ≈ ${amountToValue(amount).toFixed(2)}</div>
      </div>
    </AmountInputWrapper>
  );
}

const AmountInputWrapper = styled.div`
  display: flex;
`;

function Icon({ className }: {
  className?: string
}) {
  return <div className={className}>Icon</div>;
}

const StyledIcon = styled(Icon)`
  border: 2px solid gray;

  border-top-left-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
`;

const StyledAmountInput = styled(AmountInput)`
  display: flex;
`;

export default StyledAmountInput;