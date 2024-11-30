import React from "react";
import { Logo } from "$components/Logo/logo";

export const Footer = () => {
	return (
		<footer className="row about">
			<div className="col grow-2">
				<Logo />
			</div>
			<div className="col">
				<ul>
					<li>
						<a className="page-link" href='#advantages'>
							Преимущества
						</a>
					</li>
					<li>
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
			</div>
			<div className="col">
				<ul>
					<li>Пользовательское соглашение</li>
					<li>Политика конфиденциальности</li>
				</ul>
			</div>
		</footer>
	)
}
