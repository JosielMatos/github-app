import { useContext } from "react";
import { GithubContext } from "../contexts/github-provider";

export const useGithub = () => {
  const {
    user,
    getUser,
    hasUser,
    loading,
    getUserRepos,
    getUserStarred,
    repositoryList,
    starred,
  } = useContext(GithubContext);

  return {
    user,
    hasUser,
    loading,
    getUser,
    getUserRepos,
    getUserStarred,
    repositoryList,
    starred,
  };
};
