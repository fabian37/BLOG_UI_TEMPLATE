import { Link } from 'react-router-dom';
import styles from './HeaderRight.module.css';

export const HeaderRight = () => {
	return (
		<div className={styles.headerRightContainer}>
			<Link className={styles.navItem} to='/login'>
				LOGIN
			</Link>
			<Link className={styles.navItem} to='/register'>
				REGISTER
			</Link>
			<i className='fa-solid fa-magnifying-glass'></i>
		</div>
	);
};
