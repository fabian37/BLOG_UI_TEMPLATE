import { HeaderLeft } from './headerLeft/HeaderLeft';
import { HeaderNav } from './headerNav/HeaderNav';
import { HeaderRight } from './headerRight/HeaderRight';

export const Header = () => {
	return (
		<header>
			<HeaderLeft />
			<HeaderNav />
			<HeaderRight />
		</header>
	);
};
