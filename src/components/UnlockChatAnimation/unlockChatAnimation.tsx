'use client';

import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import cn from "classnames";
import Image from "next/image";
import operatorImg from '$assets/icons/svg/operator.svg';
import manImg from '$assets/icons/svg/man.svg';

type Props = PropsWithChildren & {
	type?: 'in' | 'out';
	showDelay?: number;
}

const ChatMessage: FC<Props> = ({ children, type, showDelay = 1000 }) => {
	const [show, setShow] = useState(false);

	const inStyles = type === 'in' && 'bg-gray-300 text-black';
	const outStyles = type === 'out' && 'bg-green-500 text-white ml-auto';
	const imageSrc = type === 'in' ? operatorImg : manImg;

	const startAnimation = () => {
		return setTimeout(() => {
			setShow(true);
		}, showDelay);
	}

	useEffect(() => {
		const timeoutId = startAnimation();
		let restartTimeoutId: NodeJS.Timeout;

		const restartIntervalId = setInterval(() => {
			setShow(false);
			clearTimeout(restartTimeoutId);
			restartTimeoutId = startAnimation();
		}, 5000)

		return () => {
			clearTimeout(timeoutId);
			clearTimeout(restartTimeoutId);
			clearInterval(restartIntervalId);
		}
	}, [])

	return (
		<div className='w-full flex py-2'>
			<div className={cn( 'box-border p-3 rounded-2xl transition-opacity', inStyles, outStyles, show ? 'opacity-100' : 'opacity-0' )}>
				<Image src={imageSrc} alt='op' width={24} />
				<span>{children}</span>
			</div>
		</div>
	)
}

const Chat: FC<PropsWithChildren> = ({ children }) => {
	return (
		<section className='bg-gray-100 rounded-2xl p-3 w-full max-w-screen-sm'>
			{children}
		</section>
	)
}

export const UnlockChatAnimation: FC = () => {
	return (
		<Chat>
			<ChatMessage type='in' showDelay={1000}>Ваш аккаунт заблокирован!</ChatMessage>
			<ChatMessage type='out' showDelay={1500}>Что мне делать?</ChatMessage>
			<ChatMessage type='in' showDelay={2000}>Обратитесь в BZ Pravo</ChatMessage>
		</Chat>
	)
}