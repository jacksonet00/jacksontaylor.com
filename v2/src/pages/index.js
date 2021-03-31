import { Box, VStack, Grid } from '@chakra-ui/react';
import { Greeting } from '../components/Greeting';
import { Experiences } from '../components/Experiences';
import { Skills } from '../components/Skills';
import { SectionHeader } from '../components/SectionHeader';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import { MenuBar } from '../components/MenuBar';

export default function Home() {
	return (
		<>
			<MenuBar />
			<Box paddingY="24" paddingX="32">
				<VStack spacing="24">
					<Greeting />
					<Grid w="100%" templateColumns="1fr 3fr" gap={12}>
						<SectionHeader heading="About me" />
						<AboutMe />
						<SectionHeader heading="Projects" />
						<Projects />
						<SectionHeader heading="Experience" />
						<Experiences />
						<SectionHeader heading="Skills" />
						<Skills />
					</Grid>
				</VStack>
			</Box>
		</>
	);
}
