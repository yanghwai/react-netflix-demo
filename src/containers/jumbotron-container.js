import { SubTitle, Title } from "../components/CommonStyled";
import { Container, Item, Inner, Pane, Image } from "../components/Jumbotron";
import jumboData from "../fixtures/jumbotron.json";

function JumbotronContainer() {
  return (
    <Container>
      {jumboData.map((item, index) => {
        const itemDirection = index % 2 === 0 ? "row" : "row-reverse";
        return (
          <Item key={item.id}>
            <Inner direction={itemDirection}>
              <Pane>
                <Title>{item.title}</Title>
                <SubTitle>{item.subTitle}</SubTitle>
              </Pane>
              <Pane>
                <Image src={item.image} alt={item.alt} />
              </Pane>
            </Inner>
          </Item>
        );
      })}
    </Container>
  );
}

export default JumbotronContainer;
