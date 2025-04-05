import React from "react";
import { Logo } from "$components/Logo/logo";
import Link from 'next/link'

const navs = [
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

export const Footer = () => {
	return (
		<footer className="flex flex-col md:flex-row gap-6 md:gap-0">
			<div className="flex-1">
				<ul>
					<li className="mb-3"><Logo/></li>
					<li>
						<p>Индивидуальный предприниматель Новикова Кристина Игоревна</p>
					</li>
					<li className="mb-3">
						<p>ОГРНИП: 324237500338592, ИНН: 615528000201</p>
					</li>
				</ul>
			</div>
			<div className="flex-1 flex">
				<ul className="flex-1">
					{
						navs.map((nav, index) => (
							<li className="mb-3">
								<Link key={index} href={nav.href}>
									{nav.title}
								</Link>
							</li>
						))
					}
				</ul>
				<ul className="flex-1">
					<li className="mb-3">Пользовательское соглашение</li>
					<li>Политика конфиденциальности</li>
				</ul>
			</div>
		</footer>
	)
}
