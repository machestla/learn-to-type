import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<ButtonGroup variant="ghost" spacing="6" h="3rem" pt="2rem" pb="2rem">
			<Link to="/">
				<Button as="h3" size="md" marginLeft="2rem">
					Home
				</Button>
			</Link>
			<Link to="/exercise">
				<Button as="h3" size="md" marginLeft="2rem">
					Learn
				</Button>
			</Link>
			<Link to="/home">
				<Button as="h3" size="md" marginLeft="2rem">
					Move on
				</Button>
			</Link>
			<Link to="/home">
				<Button as="h3" size="md" marginLeft="2rem">
					Result
				</Button>
			</Link>
		</ButtonGroup>
	);
};
