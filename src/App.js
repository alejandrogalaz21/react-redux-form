import React from 'react'
import './App.css'
import { Container, Row, Col } from 'reactstrap'

//components
import FormExample from './components/Inputs/FormExample'

function App() {
  return (
    <Container>
      <Row>
        <Col sm='12' md={{ size: 6, offset: 4 }}>
          <h1>RF Inputs :</h1>
        </Col>
        <Col sm='12' md={{ size: 6, offset: 4 }}>
          <FormExample />
        </Col>
      </Row>
    </Container>
  )
}

export default App
