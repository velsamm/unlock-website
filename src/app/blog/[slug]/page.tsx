import React from 'react';
import { BlogEntry } from "$components/blog/blogEntry";
import { posts } from "$app/blog/postsTransformer";
import { BRAND_NAME } from "$app/constants";

type Props = {
	params: Promise<{ slug: string }>;
}

const DEFAULT_TITLE = "Разблокировка аккаунтов";
const DEFAULT_DESCRIPTION = "Разблокируем доступ к криптовалютным аккаунтам и банковским счетам";

export async function generateMetadata({ params }: Props) {
	const slug = (await params).slug;
	const post = posts.find((p) => p.id === slug);

	const pageTitle = [post?.title || DEFAULT_TITLE, 'Блог', BRAND_NAME].join(' | ');

	return {
		title: pageTitle,
		description: DEFAULT_DESCRIPTION,
	}
}

export default async function Home(props: Props) {
	const { slug } = await props.params;

	return (
		<BlogEntry id={slug} />
	)
}