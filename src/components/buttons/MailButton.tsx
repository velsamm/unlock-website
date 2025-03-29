'use client';

import React from "react";
import { Typography } from "$components/typography/typography";
import { ImageWrapper } from "$components/image/image";
import { Button } from "$components/button/button";
import { EMAIL_LINK } from "$app/constants";
import emailImage from "$assets/icons/email.svg";

export const MailButton = () => {
	return (
		<Button className='mx-auto flex gap-3' onClick={() => { window.open(EMAIL_LINK, '_blank') }}>
			<Typography appearance='button'>
				Получить консультацию
			</Typography>
			<ImageWrapper src={emailImage} width={24} />
		</Button>
	)
}