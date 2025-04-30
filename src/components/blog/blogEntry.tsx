import React, { FC } from 'react';
import { posts } from '$app/blog/postsTransformer';
import { Typography } from '$components/typography/typography';

export const BlogEntry: FC<{ id: string }> = ({ id }) => {
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return null;
  }

  return (
    <article>
      <Typography as='p' className='my-2 text-gray-400'>{new Date(post.date).toLocaleString('ru')}</Typography>

      <Typography as='h1' appearance='header' className='mt-20 mb-20' >
        {post.title}
      </Typography>

      {post.blocks.map((block, index) => (
        <Typography
          key={index}
          className="my-6"
          as="p"
          appearance="regular"
          dangerouslySetInnerHTML={{ __html: block.data.text || '' }}
        />
      ))}
    </article>
  );
};
