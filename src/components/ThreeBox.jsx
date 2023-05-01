import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export const ThreeBox = () => {
  return (
    <div className='how'>
        <Container className='p'>
            <Row>
                <Col md='4'>
                <Card className='mt-5 shadow p-3  rounded-5 border-0 d-flex align-items-center' >
                    <Card.Body>
                        <Card.Text>24 Hour</Card.Text>
                        <Card.Title>Digital Report</Card.Title>
                        <Card.Text>Get All reports online 24x7 using your phone number or email-id</Card.Text>
                        <button className='btn btn-primary rounded-pill px-4 py-2 fs-5 fw-semibold'
                        >Download</button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md='4'>
                <Card className=' mt-5 shadow p-3  rounded-5 border-0   align-items-center' >
                    <Card.Body>
                        <Card.Text>Timing Schedule</Card.Text>
                        <Card.Title>Working Hour</Card.Title>
                        <Card.Text>Sunday :00-00</Card.Text>
                        <Card.Text>Mon - Sat :00-00</Card.Text>
                        <Card.Text>OPD Timing :09:00-18:00</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md='4'>
                <Card className=' mt-5 shadow p-3  rounded-5 border-0 align-items-center' >
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
