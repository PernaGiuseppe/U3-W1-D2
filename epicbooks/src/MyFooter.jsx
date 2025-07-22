import { Container, Row, Col } from 'react-bootstrap'

function MyFooter() {
  return (
    <footer>
      <Container fluid>
        <Row
          className="bg-white-50 text-dark text-center
        "
        >
          <Col>Colonna 1</Col>
          <Col>Colonna 2</Col>
          <Col>Colonna 3</Col>
        </Row>
      </Container>
    </footer>
  )
}
export default MyFooter
