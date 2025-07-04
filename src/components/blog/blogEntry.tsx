import React, { FC } from 'react';
import { posts } from '$app/blog/postsTransformer';
import { Typography } from '$components/typography/typography';
import { Breadcrumbs } from "$components/breadcrumbs/breadcrumbs";

export const BlogEntry: FC<{ id: string }> = ({ id }) => {
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return null;
  }

  return (
    <>
      <Breadcrumbs parts={[{ url: '/blog', text: 'Блог'}, { text: post.title }]} />
      <article className='mt-10 rounded-2xl bg-[--background-color] px-10 shadow-2xl shadow-[--background-color]/30'>
        <Typography as='h1' appearance='header' className='my-10' >
          {post.title}
        </Typography>

        <Typography as='p' className='mb-10 text-gray-400'>{new Date(post.date).toLocaleString('ru')}</Typography>

        {post.blocks.map((block, index) => (
          <Typography
            key={index}
            className="my-6 tracking-wide"
            as="p"
            appearance="regular"
            dangerouslySetInnerHTML={{ __html: block.data.text || '' }}
          />
        ))}
      </article>

    </>
  );
};
