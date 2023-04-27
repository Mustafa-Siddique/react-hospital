import { Card, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Backgr } from "./components/Backgr";
import { NavTop } from "./components/NavTop";
// import { Card } from 'react-bootstrap';

function App() {
  return (
    <>
      <NavTop />
      <Backgr />
      <Container fluid>
        <Row
        >
          <Col className="bg-info">
            <br />
            <br />
            <br />
          </Col>
          <Col className="bg-warning">
            <br />
            <br />
            <br />
          </Col>
          <Col className="bg-success">
            <br />
            <br />
            <br />
          </Col>
          <Col className="bg-danger">
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
      {/* <Card/> */}
    </>
  );
}

export default App;
