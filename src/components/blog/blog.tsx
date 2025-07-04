import React, { FC } from "react";
import { posts } from "$app/blog/postsTransformer";
import { Typography } from "$components/typography/typography";
import { ImageWrapper } from "$components/image/image";
import noImage from "$assets/icons/no-image.jpg";
import Link from "next/link";

export const Blog: FC = () => {
	return (
		<article className='flex gap-10 flex-wrap justify-items-start mt-10 rounded-2xl bg-[--background-color] p-10 shadow-2xl shadow-[--background-color]/30'>
			<Typography as='p' className='mb-10 w-full' appearance='header'>Блог</Typography>

			{posts.map((post) => (
				<Link key={post.title} href={'/blog/' + post.id}>
					<article className='max-w-32 md:max-w-52'>
						<ImageWrapper src={post.image || noImage}  className='rounded-lg'/>
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
