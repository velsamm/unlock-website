import CoinsPic from '$assets/icons/svg/coins.svg'
import Image from "next/image";

export const UnlockMarketAccounts = () => {
    return (
        <div className="row service-market">
            <div className="col column help-left">
                <h2 className="help-subtitle">
                    С разблокировкой аккаунтов на криптовалютных биржах и
                    онлайн-сервисах:
                </h2>
                <div className="d-flex justify-content-flex-end align-items-center">
                    <div className="coins">
                        <Image src={CoinsPic} alt="coinsPic" />
                    </div>
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
                                    <span>анализ ситуации</span>
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
                                    <span>
                                        помощь в переговорах с технической
                                        службой поддержки
                                    </span>
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
                                    <span>
                                        помощь в сборе документов,
                                        подтверждающих законность операции с
                                        криптовалютой
                                    </span>
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
                                    <span>
                                        помощь в составлении пояснения для
                                        AML-офицера
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
