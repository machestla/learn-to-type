import React from 'react';
import { ThemeProvider } from "./components/theme";
import { Homepage } from './components/pages/homepage';
import { Letters } from './components/pages/exercise-by-letters';
import { Sentence } from './components/pages/exercise-by-sentences';
import { styled } from "./components/theme";

import { Box, Center } from "@chakra-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Header } from './components/entities/header';

const Wrapper = styled(Center)({
    width: "100vw",
    height: "90vh",
    padding: "5rem"
})
export function App() {
    return (
        <Router>
            <ThemeProvider>
                <Box h="100vh">
                    <Header />
                    <Wrapper>
                        <Switch>
                            <Route path="/letters">
                                <Letters />
                            </Route>
                            <Route path="/sentences">
                                <Sentence />
                            </Route>
                            <Route path="/">
                                <Homepage />
                            </Route>
                        </Switch>
                    </Wrapper>
                </Box>
            </ThemeProvider>
        </Router>
    )
}