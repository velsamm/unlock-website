import React from "react";
import { Logo } from "$components/Logo/logo";

export const Footer = () => {
	return (
		<footer className="flex">
			<div className="flex-1">
				<Logo />
			</div>
			<div className="flex-1 flex">
				<ul className="flex-1">
					<li className="mb-3">
						<a className="page-link" href='#advantages'>
							Преимущества
						</a>
					</li>
					<li className="mb-3">
						<a className="page-link" href='#services'>
							Услуги
						</a>
					</li>
					<li>
						<a className="page-link" href='#prices'>
							Стоимость
						</a>
					</li>
				</ul>
				<ul className="flex-1">
					<li className="mb-3">Пользовательское соглашение</li>
					<li>Политика конфиденциальности</li>
				</ul>
			</div>
		</footer>
	)
}
