import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { themeConfig } from '../theme';
import Head from 'next/head';
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../App.css";


const theme = extendTheme(themeConfig);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
