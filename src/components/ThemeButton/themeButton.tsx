'use client';

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import ThemeLightImg from "$assets/icons/svg/theme-light.svg";
import ThemeDarkImg from "$assets/icons/svg/theme-dark.svg";
import { getCurrentTheme } from "$utils/getCurrentTheme";
import { setStorageTheme } from "$utils/storageScheme";
import { setDocumentTheme } from "$utils/setDocumentTheme";

// temporary disabled
export const ThemeButton: FC = () => {
	const [src, setSrc] = useState();

	useEffect(() => {
		const currentTheme = getCurrentTheme();
		if (currentTheme === 'dark') {
			return setSrc(ThemeDarkImg);
		}

		return setSrc(ThemeLightImg);
	}, [])

	const handleClick = () => {
		const currentTheme = getCurrentTheme();

		if (currentTheme === 'dark') {
			setDocumentTheme('light');
			setStorageTheme('light');
			setSrc(ThemeLightImg);
		} else {
			setDocumentTheme('dark');
			setStorageTheme('dark');
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