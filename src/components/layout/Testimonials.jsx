import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";

const Testimonials = (props) => {
  const context = useAppContext();
  const { testimonials, fetchTestimonials } = context;

  useEffect(() => {
    if (testimonials == null) {
      fetchTestimonials();
    }
  }, []);
  return (
    <>
      <div className="testimonials">
        <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
          <Row>
            <Col sm={1} className="order">
              <Nav variant="pills" className="flex-column">
                {
                testimonials &&
                  testimonials.slice(0, 4).map((data, key) => {
                    return (
                      <Nav.Item key={key}>
                        <Nav.Link eventKey={data.id}>0{key+1}</Nav.Link>
                      </Nav.Item>
                    );
                  })}
              </Nav>
            </Col>
            <Col sm={11} md={11}>
              <Row>
                <Col sm={1} md={1} className="inverted">
                  <Image
                    src="/images/inverted.png"
                    width={80}
                    height={60}
                    alt="loading"
                    priority="false"
                  />
                </Col>
                <Col sm={11}>
                  <Tab.Content>
                    {testimonials &&
                      testimonials.slice(0, 4).map((data, key) => {
                        return (
                          <Tab.Pane eventKey={data.id} key={key}>
                            <Row className="align-items-center">
                              <Col sm={12} md={5}>
                                <div className="media-wrapper position-relative">
                                  <Image
                                    src={data.image}
                                    alt="loading"
                                    priority="false"
                                    sizes="(max-height: 405px)"
                                    fill
                                  />
                                </div>
                              </Col>

                              <Col sm={12} md={7}>
                                <div className="testimonials-content">
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: data.description,
                                    }}
                                  ></p>
                                  <h5>{data.name}</h5>
                                  <h6>{data.position}</h6>
                                </div>
                              </Col>
                            </Row>
                          </Tab.Pane>
                        );
                      })}
                  </Tab.Content>
                </Col>
              </Row>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

export default Testimonials;
