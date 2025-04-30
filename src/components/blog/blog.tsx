import React, { FC } from "react";
import { posts } from "$app/blog/postsTransformer";
import { Typography } from "$components/typography/typography";
import { ImageWrapper } from "$components/image/image";
import noImage from "$assets/icons/no-image.jpg";
import Link from "next/link";

export const Blog: FC = () => {
	return (
		<article className='flex gap-10 flex-wrap justify-items-start mt-20'>
			{posts.map((post) => (
				<Link key={post.title} href={'/blog/' + post.id}>
					<article className='max-w-72'>
						<ImageWrapper src={noImage}  className='rounded-lg'/>
						<Typography as='p' className='my-2 text-gray-400'>{new Date(post.date).toLocaleString('ru')}</Typography>
						<Typography as='h1' appearance='regular' >
							{post.title}
						</Typography>
					</article>
				</Link>
			))}
		</article>
	)
}
