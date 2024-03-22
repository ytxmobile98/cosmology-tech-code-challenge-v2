import styled from 'styled-components';

function EditButton({ className }: {
  className?: string;
}) {
  return (
    <button className={className}>
      <img src='edit.svg' alt='Edit' />
    </button>
  );
}

const StyledEditButton = styled(EditButton)`
  padding: 0;

  background-color: transparent;
`;

export default StyledEditButton;