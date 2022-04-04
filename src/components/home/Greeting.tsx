import { VStack, Center, Box, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { HOME_PAGE_DATA as data } from '../../constants';

const TEXTS = [
	"hello",
	"hola",
	"bonjour",
	"guten tag",
	"salve",
	"nǐn hǎo",
	"olá",
	"asalaam alaikum",
	"konnichiwa",
	"anyoung haseyo",
	"Zdravstvuyte",
];

export const Greeting = (props) => {
	const [index, setIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const fadeId = setInterval(() => {
			setFade(!fade);
			if (!fade) {
				setTimeout(() => setIndex(index + 1), 100);
			}
		},
			3000
		);
		return () => {
			clearTimeout(fadeId);
		};
	}, [fade, index]);

	return (
		<Box {...props}>
			<VStack spacing={{ base: 24, lg: 12 }}>
				<Box>
					<Center>
						<Heading fontSize="6xl" paddingTop={{ base: 24, lg: 0 }} className={`fade-in-out ${fade ? "fade-in" : "fade-out"}`}>{TEXTS[index % TEXTS.length]}</Heading>
					</Center>
				</Box>
				<Box>
					<Center>
						<Text fontSize={{ base: '2xl', lg: '4xl' }} textAlign="center">
							{data.greeting.subText}
						</Text>
					</Center>
				</Box>
			</VStack>
		</Box>
	);
};
