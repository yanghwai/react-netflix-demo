import { FaqContainer } from "./containers/faq-container";
import { FooterContainer } from "./containers/footer-container";
import JumbotronContainer from "./containers/jumbotron-container";

function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer/>
      <FooterContainer />
    </>
  );
}

export default App;
