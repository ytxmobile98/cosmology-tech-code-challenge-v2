import styled from 'styled-components';

function PersonHeader({ className, children }: {
  className?: string;
  children: string[];
}) {
  return (
    <h2 className={className}>{children.join('')}</h2>
  );
}

const StyledPersonHeader = styled(PersonHeader)`
  font-size: 1em;
`;

export default StyledPersonHeader;