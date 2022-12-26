import { useAppContext } from "../context/state";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
  const context = useAppContext();
  const { faqs, fetchFaqs } = context;
  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <h1 className="text-center heading-1">FAQs</h1>
        </div>
        <div className="row my-4">
          <Accordion>
            {faqs &&
              faqs.map((data, key) => {
                return (
                  <Accordion.Item eventKey={data.id}>
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
