import React, { FC } from "react";
import { Logo } from "$components/Logo/logo";
import { ThemeButton } from "$components/ThemeButton/themeButton";
import Link from 'next/link'

const navs = [
	{
		title: 'Главная',
		href: '/'
	},
	{
		title: 'О нас',
		href: '/about'
	},
	{
		title: 'Услуги',
		href: '/services'
	},
	{
		title: 'Отзывы',
		href: '/feedbacks'
	},
	{
		title: 'Социальные сети',
		href: '/socials'
	},
	{
		title: 'Контакты',
		href: '/contacts'
	}
]

export const Header: FC = () => (
	<header className="flex justify-between items-center">
		<div className="">
			<Logo />
		</div>
		<div className="flex gap-10">
			{
				navs.map((nav, index) => (
					<Link key={index} href={nav.href}>
						{nav.title}
					</Link>
				))
			}
			<ThemeButton />
		</div>
	</header>
)
