import {
	Box,
	UnorderedList,
	ListItem,
	HStack,
	Center,
	Text,
	Divider,
} from '@chakra-ui/react';

export const Experience = ({ bullets, role, date }) => {
	return (
		<Box>
			<Center paddingBottom={6}>
				<HStack spacing="auto" w="100%">
					<Text fontWeight="bold">{role}</Text>
					<Text fontWeight="bold">{date}</Text>
				</HStack>
			</Center>
			<UnorderedList spacing={6}>
				{bullets.map((bullet) => {
					return <ListItem key={bullet}>{bullet}</ListItem>;
				})}
			</UnorderedList>
		</Box>
	);
};
