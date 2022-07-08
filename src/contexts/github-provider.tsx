import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

interface GithubProviderProps {
  children: ReactNode;
}

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  full_name: string;
}

interface GithubUserInfo {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  html_url: string;
  blog: string;
  company: string;
  location: string;
  followers: number;
  following: number;
  public_gists: number;
  public_repos: number;
}

interface IGithubContext {
  hasUser: boolean;
  loading: boolean;
  user: GithubUserInfo;
  repositoryList: Repository[];
  starred: Repository[];
  getUser: (username: string) => void;
  getUserRepos: (username: string) => void;
  getUserStarred: (username: string) => void;
}

export const GithubContext = createContext({} as IGithubContext);

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [user, setUser] = useState({} as GithubUserInfo);
  const [repositoryList, setRepositoryList] = useState<Repository[]>([]);
  const [starred, setStarred] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasUser, setHasUser] = useState(false);

  const getUser = async (username: string) => {
    try {
      await api
        .get(`users/${username}`)
        .then(({ data }) => {
          setUser({ ...data });
        })
        .finally(() => {
          setLoading(false);
          setHasUser(true);
        });
    } catch (error) {
      console.log(error);
      setHasUser(false);
    }
  };

  const getUserRepos = async (username: string) => {
    await api.get(`users/${username}/repos`).then(({ data }) => {
      setRepositoryList([...data]);
    });
  };

  const getUserStarred = async (username: string) => {
    await api.get(`users/${username}/starred`).then(({ data }) => {
      setStarred([...data]);
    });
  };

  return (
    <GithubContext.Provider
      value={{
        hasUser,
        loading,
        getUser,
        user,
        repositoryList,
        starred,
        getUserRepos,
        getUserStarred,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
