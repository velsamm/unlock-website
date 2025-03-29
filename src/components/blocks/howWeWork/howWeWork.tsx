import React, { FC } from "react";
import { Block } from "$components/block/block";
import { ImageWrapper } from "$components/image/image";
import howWeWorkImage from '$assets/icons/how_we_work.jpg'
import { Typography } from "$components/typography/typography";

export const HowWeWork: FC = () => {
	return (
		<Block className='mt-40'>
			<div className='grid grid-rows-4 grid-cols-2 gap-10'>
				<div className='md:col-span-1 col-span-2 row-span-4'>
					<ImageWrapper src={howWeWorkImage} />
				</div>

				<div className='md:col-span-1 col-span-2 row-span-1'>
					<Typography appearance='header'>
						Процесс разблокировки
					</Typography>
				</div>

				<div className='mt-auto mb-4 md:col-span-1 col-span-2 row-span-3'>
					<div className='mb-8'>
						<Typography as='p' appearance='subheader'>
							Документация
						</Typography>
						<Typography as='p' className='mt-2'>
							Сбор и подготовка всех необходимых документов для представления вашего дела
						</Typography>
					</div>

					<div className='mb-8'>
						<Typography as='p' appearance='subheader'>
							Экспертиза
						</Typography>
						<Typography as='p' className='mt-2'>
							Профессиональный анализ ситуации и разработка стратегии
						</Typography>
					</div>

					<div className='mb-8'>
						<Typography as='p' appearance='subheader'>
							Коммуникация
						</Typography>
						<Typography as='p' className='mt-2'>
							Эффективное взаимодействие с банком или криптобиржей для разрешения ситуации
						</Typography>
					</div>

					<div>
						<Typography as='p' appearance='subheader'>
							Разблокировка
						</Typography>
						<Typography as='p' className='mt-2'>
							Восстановление доступа к вашим финансовым средствам
						</Typography>
					</div>
				</div>
			</div>
		</Block>
	)
}