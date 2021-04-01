import { Box, VStack, Grid, Spacer, useMediaQuery } from '@chakra-ui/react';
import { Greeting } from '../components/Greeting';
import { Experiences } from '../components/Experiences';
import { Skills } from '../components/Skills';
import { SectionHeader } from '../components/SectionHeader';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import { MenuBar } from '../components/MenuBar';
import Head from 'next/head';

export default function Home() {
	const [isGreaterThan1000Width] = useMediaQuery('(min-width: 1000px)');

	return (
		<>
			<Head>
				<title>Jackson Taylor</title>
			</Head>
			<MenuBar />
			<Box
				overflowX="hidden"
				paddingY={24}
				paddingX={isGreaterThan1000Width ? 36 : '10%'}
			>
				<VStack spacing={24}>
					<Greeting paddingBottom={24} />
					<Grid
						w="100%"
						templateColumns={
							isGreaterThan1000Width ? '1fr 3fr' : '1fr'
						}
						gap={isGreaterThan1000Width ? 24 : 12}
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
