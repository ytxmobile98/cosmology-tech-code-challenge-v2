import styled from 'styled-components';

function Arrow({ className }: {
  className?: string;
}) {
  return (
    <div className={className}>
      <div className={className}>→</div>
    </div>
  );
}

const StyledArrow = styled(Arrow)`
  grid-row: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 1.25em;
`;

export default StyledArrow;