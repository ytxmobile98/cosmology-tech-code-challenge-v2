import { useState } from 'react';
import styled from 'styled-components';

import HeaderWrapper from './header';
import AmountInput from './amount-input';
import AmountSelector from './amount-selector';

function SelectAmount({ className, availableAmount }: {
  className?: string;
  availableAmount: number;
}) {
  const [amount, setAmount] = useState(availableAmount);

  const handleSelectPercentage = (percentage: number) => {
    setAmount(availableAmount * percentage);
  }

  return (
    <div className={className}>
      <HeaderWrapper availableAmount={availableAmount} />
      <AmountInput amount={amount} amountToValue={(n: number) => n * 1013 / 2} setAmount={setAmount} />
      <AmountSelector proportions={['Max', '1/2', '1/3']} handleSelectPercentage={handleSelectPercentage} />
    </div>
  );
}

const StyledSelectAmount = styled(SelectAmount)`
  margin: 1em 0 2em 0;
`

export default StyledSelectAmount;