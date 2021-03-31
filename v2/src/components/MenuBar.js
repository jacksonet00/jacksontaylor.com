import {
	Box,
	Menu,
	HStack,
	MenuButton,
	Button,
	useColorMode,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AiFillLinkedin } from 'react-icons/ai';
import { MarkGithubIcon } from '@primer/octicons-react';
import { GITHUB_URL, LINKEDIN_URL } from '../constants';

export const MenuBar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box position="absolute" top={0} right={0} padding={6}>
			<Menu>
				<HStack spacing={2}>
					<MenuButton
						as={Button}
						onClick={() => window.open(GITHUB_URL, '_blank')}
					>
						<MarkGithubIcon size={16 /* magic number */} />
					</MenuButton>
					<MenuButton
						as={Button}
						onClick={() =>
							window.open(LINKEDIN_URL, '_blank')
						}
					>
						<AiFillLinkedin size={20 /* magic number */} />
					</MenuButton>
					<MenuButton as={Button} onClick={toggleColorMode}>
						{colorMode === 'light' ? (
							<MoonIcon />
						) : (
							<SunIcon />
						)}
					</MenuButton>
				</HStack>
			</Menu>
		</Box>
	);
};
