import React, { useState } from 'react';
import {
	Grommet,
	Box,
	Button,
	Heading,
	Collapsible,
	ResponsiveContext,
	Layer,
	Image,
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import logo from './personal_brand.png';

const theme = {
	global: {
		colors: {
			brand: 'palevioletred',
		},
		font: {
			family: 'Roboto',
			size: '18px',
			height: '20px',
		},
	},
};

const AppBar = (props) => {
	return (
		<Box
			tag="header"
			direction="row"
			align="center"
			justify="between"
			background="brand"
			pad={{ left: 'medium', right: 'small', vertical: 'small' }}
			elevation="medium"
			style={{ zIndex: '1' }}
			{...props}
		/>
	);
};

function App() {
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<Grommet theme={theme} full>
			<ResponsiveContext.Consumer>
				{(size) => (
					<Box fill>
						<AppBar>
							<Heading level="3" margin="none">
								My App
							</Heading>
							<Button
								icon={<Notification />}
								onClick={() =>
									setShowSidebar(!showSidebar)
								}
							/>
						</AppBar>
						<Box
							direction="row"
							flex
							overflow={{ horizontal: 'hidden' }}
						>
							<Box flex align="center" justify="center">
								<Image src={logo} alt="logo" />
							</Box>
							{!showSidebar || size !== 'small' ? (
								<Collapsible
									direction="horizontal"
									open={showSidebar}
								>
									<Box
										flex
										width="medium"
										background="light-2"
										elevation="small"
										align="center"
										justify="center"
									>
										Sidebar
									</Box>
								</Collapsible>
							) : (
								<Layer>
									<Box
										background="light-2"
										tag="header"
										justify="end"
										align="center"
										direction="row"
									>
										<Button
											icon={<FormClose />}
											onClick={() =>
												setShowSidebar(
													false
												)
											}
										/>
									</Box>
									<Box
										fill
										background="light-2"
										align="center"
										justify="center"
									>
										Sidebar
									</Box>
								</Layer>
							)}
						</Box>
					</Box>
				)}
			</ResponsiveContext.Consumer>
		</Grommet>
	);
}

export default App;
