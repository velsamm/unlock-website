import React, { FC } from "react";
import { Typography } from "$components/typography/typography";
import { Block } from "$components/block/block";
import { Button } from "$components/button/button";
import { ImageWrapper } from "$components/image/image";
import telegramImage from '$assets/icons/telegram.svg';
import emailImage from '$assets/icons/email.svg';

export const ContactOptions: FC = () => {
	return (
		<Block>
			<div className='grid grid-rows-2 grid-cols-2 gap-10'>
				<div className='col-span-2 row-span-full flex items-center'>
					<Typography appearance='header'>
						Консультация специалистов
					</Typography>
				</div>

				<div className='md:col-span-1 col-span-2 row-span-1 text-center rounded-2xl bg-gray-100 py-10'>
					<Typography as='p' appearance='subheader'>
						В телеграме
					</Typography>
					<Typography as='p' className='mt-5 md:mb-2 mb-5'>
						Быстрая связь с нашими <br/>экспертами через мессенджер
					</Typography>
					<Button className='mx-auto flex gap-3'>
						<Typography appearance='button'>
							Получить консультацию
						</Typography>
						<ImageWrapper src={telegramImage} width={24} />
					</Button>
				</div>

				<div className='md:col-span-1 col-span-2 row-span-1 text-center rounded-2xl bg-gray-100 py-10'>
					<Typography as='p' appearance='subheader'>
						По электронной почте
					</Typography>
					<Typography as='p' className='mt-5 md:mb-2 mb-5'>
						Отправьте нам детали <br/>вашей ситуации для анализа
					</Typography>
					<Button className='mx-auto flex gap-3'>
						<Typography appearance='button'>
							Получить консультацию
						</Typography>
						<ImageWrapper src={emailImage} width={24} />
					</Button>
				</div>
			</div>
		</Block>
	)
}