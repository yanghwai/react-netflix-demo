import React from "react";
import Header from "../components/Header";
import { FaqContainer } from "../containers/faq-container";
import { FooterContainer } from "../containers/footer-container";
import JumbotronContainer from "../containers/jumbotron-container";
import * as ROUTES from "../consts/route"
import OurStory from "../components/OurStory";

export function Home() {
  return (
    <>
      <Header link={ROUTES.HOME} />
      <OurStory/>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
