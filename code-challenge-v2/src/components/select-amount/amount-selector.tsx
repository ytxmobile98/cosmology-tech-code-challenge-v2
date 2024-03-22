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
          <StyledButton key={proportion} onClick={() => handleSelectPercentage(percentage)}>
            {proportion}
          </StyledButton>
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

const StyledButton = styled.button`
  font-weight: 500;
  background-color: #eef2f8;
  color: gray;
`

export default StyledAmountSelector;