import Jumbotron from "./components/jumbotron";

import jumboData from "./fixtures/jumbotron.json";

function App() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item, index) => {
        const itemDirection = index % 2 === 0 ? "row" : "row-reverse";
        return (
          <Jumbotron key={item.id} direction={itemDirection}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        );
      })}
    </Jumbotron.Container>
  );
}

export default App;
