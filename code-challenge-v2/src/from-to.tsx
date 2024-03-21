import styled from 'styled-components';

export type Person = {
  name: string;
  token: string;
  image: string;
};

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function PersonHeader({ children }: {
  children: string[];
}) {
  return (
    <h2>{children.join('')}</h2>
  );
}

function PersonIconWrapper({ image, token, editIcon }: {
  image: string;
  token: string;
  editIcon?: boolean;
}) {
  return (
    <div>
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
    <PersonWrapper>
      <PersonHeader>From {person.name}</PersonHeader>
      <StyledPersonIconWrapper image={person.image} token={person.token}/>
    </PersonWrapper>
  );
}

function To({ person }: {
  person: Person;
}) {
  return (
    <PersonWrapper>
      <PersonHeader>To {person.name}</PersonHeader>
      <StyledPersonIconWrapper image={person.image} token={person.token} editIcon={true} />
    </PersonWrapper>
  );
}

function FromTo({ from, to }: {
  from: Person;
  to: Person;
}) {
  return (
    <div>
      <From person={from} />
      <To person={to} />
    </div>
  );
}

export default FromTo;