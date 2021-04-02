import { FullPageBox } from '../containers/FullPageBox';
import { Footer } from '../Footer';
import { MenuBar } from '../MenuBar';

export const NavFooterWrapper = (props) => {
	return (
		<FullPageBox>
			<MenuBar />
			{props.children}
			<Footer />
		</FullPageBox>
	);
};
