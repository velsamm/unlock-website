import React, { FC } from "react";
import { Logo } from "$components/Logo/logo";
import { ThemeButton } from "$components/ThemeButton/themeButton";

export const Header: FC = () => (
	<header className="row justify-content-space-between align-items-center">
		<div className="col">
			<Logo />
		</div>
		<div className="col grow-0">
			<div className="row justify-content-flex-end flex-nowrap nav">
				<div className="col ta-center">
					<a className="page-link" href='#advantages'>
						Преимущества
					</a>
				</div>
				<div className="col ta-center">
					<a className="page-link" href='#services'>
						Услуги
					</a>
				</div>
				<div className="col ta-center">
					<a className="page-link" href='#prices'>
						Стоимость
					</a>
				</div>
				<div className='col'>
					<ThemeButton />
				</div>
			</div>
		</div>
	</header>
)
