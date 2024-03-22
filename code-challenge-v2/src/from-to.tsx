import styled from 'styled-components';

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
`;

function PersonHeader({ className, children }: {
  className?: string;
  children: string[];
}) {
  return (
    <h2 className={className}>{children.join('')}</h2>
  );
}

const StyledPersonHeader = styled(PersonHeader)``;

function PersonIconWrapper({ className, image, token, editIcon }: {
  className?: string;
  image: string;
  token: string;
  editIcon?: boolean;
}) {
  return (
    <div className={className}>
      <PersonImage src={image} />
      <span>{token}</span>
      {editIcon && <button>Edit</button>}
    </div>
  );
}

const StyledPersonIconWrapper = styled(PersonIconWrapper)`
  display: flex;
  flex-direction: row;
`;

function PersonImage({ src }: {
  src: string;
}) {
  return (
    <img src={src} />
  );
}

function From({ person }: {
  person: Person;
}) {
  return (
    <PersonWrapper $column={1}>
      <StyledPersonHeader>From {person.name}</StyledPersonHeader>
      <StyledPersonIconWrapper image={person.image} token={person.token}/>
    </PersonWrapper>
  );
}

function To({ person }: {
  person: Person;
}) {
  return (
    <PersonWrapper $column={3}>
      <StyledPersonHeader>To {person.name}</StyledPersonHeader>
      <StyledPersonIconWrapper image={person.image} token={person.token} editIcon={true} />
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
      <To person={to} />
    </div>
  );
}

const StyledFromTo = styled(FromTo)`
  display: grid;
  grid-template-columns: 4fr 1fr 5fr;
  grid-template-rows: repeat(2, auto);
`;

export default StyledFromTo;