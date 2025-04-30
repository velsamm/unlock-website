import { postsSource } from "./postsSource";
import { slugify } from "$utils/slugify";

export const postsTransformer = () => {
	const postsSourceNoPinned = postsSource.result.items.filter((item) => {
		return !item.data.isPinned;
	});

	const posts = postsSourceNoPinned.map((item) => {
		return {
			blocks: item.data.blocks.map((block) => ({ type: block.type, data: block.data, })),
			title: item.data.title,
			id: slugify(item.data.title),
			date: item.data.date * 1000,
		}
	});

	return posts;
}

export type Post = ReturnType<typeof postsTransformer>[0];
export const posts: Post[] = postsTransformer();