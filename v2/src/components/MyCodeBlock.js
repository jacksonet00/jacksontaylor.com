import { useColorMode } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
import { atomOneDark, atomOneLight, CodeBlock } from 'react-code-blocks';

export const MyCodeBlock = (props) => {
	const { colorMode } = useColorMode();
	const { className, children } = props;

	return (
		<Box {...props}>
			<CodeBlock
				language={className.replace('lang-', '')}
				text={children}
				theme={colorMode === 'dark' ? atomOneDark : atomOneLight}
				showLineNumbers={false}
			/>
		</Box>
	);
};
