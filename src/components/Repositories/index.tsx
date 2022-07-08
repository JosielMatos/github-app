import { useEffect, useState } from "react";
import { useGithub } from "../../hooks/useGithub";
import { RepositoryItem } from "../Repository-item";
import {
  WrapperTabs,
  WrapperList,
  WrapperTab,
  WrapperTabList,
  WrapperTabPanel,
} from "./styles";

export const Repositories = () => {
  const { user, getUserRepos, getUserStarred, repositoryList, starred } =
    useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (user.login) {
      getUserRepos(user.login);
      getUserStarred(user.login);
    }
    setHasUserForSearchrepos(true);
  }, [user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <WrapperTabs
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
        >
          <WrapperTabList>
            <WrapperTab>Repositórios</WrapperTab>
            <WrapperTab>Favoritados</WrapperTab>
          </WrapperTabList>
          <WrapperTabPanel>
            <WrapperList>
              {repositoryList.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  description={item.description}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
          <WrapperTabPanel>
            <WrapperList>
              {starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  description={item.description}
                  fullName={item.full_name}
                />
              ))}
            </WrapperList>
          </WrapperTabPanel>
        </WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};
