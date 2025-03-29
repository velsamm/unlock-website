import React, { FC } from "react";
import { Block } from "$components/block/block";
import { Typography } from "$components/typography/typography";
import { ImageWrapper } from "$components/image/image";
import hammerImg from '$assets/icons/hammer.svg';
import knowledgeImg from '$assets/icons/knowledge.svg';

export const Competence: FC = () => {
	return (
		<Block>
			<div className='grid grid-rows-2 grid-cols-2 gap-10 my-32'>
				<div className='row-span-full col-span-2'>
					<Typography appearance='header' as='p'>
						Наша экспертиза
					</Typography>
				</div>

				<div className='row-span-1 md:col-span-1 col-span-2'>
					<div className='flex gap-3'>
						<ImageWrapper src={hammerImg} width={32} />
						<Typography appearance='subheader' as='span'>
							Профессиональные юристы
						</Typography>
					</div>
					<Typography as='p' className='mt-7'>
						В штате BZ Pravo работают профессиональные юристы с опытом работы более 10 лет в областях KYC/AML,
						Fintech и банковской сферы
					</Typography>
				</div>

				<div className='row-span-1 md:col-span-1 col-span-2'>
					<div className='flex gap-3'>
						<ImageWrapper src={knowledgeImg} width={32} />
						<Typography appearance='subheader' as='span'>
							Глубокое понимание отрасли
						</Typography>
					</div>
					<Typography as='p' className='mt-7'>
						Понимание внутренней работы криптовалютного и банковского секторов
					</Typography>
				</div>
			</div>
		</Block>
	)
};
