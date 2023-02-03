import React from "react";
import { Col, Row, Button, Statistic } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { asyncIncrement } from "./redux/counter/counterSlice";

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <>
            <Row justify="center" align="middle">
                <Col offset={3} span={7}>
                    <Button
                        onClick={() =>
                            dispatch({
                                type: "counter/increment",
                                payload: null,
                            })
                        }
                    >
                        Increment
                    </Button>
                </Col>
                <Col span={7}>
                    <Button onClick={() => dispatch(asyncIncrement())}>
                        AsyncIncrement
                    </Button>
                </Col>
                <Col span={7}>
                    <Button
                        onClick={() =>
                            dispatch({
                                type: "counter/decrement",
                                payload: null,
                            })
                        }
                    >
                        Decrement
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col offset={10} span={14}>
                    <Statistic
                        title="Current Count"
                        value={count}
                        precision={1}
                    />
                </Col>
            </Row>
        </>
    );
}

export default Counter;
