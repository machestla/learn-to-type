import React, { useCallback, useState, useEffect, useRef } from "react";
import { Button } from "@chakra-ui/core";
import { keys, ignoredKeys } from "../../__mocks__";
import { Letter } from "../entities/letter";
const getRandomKey = (): string => { return keys[Math.floor(Math.random() * keys.length)] };


let onKeyPressCount = 0;

export const Letters = () => {
    const [keyValues, setKeyValue] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState({ time: 0, started: false, display: "0h 0m 0s", startedDate: Date.now() });
    const [targetsKeyValues, setTargetsKeyValue] = useState([getRandomKey(), getRandomKey(), getRandomKey(), getRandomKey()]);
    const [error, setError] = useState(0);
    const [valid, setValid] = useState(0);

    useEffect((): any => {
        if (timer.started === true) {
            const hours = Math.floor((timer.time / 100) / 60);
            const minutes = Math.floor((timer.time / 100) - (hours * 60));
            const seconds = Math.floor(timer.time - (hours * 100) - (minutes * 6000));
            const TimeOut = setTimeout(() => setTimer({ time: timer.time + 1, started: true, display: `${hours}h ${minutes}m ${seconds}s`, startedDate: timer.startedDate }), 1000);
            return (TimeOut)
        } else if (timer.started === false) {
            clearTimeout();
        }
    }, [timer]);

    const start = () => {
        if (timer.started === false) {
            setTimer({ time: timer.time, started: true, display: timer.display, startedDate: Date.now() });
        }
    }

    const stop = () => {
        if (timer.started === true) {
            setTimer({ time: timer.time, started: false, display: timer.display, startedDate: Date.now() });
        }
    };

    const reset = () => {
        stop()
        setTimer({ time: 0, started: false, display: "0h 0m 0s", startedDate: Date.now() });
    }

    const focusRef0: React.RefObject<HTMLInputElement> = useRef(null);
    const focusRef1: React.RefObject<HTMLInputElement> = useRef(null);
    const focusRef2: React.RefObject<HTMLInputElement> = useRef(null);
    const focusRef3: React.RefObject<HTMLInputElement> = useRef(null);
    const focusRef4: React.RefObject<HTMLInputElement> = useRef(null);

    const handleChange = (index: number) => (onKeyPress: any) => {
        if (ignoredKeys.some(key => key === onKeyPress.target.value)) {
            console.log("Sorry, sorry, sorry, sorry, 내가 내가 내가 먼저...");
        } else {
            if (onKeyPress.target.value === targetsKeyValues[index]) {
                setKeyValue((previousArray: string[]): string[] => {
                    const newArray = [...previousArray];
                    newArray[index] = onKeyPress.target.value;
                    return newArray;
                });
                setValid(valid + 1);
                onKeyPressCount = onKeyPressCount + 1;
                if (index === 0) {
                    start();
                    focusRef1.current!.focus();
                } else if (index === 1) {
                    focusRef2.current!.focus();
                } else if (index === 2) {
                    focusRef3.current!.focus();
                } else {
                    focusRef4.current!.focus();
                    stop();
                }
            } else {
                setError(error + 1);
                onKeyPressCount = onKeyPressCount + 1;
            }
        }
    };

    const update = useCallback(() => {
        setTargetsKeyValue([getRandomKey(), getRandomKey(), getRandomKey(), getRandomKey()]);
        setKeyValue(["", "", "", ""]);
        focusRef0.current!.focus();
    }, []);

    return (
        <div>
            Click on the first input to start the game! <br />
            <Letter ref={focusRef0} handleChange={handleChange(0)} keyValue={keyValues[0]} placeholder={targetsKeyValues[0]} />
            <Letter ref={focusRef1} handleChange={handleChange(1)} keyValue={keyValues[1]} placeholder={targetsKeyValues[1]} />
            <Letter ref={focusRef2} handleChange={handleChange(2)} keyValue={keyValues[2]} placeholder={targetsKeyValues[2]} />
            <Letter ref={focusRef3} handleChange={handleChange(3)} keyValue={keyValues[3]} placeholder={targetsKeyValues[3]} />
            <div>{error} errors | {onKeyPressCount === 0 ? 0 : valid / onKeyPressCount * 100}% | {timer.display}</div>
            {/* @ts-ignore */}
            <Button ref={focusRef4} label={"Go to next exercise"} onClick={update} colorScheme="teal">Next bunch</Button>
            <Button label={"Start Over"} onClick={reset}>Start Over</Button>
        </div >
    )
};

// able tab key only on the input that you should complete
// disable copy/paste
//fix stop & reset timeout
