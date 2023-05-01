import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className='Foot'>
        <Container className='text-center text-md-start mt-5 pt-5 pb-5'>
            <Row className='mt-3'>
                <Col className='mx-auto, mb-4'>
                    <h6 className='Mb-4 fw-bold fs-4'>RS GAUR GLOBAL MULTISPECIALITY HOSPITAL</h6>
                    <p><a href='/' className='text-decoration-none text-dark fw-normal'>+91 9457514207</a></p>
                    <p><a href='/' className='text-decoration-none text-dark fw-normal'>golbalmshospital@gmail.com</a></p>
                    <p>Hospital in D-2 Subhash Nagar, Jhajjar Near Civil Hospital</p>
                </Col>
                <Col className='mx-auto mb-4'>
                    <p><a href='/' className='text-decoration-none text-dark fw-normal'>Service</a></p>
                    <p><a href='/' className='text-decoration-none text-dark fw-normal'>About Us</a></p>
                    <p><a href='/' className='text-decoration-none text-dark fw-normal'>Gallery</a></p>
                </Col>
                <Col className='mx-auto mb-4'>
                    <p><a href='/' className='text-decoration-none text-dark fw-normal'>Our Terms</a></p>
                    <p><a href='/' className='text-decoration-none text-dark fw-normal'>Contact Us</a></p>
                    <p><a href='/' className='text-decoration-none text-dark fw-normal'>Blogs</a></p>
                </Col>
                <Col className='mx-auto mb-md-0 mb-4'>
                    <img src='https://verdant-truffle-0bb2b2.netlify.app/static/media/logo.3966185959ffe23662de.png' height={200} width={200}/>
                </Col>

            </Row>

        </Container>
    </div>
  )
}
