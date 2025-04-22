import React, { type FC } from 'react'
import { ImageWrapper } from '$components/image/image'
import { Typography } from '$components/typography/typography'
import { EmployeeModel } from '$models/EmployeeModel';

type Props = Pick<EmployeeModel, 'text' | 'name' | 'photoSrc'>;

export const Employee: FC<Props> = ({ photoSrc, name, text, }) => {
  return (
    <article className='grid grid-cols-3 grid-rows-1 gap-5'>
      <div className='row-span-1 col-span-1'>
        <div className='m-auto rounded-lg overflow-hidden max-w-72'>
          <ImageWrapper src={photoSrc}  />
        </div>
      </div>
      <div className='row-span-1 col-span-2 flex flex-col items-start justify-center gap-8'>
        <Typography as='p' appearance='subheader'>{name}</Typography>
        {
          text.map((item, i) => (
            <Typography key={i} as='p' appearance='regular'>{item}</Typography>
          ))
        }
      </div>
    </article>
  )
}