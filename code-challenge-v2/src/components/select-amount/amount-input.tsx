import styled from 'styled-components';

function AmountInput({ className, amount, setAmount, amountToValue }: {
  className?: string;
  amount: number;
  setAmount: (amount: number) => void;
  amountToValue: (amount: number) => number;
}) {
  return (
    <AmountInputWrapper>
      <div className={className}>
        <input value={amount} onInput={event => setAmount(parseInt((event.target as HTMLInputElement).value) || 0)} />
        <div><strong>ATOM</strong> ≈ ${amountToValue(amount).toFixed(2)}</div>
      </div>
    </AmountInputWrapper>
  );
}

const AmountInputWrapper = styled.div`
  display: table;
`;

const StyledAmountInput = styled(AmountInput)`
  display: flex;
`;

export default StyledAmountInput;