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
      <StyledAmountInputAndDisplay
        className={className}
        amount={amount}
        setAmount={setAmount}
        amountToValue={amountToValue}
      />
    </AmountInputWrapper>
  );
}

const AmountInputWrapper = styled.div`
  display: flex;

  border: 2px solid gray;
  border-radius: 0.25em;
`;

const StyledAmountInput = styled(AmountInput)`
  display: flex;
`;

function Icon({ className }: {
  className?: string
}) {
  return <div className={className}>
    <img src='atom.svg' alt='ATOM' width='48' />
  </div>;
}

const StyledIcon = styled(Icon)`
  padding: 0.5em;

  display: flex;
  align-items: center;

  border-right: 2px solid gray;
`;

function AmountInputAndDisplay({ className, amount, setAmount, amountToValue }: {
  className?: string;
  amount: number;
  setAmount: (amount: number) => void;
  amountToValue: (amount: number) => number;
}) {
  return (
    <div className={className}>
      <StyledInput amount={amount} setAmount={setAmount} />
      <div><strong>ATOM</strong> ≈ ${amountToValue(amount).toFixed(2)}</div>
    </div>
  );
}

const StyledAmountInputAndDisplay = styled(AmountInputAndDisplay)`
  flex-grow: 1;

  display: flex;
  align-items: center;
  gap: 0.5em;

  padding: 1em;
  font-size: 1.2em;
`

function Input({ className, amount, setAmount }: {
  className?: string;
  amount: number;
  setAmount: (amount: number) => void;
}) {
  return (
    <input className={className} value={amount} onInput={event => setAmount(parseInt((event.target as HTMLInputElement).value) || 0)} />
  );
}

const StyledInput = styled(Input)`
  flex-grow: 1;

  border: none;
`;

export default StyledAmountInput;