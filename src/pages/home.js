import React from "react";
import { FaqContainer } from "../containers/faq-container";
import { FooterContainer } from "../containers/footer-container";
import JumbotronContainer from "../containers/jumbotron-container";

export function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
