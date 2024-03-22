import { useState } from 'react';

import HeaderWrapper from './header';
import AmountInput from './amount-input';
import AmountSelector from './amount-selector';

function SelectAmount({ availableAmount }: {
  availableAmount: number;
}) {
  const [amount, setAmount] = useState(availableAmount);

  const handleSelectPercentage = (percentage: number) => {
    setAmount(availableAmount * percentage);
  }

  return (
    <div>
      <HeaderWrapper availableAmount={availableAmount} />
      <AmountInput amount={amount} amountToValue={(n: number) => n * 1013 / 2} setAmount={setAmount} />
      <AmountSelector proportions={['Max', '1/2', '1/3']} handleSelectPercentage={handleSelectPercentage} />
    </div>
  );
}

export default SelectAmount;