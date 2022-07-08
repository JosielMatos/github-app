import { useGithub } from "../../hooks/useGithub";
import {
  Wrapper,
  WrapperImage,
  WrapperInfoUser,
  WrapperStatusCount,
  WrapperUserGeneric,
} from "./styles";

export const Profile = () => {
  const { user } = useGithub();

  return (
    <Wrapper>
      <WrapperImage src={user.avatar_url} alt='Avatar of user' />
      <WrapperInfoUser>
        <div>
          <h1>{user.name}</h1>
          <WrapperUserGeneric>
            <h3>Usuário:</h3>
            <a
              href={user.html_url}
              target='_blank'
              rel='noreferrer'
            >
              {user.login}
            </a>
          </WrapperUserGeneric>
          <WrapperUserGeneric>
            <h3>Empresa:</h3>
            <span>{user.company}</span>
          </WrapperUserGeneric>
          <WrapperUserGeneric>
            <h3>Localização:</h3>
            <span>{user.location}</span>
          </WrapperUserGeneric>
          <WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={user.blog} target='_blank' rel='noreferrer'>
              {user.blog}
            </a>
          </WrapperUserGeneric>
        </div>
        <WrapperStatusCount>
          <div>
            <h4>Seguidores</h4>
            <span> {user.followers}</span>
          </div>
          <div>
            <h4>Seguindo</h4>
            <span> {user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {user.public_repos}</span>
          </div>
        </WrapperStatusCount>
      </WrapperInfoUser>
    </Wrapper>
  );
};
