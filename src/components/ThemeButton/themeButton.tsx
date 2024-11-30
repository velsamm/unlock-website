'use client';

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import ThemeLightImg from "$assets/icons/svg/theme-light.svg";
import ThemeDarkImg from "$assets/icons/svg/theme-dark.svg";
import { getCurrentScheme } from "$utils/getCurrentScheme";

export const ThemeButton: FC = () => {
	const [src, setSrc] = useState();

	useEffect(() => {
		const currentTheme = getCurrentScheme();
		if (currentTheme === 'dark') {
			return setSrc(ThemeDarkImg);
		}

		return setSrc(ThemeLightImg);
	}, [])

	const handleClick = () => {
		const currentTheme = getCurrentScheme();

		if (currentTheme === 'dark') {
			document
				.getElementsByTagName('html')[0]
				.setAttribute('data-theme', 'light');
			setSrc(ThemeLightImg);
		} else {
			document
				.getElementsByTagName('html')[0]
				.setAttribute('data-theme', 'dark');
			setSrc(ThemeDarkImg);
		}
	}

	return (
		<button onClick={handleClick} className='btn-transparent btn-theme'>
			{
				src && (
					<Image src={src} alt='thm' style={{ width: '100%', height: '100%' }}  />
				)
			}
		</button>
	)
}