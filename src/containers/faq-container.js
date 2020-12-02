import { Accordion } from "../components";
import OptForm from "../components/OptForm";
import faqData from "../fixtures/faq.json";

export function FaqContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm
        message="Ready to watch? Enter your email to create or restart your membership."
        buttonText="Get started"
      />
    </Accordion>
  );
}
