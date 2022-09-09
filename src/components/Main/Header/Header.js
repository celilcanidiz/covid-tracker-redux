import React from 'react'
import { Col } from 'react-bootstrap';
import foto from '../../../img/covid.png'
const headerimg = foto;
function Header() {
  return (
    <Col xs lg='5' style={{textAlign:'center'}}>
        <img src={headerimg} alt="headerfoto"/>
        <div>
        <h6>Global and Country Wise Cases of Corona Virus</h6>
<p>(For a Particular country, select a Country from below)</p>
        </div>
    </Col>
    
  )
}

export default Header