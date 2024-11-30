import notesPic from '$assets/icons/svg/notes.svg'
import Image from "next/image";

export const UnlockBankAccounts = () => {
	return (
		<div className="row service-bank">
			<div className="col column help-left d-flex">
				<h2 className="help-subtitle">
					С разблокировкой банковских счетов физических лиц:
				</h2>
				<div className="d-flex justify-content-flex-end align-items-center notes">
					<Image src={notesPic} alt="notesPic" />
				</div>
			</div>
			<div className="col">
				<ul>
					<li>
						<div className="row">
							<div className="col d-flex justify-content-center align-items-center grow-0">
								<div className="circle" />
							</div>
							<div className="col d-flex justify-content-center align-items-center grow-1">
								<div className="service-item">
									<span>сбор и анализ пакета документов для разблокировки банковского счета</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="row">
							<div className="col d-flex justify-content-center align-items-center grow-0">
								<div className="circle" />
							</div>
							<div className="col d-flex justify-content-center align-items-center grow-1">
								<div className="service-item">
									<span>составление пояснения/досудебной претензии в адрес Банка</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="row">
							<div className="col d-flex justify-content-center align-items-center grow-0">
								<div className="circle" />
							</div>
							<div className="col d-flex justify-content-center align-items-center grow-1">
								<div className="service-item">
									<span>помощь в переговорах с Банком</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="row">
							<div className="col d-flex justify-content-center align-items-center grow-0">
								<div className="circle" />
							</div>
							<div className="col d-flex justify-content-center align-items-center grow-1">
								<div className="service-item">
									<span>индивидуальные консультации</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="row">
							<div className="col d-flex justify-content-center align-items-center grow-0">
								<div className="circle" />
							</div>
							<div className="col d-flex justify-content-center align-items-center grow-1">
								<div className="service-item">
									<span>правовое обоснование деятельности с криптовалютой</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="row">
							<div className="col d-flex justify-content-center align-items-center grow-0">
								<div className="circle" />
							</div>
							<div className="col d-flex justify-content-center align-items-center grow-1">
								<div className="service-item">
									<span>подготовка документов для осуществления деятельности с криптовалютой</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="row">
							<div className="col d-flex justify-content-center align-items-center grow-0">
								<div className="circle" />
							</div>
							<div className="col d-flex justify-content-center align-items-center grow-1">
								<div className="service-item">
									<span>судебное урегулирование спора</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}
