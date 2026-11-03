import { createContext, useState, useEffect } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    const [timesCounted, setTimesCounted] = useState(0);



    return (
        <CounterContext.Provider value={{ count, setCount, timesCounted, setTimesCounted }}>
            {props.children}
        </CounterContext.Provider>
    );
}