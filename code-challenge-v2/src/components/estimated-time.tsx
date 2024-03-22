import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1em 0;
  padding: 0.5em;

  display: flex;
  align-items: center;
  gap: 1em;

  border-radius: 0.25em;
  background-color: #eef2f8;
  font-weight: 500;
`;

function Clock() {
  return (
    <img src='clock.svg' alt='clock' />
  );
}

function EstimatedTime({ time }: {
  time: string;
}) {
  return (
    <Wrapper>
      <Clock />
      <div>Estimated time: <strong>{time}</strong></div>
    </Wrapper>
  );
}

export default EstimatedTime;