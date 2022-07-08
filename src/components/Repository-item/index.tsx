import { Wrapper, WrapperTitle, WrapperFullName, WrapperLink } from "./styles";

interface RepositoryItemProps {
  name: string;
  linkToRepo: string;
  description: string;
  fullName: string;
}

export const RepositoryItem = ({
  name,
  linkToRepo,
  description,
  fullName,
}: RepositoryItemProps) => {
  return (
    <Wrapper>
      <WrapperTitle>{name}</WrapperTitle>
      <WrapperFullName>Descrição: {description}</WrapperFullName>
      <WrapperLink href={linkToRepo} target='_blank' rel='noreferrer'>
        {fullName}
      </WrapperLink>
    </Wrapper>
  );
};
