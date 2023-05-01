import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export const Doctors = () => {
  return (
   <Container className='Doc'>
    <Row>
        <Col>
        <Card>
            <Card.Img variant='Top' src='https://verdant-truffle-0bb2b2.netlify.app/static/media/1.abbddfe87522de76cd9c.jpeg'
            width="100%"
            alt=''/>
            <Card.Body>
                <Card.Title>Dr. Rohan</Card.Title>
                <Card.Text>BBS, DNB(Ortho)</Card.Text>
                <Card.Text>Consultant orthopaedic surgeon</Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant='Top' src='https://verdant-truffle-0bb2b2.netlify.app/static/media/2.4b66edab93c48f18ab39.jpeg'
            width="100%"
            alt=''/>
            <Card.Body>
                <Card.Title>Dr. Parul</Card.Title>
                <Card.Text>MBBS, MD</Card.Text>
                <Card.Text>Consultant Pathologist</Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col >
        <Card>
            <Card.Img variant='Top' src='https://verdant-truffle-0bb2b2.netlify.app/static/media/3.bf22172673ed264f2fab.jpeg'
            width="100%"
            alt=''
            />
            <Card.Body>
                <Card.Title>Dr. Vimal Shankhdhar</Card.Title>
                <Card.Text>Director </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant='Top' src='https://verdant-truffle-0bb2b2.netlify.app/static/media/4.2c808f079b064f784f4e.jpeg'
            width="100%"
            alt=''/>
            <Card.Body>
                <Card.Title>Dr. Nisha</Card.Title>
                <Card.Text>BBS, MD(Med)</Card.Text>
                <Card.Text>Consultant Physician</Card.Text>
            </Card.Body>
        </Card>
        </Col>
    </Row>
   </Container>
  )
}
