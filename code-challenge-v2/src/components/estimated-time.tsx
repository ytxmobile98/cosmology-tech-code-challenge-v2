import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1em 0;
  padding: 0.5em;

  border-radius: 0.25em;

  background-color: #eef2f8;
  font-weight: 500;
`;

function EstimatedTime({ time }: {
  time: string;
}) {
  return (
    <Wrapper>Estimated time: {time}</Wrapper>
  );
}

export default EstimatedTime;