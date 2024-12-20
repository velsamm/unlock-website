import notesPic from '$assets/icons/svg/notes.svg'
import Image from "next/image";

const services = [
	'сбор и анализ пакета документов для разблокировки банковского счета',
	'составление пояснения/досудебной претензии в адрес Банка',
	'помощь в переговорах с Банком',
	'индивидуальные консультации',
	'правовое обоснование деятельности с криптовалютой',
	'подготовка документов для осуществления деятельности с криптовалютой',
	'судебное урегулирование спора',
]

export const UnlockBankAccounts = () => {
	return (
		<div className="flex service-market">
			<div className="grow pr-36 flex flex-col">
				<h2 className="text-4xl leading-8">
					С разблокировкой банковских счетов физических лиц:
				</h2>
				<div className="flex-1 flex justify-center items-center">
					<Image src={notesPic} alt="notesPic"/>
				</div>
			</div>
			<div className="col">
				<ul>
					{
						services.map((service, index) => (
							<li key={index}>
								<div className="flex gap-3 items-start">
									<div className="mt-2">
										<div className="circle"/>
									</div>
									<div className="text-xl">
										<p>{service}</p>
									</div>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}
