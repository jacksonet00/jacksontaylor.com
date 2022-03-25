import { VStack, Grid, Flex } from '@chakra-ui/react';
import { Greeting } from '../components/home/Greeting';
import { Experiences } from '../components/home/Experiences';
import { Skills } from '../components/home/Skills';
import { SectionHeader } from '../components/SectionHeader';
import { AboutMe } from '../components/home/AboutMe';
import { Projects } from '../components/home/Projects';
import Head from 'next/head';
import { UIWrapper } from '../components/wrappers/UIWrapper';

export default function Home() {
	return (
		<>
			<Head>
				<title>Jackson Taylor</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<UIWrapper home>
				<VStack spacing={24}>
					<Greeting paddingBottom={24} />
					<Flex
						w={{ base: "95%", lg: 'lg' }} alignItems="center">

						<Flex
							flexDirection="column"
							alignItems="center"
							gap={{ lg: 24, base: 12 }}
							w={{ base: "95%", lg: 'xl' }}
						>
							<AboutMe />
							<Experiences />
							<Projects />
							<Skills />
						</Flex>
					</Flex>

				</VStack>
			</UIWrapper>
		</>
	);
}
