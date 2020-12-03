import React from "react";
import { Background } from "../components/CommonStyled";
import Header from "../components/Header";
import OurStory from "../components/OurStory";
import * as ROUTES from "../consts/route";
import { FaqContainer } from "../containers/faq-container";
import { FooterContainer } from "../containers/footer-container";
import JumbotronContainer from "../containers/jumbotron-container";

export function Home() {
  return (
    <>
      <Background src={"/images/misc/home-bg.jpg"}>
        <Header link={ROUTES.HOME} />
        <OurStory />
      </Background>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
