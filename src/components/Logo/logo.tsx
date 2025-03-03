'use client';

import React, { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import LogoDarkImage from '$assets/icons/svg/logo-dark.svg'
import LogoLightImage from '$assets/icons/svg/logo-light.svg'
import { getCurrentTheme } from "$utils/getCurrentTheme";

export const Logo: FC = () => {
	const [src, setSrc] = useState();

	const updateTheme = useCallback(() => {
		const currentTheme = getCurrentTheme();

		setSrc(currentTheme === 'dark' ? LogoDarkImage : LogoLightImage);
	}, [])

	useEffect(() => {
		updateTheme();
	}, [updateTheme])

	useEffect(() => {
		const callback: MutationCallback = (mutationList) => {
			for (const mutation of mutationList) {
				if (mutation.type === "attributes" && mutation.attributeName === 'data-theme') {
					console.log(`The ${mutation.attributeName} attribute was modified.`);
					updateTheme();
				}
			}
		};
		const observer = new MutationObserver(callback);
		const config = { attributes: true, childList: true, subtree: true };
		const node = document.querySelector('html');
		observer.observe(node!, config);

		return () => {
			observer.disconnect();
		}
	}, [])

	return (
		<div>
			{
				src && (
					<Image width={128} src={src} alt="logo"/>
				)
			}
		</div>
	)
}
