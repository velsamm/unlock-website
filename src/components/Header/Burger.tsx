'use client';

import React, { FC, PropsWithChildren, useRef } from "react";
import HamburgerSrc from '$assets/icons/svg/hamburger-menu.svg'
import Image from "next/image";
import useWindowDimensions from "$hooks/useWindowDimensions";
import { useOnClickOutside } from "$hooks/useOnClickOutside";

export const Burger: FC<PropsWithChildren> = ({ children }) => {
	const ref = useRef<HTMLDivElement>(null);
	const { width = 0 } = useWindowDimensions();
	const [isOpen, setIsOpen] = React.useState(false);

	const isMobile = width < 768;
	// const isTab = !isMobile && width < 1366;

	const closeBurger = () => {
		setTimeout(() => {
			setIsOpen(false);
		}, 100);
	}

	const handleClickOutside = () => {
		closeBurger();
	}

	useOnClickOutside(ref, handleClickOutside);

	if (!width) {
		return null;
	}

	if (!isMobile) {
		return children;
	}

	return (
		<div ref={ref} className='relative'>
			<button onClick={() => setIsOpen(() => !isOpen)}>
				<Image width={32} src={HamburgerSrc} alt='/' />
			</button>
			{
				isOpen && (
					<div className='absolute right-0 min-w-60 burger' onClick={closeBurger}>
						<div className='flex flex-col gap-6 py-4 px-6'>
							{children}
						</div>
					</div>
				)
			}
		</div>
	)
}