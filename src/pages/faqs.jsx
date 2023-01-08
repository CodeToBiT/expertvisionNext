import { useEffect } from "react";
import { Accordion } from "react-bootstrap";

const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseFaqs = await fetch([url, "faqs"].join(""));
  const faqs = await responseFaqs.json();

  return {
    props: {
      faqs,
    },
  };
}

const Faqs = ({ faqs }) => {
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <h1 className="text-center heading-1">FAQs</h1>
        </div>
        <div className="row my-4">
          <Accordion>
            {faqs &&
              faqs.data.map((data, key) => {
                return (
                  <Accordion.Item eventKey={data.id} key={key}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>
                      <div
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      ></div>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faqs;
