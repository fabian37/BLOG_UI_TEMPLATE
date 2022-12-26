import { Link } from 'react-router-dom';
import styles from './HeaderNav.module.css';

export const HeaderNav = () => {
	return (
		<nav className={styles.navContainer}>
			<Link className={styles.navItem} to='/'>
				HOME
			</Link>
			<Link className={styles.navItem} to='/'>
				ABOUT
			</Link>
			<Link className={styles.navItem} to='/'>
				CONTACT
			</Link>
			<Link className={styles.navItem} to='/'>
				WRITE
			</Link>
		</nav>
	);
};
