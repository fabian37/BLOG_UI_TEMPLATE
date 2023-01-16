import posts from '../../constants/posts.json';
import { Post } from '../post/Post';
import styles from './Posts.module.css';

export const Posts = () => (
	<div className={styles.posts}>
		{posts.map(post => (
			<Post
				key={post.id}
				category={post.category}
				image={post.image}
				overview={post.overview}
				time={post.time}
				title={post.title}
				id={post.id}
			/>
		))}
	</div>
);
