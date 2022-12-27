import posts from '../../constants/posts.json';
import { Post } from '../post/Post';
import styles from './Posts.module.css';

export const Posts = () => (
	<div className={styles.posts}>
		{posts.map((post, index) => (
			<Post
				key={index}
				category={post.category}
				image={post.image}
				overview={post.overview}
				time={post.time}
				title={post.title}
			/>
		))}
	</div>
);
