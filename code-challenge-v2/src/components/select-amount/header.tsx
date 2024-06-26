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

  margin: 0.5em 0;

  color: gray;
`;

const SelectAmountHeader = styled.h2`
  flex-grow: 1;
`;

export default StyledHeaderWrapper;