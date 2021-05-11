import { useColorMode } from '@chakra-ui/color-mode';
import { atomOneDark, atomOneLight, CodeBlock } from 'react-code-blocks';

export const MyCodeBlock = ({ className, children }) => {
	const { colorMode } = useColorMode();

	return (
		<CodeBlock
			language={className.replace('lang-', '')}
			text={children}
			theme={colorMode === 'dark' ? atomOneDark : atomOneLight}
			showLineNumbers={false}
		/>
	);
};
