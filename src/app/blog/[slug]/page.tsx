import React from 'react';
import { BlogEntry } from "$components/blog/blogEntry";

export default async function Home(props: { params: Promise<{ slug: string; }> }) {
	const { slug } = await props.params;

	return (
		<BlogEntry id={slug} />
	)
}