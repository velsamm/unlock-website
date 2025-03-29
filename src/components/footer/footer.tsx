import React, { FC } from "react";
import { Logo } from "$components/logo/logo";
import { Block } from "$components/block/block";
import { Typography } from "$components/typography/typography";
import { ImageWrapper } from "$components/image/image";
import { socials } from "$components/footer/socials";
import { Divider } from "$components/divider/divider";

export const Footer: FC = () => {
	return (
		<footer className='pb-12'>
			<Divider className='mb-16 mt-20' />

			<Block>
				<section className='grid grid-cols-2 grid-rows-3 gap-5'>
					<div className='col-span-2 row-span-full'>
						<Logo/>
					</div>

					<div className='md:col-span-1 col-span-2 row-span-1'>
						<ul className='flex gap-5'>
							{
								socials.map((social) => (
									<li key={social.url} className="mb-3">
										<a href={social.url} target='_blank' rel='noreferrer noopener'>
											<ImageWrapper src={social.imgSrc} width={24}/>
										</a>
									</li>
								))
							}
						</ul>
					</div>

					<div className='md:col-span-1 col-span-2 flex justify-end'>
						<ul>
							<li className="mb-3">
								<Typography appearance='small'>Пользовательское соглашение</Typography>
							</li>
							<li className="mb-6">
								<Typography appearance='small'>Политика конфиденциальности</Typography>
							</li>
							<li className="mb-3">
								<Typography appearance='small'><b>Индивидуальный предприниматель</b> Новикова Кристина
									Игоревна</Typography>
							</li>
							<li className="mb-3">
								<Typography appearance='small'><b>ОГРНИП: </b>324237500338592, <b>ИНН: </b>615528000201</Typography>
							</li>
						</ul>
					</div>
				</section>
			</Block>
		</footer>
	)
}