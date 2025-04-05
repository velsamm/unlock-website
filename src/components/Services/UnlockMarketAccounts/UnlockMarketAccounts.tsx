import CoinsPic from '$assets/icons/svg/coins.svg'
import Image from "next/image";

const services = [
	'анализ ситуации',
	'помощь в переговорах с технической службой поддержки',
	'помощь в сборе документов, подтверждающих законность операции с криптовалютой',
	'помощь в составлении пояснения для AML-офицера',
]

export const UnlockMarketAccounts = () => {
	return (
		<div className="flex service-market">
			<div className="grow pr-36 flex flex-col">
				<h2 className="text-4xl leading-8">
					С разблокировкой аккаунтов на криптовалютных биржах и
					онлайн-сервисах:
				</h2>
				<div className="flex-1 flex justify-center items-center">
					<Image src={CoinsPic} alt="coinsPic" />
				</div>
			</div>
			<div className="grow">
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
