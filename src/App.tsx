import { Layout } from "./components/Layout";
import { NoSearch } from "./components/No-search";
import { Profile } from "./components/Profile";
import { Repositories } from "./components/Repositories";
import { useGithub } from "./hooks/useGithub";

const App = () => {
  const { hasUser, loading } = useGithub();
  return (
    <Layout>
      {hasUser ? (
        <>
          {loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App
