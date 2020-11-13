import React from 'react';
import { VStack, Button, Heading, Text, Stack } from "@chakra-ui/core";
import { Link } from "react-router-dom";


export const Homepage = () => {
    return (
        <>
            <VStack spacing="5rem">
                <Heading as="h1" size="2xl">L____ T_ T___</Heading>
                <Text>
                    Cake marshmallow toffee tiramisu fruitcake pudding. Jujubes biscuit
                    candy I love pastry bonbon pie. Candy liquorice bear claw I love
                    liquorice halvah. Gummies ice cream wafer macaroon. Dessert jelly
                    beans gummies toffee gummies. Lemon drops icing icing I love I love
                    soufflé I love tart. Tootsie roll apple pie candy canes gingerbread
                    sweet I love. I love I love gummi bears jujubes cake cotton candy
                    dessert.
                    Gummi bears dragée sweet biscuit cheesecake bear claw toffee I love.
                    Fruitcake lollipop topping tootsie roll halvah lollipop biscuit
                    soufflé. Chocolate bar bonbon icing wafer. I love pastry gingerbread
                    chupa chups cake. Liquorice liquorice tiramisu I love toffee.
                    Cheesecake sesame snaps pie brownie muffin I love lemon drops I love
                    jelly beans. Oat cake liquorice I love oat cake sugar plum I love
                    chocolate jelly cake.
                </Text>
                <Stack direction="row" spacing={4}>
                    <Link to="/letters">
                        <Button colorScheme="teal">Start (letters)</Button>
                    </Link>
                    <Link to="/sentences">
                        <Button colorScheme="teal" variant="outline">Start (sentences)</Button>
                    </Link>
                </Stack>
            </VStack>
        </>
    )
}