import { ReactNode } from "react";
import { Header } from "../Header";
import { WrapperLayout } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <WrapperLayout>
      <Header />
      {children}
    </WrapperLayout>
  );
};
