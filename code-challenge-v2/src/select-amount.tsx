import { useState } from 'react';
import styled from 'styled-components';

function HeaderWrapper({ className, availableAmount }: {
  className?: string;
  availableAmount: number;
}) {
  return (
    <div className={className}>
      <SelectAmountHeader>Select amount</SelectAmountHeader>
      <div>Available <strong>{availableAmount} ATOM</strong></div>
    </div>
  );
}

const StyledHeaderWrapper = styled(HeaderWrapper)`
  display: flex;
  align-items: baseline;
`;

const SelectAmountHeader = styled.h2`
  flex-grow: 1;
`;

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

function SelectAmount({ availableAmount }: {
  availableAmount: number;
}) {
  const [amount, setAmount] = useState(availableAmount);

  function handleSelectPercentage(percentage: number) {
    setAmount(availableAmount * percentage);
  }

  return (
    <div>
      <StyledHeaderWrapper availableAmount={availableAmount} />
      <StyledAmountInput amount={amount} amountToValue={(n: number) => n * 1013 / 2} setAmount={setAmount} />
      <StyledAmountSelector proportions={['Max', '1/2', '1/3']} handleSelectPercentage={handleSelectPercentage} />
    </div>
  );
}

export default SelectAmount;