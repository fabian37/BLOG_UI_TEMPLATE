import styles from './Hero.module.css';
import image from '../../assets/foto6.webp';

export const Hero = () => {
	return (
		<section className={styles.heroContainer}>
			<h1 className={styles.titleContainer}>
				<span className={styles.firstTitle}>React & Node</span>
				<span className={styles.secondTitle}>BLOG</span>
			</h1>
			<img className={styles.img} src={image} alt='flowers and sunset' />
		</section>
	);
};
