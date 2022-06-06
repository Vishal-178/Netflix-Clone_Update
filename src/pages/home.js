import React from "react";
import { JumbotronContainer } from "../containers/jumbotrons";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faq";
export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
