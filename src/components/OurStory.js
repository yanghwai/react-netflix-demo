import React from "react";
import { SubTitle, Title } from "./CommonStyled";
import { Container, Inner, Item, Pane } from "./Jumbotron";
import OptForm from "./OptForm";

export default function OurStory() {
  return (
    <Container>
      <Item>
        <Inner>
          <Pane width="100%">
            <div style={{textAlign: "center"}}>
              <Title>Unlimited movies, TV shows, and anime.</Title>
              <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
            </div>

            <OptForm
              message="Ready to watch? Enter your email to create or restart your membership."
              buttonText="Get started"
            />
          </Pane>
        </Inner>
      </Item>
    </Container>
  );
}
