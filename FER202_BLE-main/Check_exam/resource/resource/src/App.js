import { Col, Container, Row } from "react-bootstrap";
import TodoList from "./components/TodoList";

function App(){
    return (
        <Container>
            <Row>
                <Col>
                    <TodoList/>
                </Col>
            </Row>
        </Container>
    )
}

export default App;