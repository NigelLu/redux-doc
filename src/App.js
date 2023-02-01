import React from "react";
import { Col, Row, Button, Statistic } from "antd";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <Row justify="center" align="middle">
            <Col span={8}>
                <Button
                    onClick={() =>
                        dispatch({ type: "counter/increment", payload: null })
                    }
                >
                    Increment
                </Button>
            </Col>
            <Col span={8}>
                <Statistic title="Current Count" value={count} precision={1} />
            </Col>
            <Col span={8}>
                <Button
                    onClick={() =>
                        dispatch({ type: "counter/decrement", payload: null })
                    }
                >
                    Decrement
                </Button>
            </Col>
        </Row>
    );
}

export default App;
