import { FullPageBox } from '../containers/FullPageBox';
import { Footer } from '../Footer';
import { MenuBar } from '../MenuBar';

export const UIWrapper = (props) => {
	return (
		<FullPageBox>
			<MenuBar {...props} />
			{props.children}
			<Footer />
		</FullPageBox>
	);
};
