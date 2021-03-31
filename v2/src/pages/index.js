import { Box, VStack, Grid, Spacer } from '@chakra-ui/react';
import { Greeting } from '../components/Greeting';
import { Experiences } from '../components/Experiences';
import { Skills } from '../components/Skills';
import { SectionHeader } from '../components/SectionHeader';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import { MenuBar } from '../components/MenuBar';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Jackson Taylor</title>
			</Head>
			<MenuBar />
			<Box padding={24}>
				<VStack spacing={24}>
					<Greeting paddingBottom={{ lg: 24, sm: 6 }} />
					<Grid
						w="100%"
						templateColumns={{ lg: '1fr 3fr', sm: '1fr' }}
						gap={{ lg: 24, sm: 6 }}
					>
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
