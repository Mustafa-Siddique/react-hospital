import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Personal = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                <img src='https://verdant-truffle-0bb2b2.netlify.app/static/media/hospital.138c5ba6202aa785cdec.jpg' style={{maxWidth:'550px', paddingTop:'100px'}}/>
                </Col>
                <Col>
                <h1 style={{maxWidth:'500px', paddingTop:'150px'}} >Personal care & healthy living</h1>
                <p>We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
                <a  className="btn btn-danger rounded-pill px-4 py-2 fs-5 fw-semibold"
                    href="/">
                        Service
                </a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
