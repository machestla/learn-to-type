import React, { useCallback, useState, useEffect, useRef, useMemo } from "react";
import { Button, Box } from "@chakra-ui/core";
import { keys, sentences, ignoredKeys } from "../../__mocks__";
import { Letter } from "../entities/letter";

const getRandomKey = (): string => { return keys[Math.floor(Math.random() * keys.length)] };


const getRandomSentences = (): string => { return sentences[Math.floor(Math.random() * sentences.length)] };

const sentence = getRandomSentences();
const sentenceKeys = sentence.split('');

let onKeyPressCount = 0;

export const Sentence = () => {
    const [keyValues, setKeyValue] = useState(sentenceKeys.map((key, index) => key = ""));
    const [timer, setTimer] = useState({ time: 0, started: false, display: "0h 0m 0s", startedDate: Date.now() });
    const [targetsKeyValues, setTargetsKeyValue] = useState(sentenceKeys);
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

    const focusRefButton: React.RefObject<HTMLInputElement> = useRef(null);

    const refsArray: React.RefObject<HTMLInputElement>[] = useMemo(() => [], []);;
    sentenceKeys.map((key, index) => refsArray[index] = React.createRef())
    const refs = useRef(refsArray)
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
                if (index >= 0 && index < refsArray.length - 1) {
                    console.log("if", index, refsArray.length);
                    start();
                    refsArray[index + 1].current!.focus();
                } else {
                    console.log("else", index, refsArray.length);
                    focusRefButton.current!.focus();
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
        refsArray[0].current!.focus();
    }, [refsArray]);

    return (
        <div>
            Click on the first input to start the game! <br />
            <Box aria-label={sentence}>
                {sentenceKeys.map((key, index) => <Letter ref={refs.current[index]} handleChange={handleChange(index)} keyValue={keyValues[index]} placeholder={targetsKeyValues[index]} />)}
            </Box>
            <div>{error} errors | {onKeyPressCount === 0 ? 0 : valid / onKeyPressCount * 100}% | {timer.display}</div>
            {/* @ts-ignore */}
            <Button ref={focusRefButton} label={"Go to next exercise"} onClick={update} colorScheme="teal">Next bunch</Button>
            <Button label={"Start Over"} onClick={reset}>Start Over</Button>
        </div >
    )
};

// able tab key only on the input that you should complete
// disable copy/paste
//fix stop & reset timeout
