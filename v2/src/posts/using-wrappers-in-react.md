---
title: Using wrappers in react
dateCreated: '2021-04-06'
---

# Using wrappers in react

I've been enjoying writing wrapper components in React so that I can easily provide certain pieces constant UI around the page-specific UI.

## Example

Here is an example of wrapper I wrote for this website. I wanted to show my menu bar and footer above and below every page. I also wanted every page's contents to be contained in the same style of container.

So, I wrote a container component which will space my content the way I like it.

```js
// src/components/containers/FullPageBox.js
import { Box } from '@chakra-ui/react';

export const FullPageBox = (props) => {
	return (
		<Box
			w="100%"
			minHeight="100vh"
			overflowX="hidden"
			paddingY={{ base: 36, lg: 24 }}
			paddingX={{ lg: 36, base: '10%' }}
		>
			{props.children}
		</Box>
	);
};
```

Then I wrote a wrapper component which renders my constant UI and child components which are received as <em>props</em>.

```js
// src/components/wrappers/UIWrapper.js
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
```

Now to add a menu bar, footer, & layout container to all my pages is as simple as returning the UI within this wrapper.

### Example

```js
const MyPage = () => {
	return (
		<UIWrapper>
			<Text>My Page Content!</Text>
		</UIWrapper>
	);
};
```
