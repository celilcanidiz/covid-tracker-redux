import React from 'react'
import {Container, Row} from 'react-bootstrap';
import Cards from './Cards/Cards';
import MyChart from './Chart/MyChart';
import Header from './Header/Header';
function Main() {
    
  return (
    <Container >
        <Row className="justify-content-md-center">
    <Header/>
        </Row>
        <Row className="justify-content-md-center">
    <Cards />
        </Row>
        <Row className="justify-content-md-center">
    <MyChart/>
        </Row>
    </Container>
  )
}

export default Main