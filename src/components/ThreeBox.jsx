import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

export const ThreeBox = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <Card className='py-5 shadow p-3 mb-5 bg-body rounded' style={{height:'18rem'}}>
                    <Card.Body>
                        <Card.Text>24 Hour</Card.Text>
                        <Card.Title>Digital Report</Card.Title>
                        <Card.Text>Get All reports online 24x7 using your phone number or email-id</Card.Text>
                        <a className="btn btn-primary rounded-pill px-4 py-2 fs-5 fw-semibold"
                        >Download</a>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='py-5 shadow p-3 mb-5 bg-body rounded' style={{height:'18rem'}}>
                    <Card.Body>
                        <Card.Text>Timing Schedule</Card.Text>
                        <Card.Title>Working Hour</Card.Title>
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item>Sunday :00-00</ListGroup.Item>
                        <ListGroup.Item>Mon - Sat :00-00</ListGroup.Item>
                        <ListGroup.Item>OPD Timing :09:00-18:00</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='py-5 px-5 shadow p-3 mb-5 bg-body rounded' style={{height:'18rem'}}>
                    <Card.Body>
                        <Card.Text>Emergency Cases</Card.Text>
                        <Card.Title>+91-90349-74348</Card.Title>
                        <Card.Text>Get All time support for emergency. We have introduced the principle of family medicine.Get Connected with us for any urgency.</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
