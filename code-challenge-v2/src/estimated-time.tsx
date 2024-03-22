import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: gainsboro;
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