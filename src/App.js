import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div>
            <button
                onClick={() =>
                    dispatch({ type: "counter/increment", payload: null })
                }
            >
                Increment
            </button>
            <div>{count}</div>
            <button
                onClick={() =>
                    dispatch({ type: "counter/decrement", payload: null })
                }
            >
                Decrement
            </button>
        </div>
    );
}

export default App;
