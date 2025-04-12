import { Blog } from "$components/blog/blog";
import { posts } from "./postsTransformer";

export default function Home() {
	return (
		<Blog posts={posts} />
	)
}