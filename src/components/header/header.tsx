import React, { FC } from 'react'
import { pages } from '$components/header/pages'
import Link from 'next/link'
import { Burger } from './burger'
import { Logo } from '$components/logo/logo'
import { Block } from '$components/block/block'

export const Header: FC = () => {
  return (
    <header className="py-7">
      <Block>
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex gap-10">
            <Burger>
              <ul className='flex flex-col md:flex-row'>
                {pages.map((page, index) => (
                  <li className='py-3 px-6 border-b-[1px] md:border-b-0 last:border-b-0 border border-t-0 border-x-0'>
                    <Link key={index} href={page.href} className='block w-full'>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Burger>
          </div>
        </div>
      </Block>
    </header>
  )
}
