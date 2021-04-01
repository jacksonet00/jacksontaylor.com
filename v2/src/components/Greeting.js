import {
	VStack,
	Center,
	Box,
	Heading,
	Text,
	useMediaQuery,
} from '@chakra-ui/react';
import data from '../data/data';

export const Greeting = (props) => {
	const [isGreaterThan775Width] = useMediaQuery('(min-width: 775px)');
	const [isGreaterThan625Width] = useMediaQuery('(min-width: 625px)');

	return (
		<Box {...props}>
			<VStack spacing={isGreaterThan775Width ? 24 : 12}>
				<Box>
					<Center>
						<Heading
							fontSize="6xl"
							paddingTop={!isGreaterThan775Width && 24}
						>
							{data.greeting.headline}
						</Heading>
					</Center>
				</Box>
				<Box>
					<Center>
						<Text
							fontSize={
								isGreaterThan625Width ? '4xl' : '2xl'
							}
							textAlign="center"
						>
							{data.greeting.subText}
						</Text>
					</Center>
				</Box>
			</VStack>
		</Box>
	);
};
