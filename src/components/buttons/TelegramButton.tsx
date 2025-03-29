'use client';

import React from "react";
import { Typography } from "$components/typography/typography";
import { ImageWrapper } from "$components/image/image";
import { Button } from "$components/button/button";
import { TELEGRAM_LINK } from "$app/constants";
import telegramImage from "$assets/icons/telegram.svg";

export const TelegramButton = () => {
	return (
		<Button className='mx-auto flex gap-3' onClick={() => { window.open(TELEGRAM_LINK, '_blank') }}>
			<Typography appearance='button'>
				Получить консультацию
			</Typography>
			<ImageWrapper src={telegramImage} width={24} />
		</Button>
	)
}