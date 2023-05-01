import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const Personal = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md="5"> 
            <img
              src="https://verdant-truffle-0bb2b2.netlify.app/static/media/hospital.138c5ba6202aa785cdec.jpg"
              width="100%"
              alt=""
            />
          </Col>
          <Col md="5" className="d-flex align-items-center">
            <div style={{ height: "min-content" }}>
              <h1>Personal care & healthy living</h1>
              <p>
                We provide best leading medicle service Nulla perferendis veniam
                deleniti ipsum officia dolores repellat laudantium obcaecati
                neque.
              </p>
              <a
                className="btn btn-danger rounded-pill px-4 py-2 fs-5 fw-semibold"
                href="/"
              >
                Service
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
