import App from "./App";
import { ResetCSS } from "./global/resetCss";
import { GithubProvider } from "./contexts/github-provider";

export const Providers = () => {
  return (
    <GithubProvider>
      <main>
        <ResetCSS />
        <App />
      </main>
    </GithubProvider>
  );
};
