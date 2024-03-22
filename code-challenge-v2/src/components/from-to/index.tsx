import styled from 'styled-components';

import Arrow from './arrow';
import EditButton from './edit-button';
import PersonImage from './person-image';
import Token from './token';

export type Person = {
  name: string;
  token: string;
  image: string;
};

const PersonWrapper = styled.div<{ $column: number }>`
  display: grid;
  grid-row: 1 / -1;
  grid-column: ${props => props.$column} / ${props => props.$column + 1};
  grid-template-rows: subgrid;
  grid-row-gap: 0.5em;
`;

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

function PersonImageAndTokenWrapper({ className, image, token, editButton }: {
  className?: string;
  image: string;
  token: string;
  editButton?: boolean;
}) {
  return (
    <div className={className}>
      <PersonImage src={image} />
      <Token>{token}</Token>
      {editButton && <EditButton />}
    </div>
  );
}

const StyledPersonImageAndTokenWrapper = styled(PersonImageAndTokenWrapper)`
  padding: 0.25em;
  border-radius: 0.25em;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;

  background-color: #eef2f8;
`;

function From({ person }: {
  person: Person;
}) {
  return (
    <PersonWrapper $column={1}>
      <StyledPersonHeader>From {person.name}</StyledPersonHeader>
      <StyledPersonImageAndTokenWrapper image={person.image} token={person.token}/>
    </PersonWrapper>
  );
}

function To({ person }: {
  person: Person;
}) {
  return (
    <PersonWrapper $column={3}>
      <StyledPersonHeader>To {person.name}</StyledPersonHeader>
      <StyledPersonImageAndTokenWrapper image={person.image} token={person.token} editButton={true} />
    </PersonWrapper>
  );
}

function FromTo({ className, from, to }: {
  className?: string;
  from: Person;
  to: Person;
}) {
  return (
    <div className={className}>
      <From person={from} />
      <Arrow />
      <To person={to} />
    </div>
  );
}

const StyledFromTo = styled(FromTo)`
  margin: 1em 0 2em 0;

  display: grid;
  grid-template-columns: 4fr 1fr 5fr;
  grid-template-rows: repeat(2, auto);
`;

export default StyledFromTo;