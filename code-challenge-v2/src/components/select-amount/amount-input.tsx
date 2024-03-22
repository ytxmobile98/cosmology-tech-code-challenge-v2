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
        <div><strong>ATOM</strong> ≈ ${amountToValue(amount)}</div>
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

function AmountSelector({ className, proportions, handleSelectPercentage: handleSelectProportion }: {
  className?: string;
  proportions: string[];
  handleSelectPercentage: (percentage: number) => void;
}) {
  return (
    <div className={className}>
      {proportions.map(proportion => {
        let percentage = 1;
        if (proportion.toLowerCase() === 'max') {
          percentage = 1;
        } else {
          percentage = eval(proportion);
        }

        return (
          <button key={proportion} onClick={() => handleSelectProportion(percentage)}>
            {proportion}
          </button>
        );
      })}
    </div>
  );
}

const StyledAmountSelector = styled(AmountSelector)`
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
`;

export {
  StyledAmountInput as AmountInput,
  StyledAmountSelector as AmountSelector
};