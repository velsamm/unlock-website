import React, { FC, Fragment } from 'react';
import Link from 'next/link';

interface Props {
  parts: { url?: string; text: string }[];
}

export const Breadcrumbs: FC<Props> = ({ parts }) => {
  const lastPart = parts.pop();

  return (
    <p className="text-gray-300 pt-5">
      {parts.map((part, index) => {
        return (
					<Fragment key={index}>
						<Link href={part.url!} className='underline'>
							{part.text}
						</Link>
						{' > '}
					</Fragment>
        );
      })}
      <span>{lastPart?.text}</span>
    </p>
  );
};
