import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TitleText = styled.h1`
  font-weight: bold;
  flex-grow: 1;
`;

const CloseButton = styled.button`
  padding: 0.5em;

  background-color: var(--accent-color);
  color: var(--primary-text-color);
`;

export default function Title({ children }: {
  children: string;
}) {
  return (
    <TitleWrapper>
      <TitleText>{children}</TitleText>
      <CloseButton>✕</CloseButton>
    </TitleWrapper>
  );
}