import { useState } from 'react';
import styled from 'styled-components';

function HeaderWrapper({ availableAmount }: {
  availableAmount: number;
}) {
  return (
    <div>
      <h2>Select amount</h2>
      <div>Available <strong>{availableAmount} ATOM</strong></div>
    </div>
  );
}

const StyledHeaderWrapper = styled(HeaderWrapper)`
`;

function AmountInput({ amount, setAmount, amountToValue }: {
  amount: number;
  setAmount: (amount: number) => void;
  amountToValue: (amount: number) => number;
}) {
  return (
    <>
      <input value={amount} onInput={event => setAmount(parseInt((event.target as HTMLInputElement).value) || 0)} />
      <div><strong>ATOM</strong> ≈ ${amountToValue(amount)}</div>
    </>
  );
}

function AmountSelector({ proportions, handleSelectPercentage: handleSelectProportion }: {
  proportions: string[];
  handleSelectPercentage: (percentage: number) => void;
}) {
  return (
    <div>
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
      <AmountInput amount={amount} amountToValue={(n: number) => n * 1013 / 2} setAmount={setAmount} />
      <AmountSelector proportions={['Max', '1/2', '1/3']} handleSelectPercentage={handleSelectPercentage} />
    </div>
  );
}

export default SelectAmount;