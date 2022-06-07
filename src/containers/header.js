import React from "react";
import { Header } from "../components";
import * as ROUTERS from "../constants/routes";
import logo from "../logo.svg";
export function HeaderContainer({ children }) {
  return (
    <Header>
      {/* <Header.BackgroundShadow> */}
      <Header.Frame>
        <Header.Logo to={ROUTERS.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTERS.SIGNIN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
      {/* </Header.BackgroundShadow> */}
    </Header>
  );
}
