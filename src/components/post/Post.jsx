import styles from './Post.module.css';

export const Post = ({ category, image, overview, time, title }) => (
	<div className={styles.post}>
		<img className={styles.postImage} src={image} alt={title} />
		<div className={styles.postCategories}>
			{category.map((category, index) => (
				<a
					className={styles.postCategory}
					key={index}
					href='/'
					target='_blank'
					rel='noopener noreferrer'
				>
					{category}
				</a>
			))}
		</div>
		<a
			className={styles.postTitle}
			href='/'
			target='_blank'
			rel='noopener noreferrer'
		>
			{title}
		</a>
		<span className={styles.postTime}>{time}</span>
		<p className={styles.postDescription}>{overview}</p>
	</div>
);
