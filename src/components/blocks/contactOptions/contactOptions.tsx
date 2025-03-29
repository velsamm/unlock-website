import React, { FC } from "react";
import { Typography } from "$components/typography/typography";
import { Block } from "$components/block/block";
import { TelegramButton } from "$components/buttons/TelegramButton";
import { MailButton } from "$components/buttons/MailButton";

export const ContactOptions: FC = () => {
	return (
		<Block>
			<div id='contact-options' className='grid grid-rows-2 grid-cols-2 gap-10'>
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
					<TelegramButton />
				</div>

				<div className='md:col-span-1 col-span-2 row-span-1 text-center rounded-2xl bg-gray-100 py-10'>
					<Typography as='p' appearance='subheader'>
						По электронной почте
					</Typography>
					<Typography as='p' className='mt-5 md:mb-2 mb-5'>
						Отправьте нам детали <br/>вашей ситуации для анализа
					</Typography>
					<MailButton />
				</div>
			</div>
		</Block>
	)
}