import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Nav, Navbar, Button, Form, FormControl, Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Card, Accordion } from 'react-bootstrap';

import Graph from './component/Graph';
import Velocity from './component/Radar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">Catchy Logo</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#graphs">Graphs</Nav.Link>
                <Nav.Link href="#data">Raw Data</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        {/*<Jumbotron fluid className="Jumbotron">
          <Container>
            <h1 className="tron"><span>Dashboard</span><span><hr /></span></h1>
            <p className="tron">
              Notice that were will a service outage for maintenance this weekend! We will will send updates when services are back to normal capacity with changelog notes to detail points of interest.
            </p>
          </Container>
        </Jumbotron> */}
        <Container>
          <Row className="Row">
            <Col>
              <Card border="light">
                <Card.Header className="Graph-title">Quarterly Update</Card.Header>
                <Card.Body>
                  <Card.Title className="Graph-title"></Card.Title>
                  <Card.Text><Graph /></Card.Text>
                </Card.Body>
              </Card>
              <br />
            </Col>
            <Col>
              <Card>
                <Card.Header className="Graph-title">Weekly Update</Card.Header>
                  <Card.Body>
                    <Card.Title className="Graph-title"></Card.Title>
                    <Card.Text><Graph displayTitle="Weekly Update"/></Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title className="Graph-title">Sprint Goals</Card.Title>
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Goal 1
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body className="Card-text">
                            Sustain current productivity with an average of 5 complexity points a day.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Goal 2
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body className="Card-text">
                            Complete two MVP Features to ship and get customer feedback.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="Row-spacing">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text><Velocity displayTitle="Sprint Analysis"/></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
