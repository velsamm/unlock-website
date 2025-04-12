import React, { FC } from "react";
import { Post } from "../../app/blog/postsTransformer";
import { Typography } from "$components/typography/typography";

type Props = {
	posts: Post[];
}

// const el = () => React.createElement('span');

export const Blog: FC<Props> = ({ posts }) => {
	return (
		<section>
			{posts.slice(0,1).map((post) => (
				<div key={post.title}>
					<Typography as='h1' appearance='header'>
						{post.title}
					</Typography>
					{post.blocks.map((block) => (
						<Typography as='span' appearance='regular'>
							<span dangerouslySetInnerHTML={{ __html: block.data.text || '' }} />
							{/*{block.data.text}*/}
						</Typography>
					))}
				</div>
			))}
		</section>
	)
}