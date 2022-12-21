import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";

const Testimonails = (props) => {
  const Testimonial = [
    {
      id: "1",
      name: "Bangalore",
      image: "/images/testimonial.png",
      position: "Student",
      description:
        "Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla laoreet tincidunt nec nulla ullamcorper. Convallis viverra risus, facilisis erat gravida justo, urna ultrices.",
    },
    {
      id: "2",
      name: "Miss Horizon",
      image: "/images/blog2.png",
      position: "Teacher",
      description:
        "Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla laoreet tincidunt nec nulla ullamcorper. Convallis viverra risus, facilisis erat gravida justo, urna ultrices.",
    },
    {
      id: "3",
      name: "Nana Winter",
      image: "/images/testimonial.png",
      position: "Student",
      description:
        "Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla laoreet tincidunt nec nulla ullamcorper. Convallis viverra risus, facilisis erat gravida justo, urna ultrices.",
    },
    {
      id: "4",
      name: "Layla Smitz",
      image: "/images/blog2.png",
      position: "Student",
      description:
        "Ante facilisi ipsum sit eget dolor maecenas sed. Fringilla laoreet tincidunt nec nulla ullamcorper. Convallis viverra risus, facilisis erat gravida justo, urna ultrices.",
    },
  ];
  return (
    <>
      <div className="testimonials">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={Testimonial[0].id}
        >
          <Row>
            <Col sm={1}>
              <Nav variant="pills" className="flex-column">
                {Testimonial &&
                  Testimonial.map((item, key) => {
                    return (
                      <Nav.Item key={item.id}>
                        <Nav.Link eventKey={item.id}>0{item.id}</Nav.Link>
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
                    {Testimonial &&
                      Testimonial.map((item, key) => {
                        return (
                          <Tab.Pane eventKey={item.id} key={item.id}>
                            <Row className="align-items-center">
                              <Col sm={12} md={5}>
                                <div className="media-wrapper position-relative">
                                  <Image
                                    src={item.image}
                                    alt="loading"
                                    priority="false"
                                    fill
                                  />
                                </div>
                              </Col>

                              <Col sm={12} md={7}>
                                <div className="testimonials-content">
                                  <p>{item.description}</p>
                                  <h5>{item.name}</h5>
                                  <h6>{item.position}</h6>
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

export default Testimonails;
