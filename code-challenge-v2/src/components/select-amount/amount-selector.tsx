import styled from 'styled-components';

function AmountSelector({ className, proportions, handleSelectPercentage }: {
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
          <button key={proportion} onClick={() => handleSelectPercentage(percentage)}>
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

  margin: 1em 0;
`;

export default StyledAmountSelector;