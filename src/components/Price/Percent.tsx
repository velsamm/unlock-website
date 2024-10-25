import percentPic from '$assets/icons/svg/percent.svg'
import Image from "next/image";

export const Percent = () => {
    return (
        <div className="percent-container">
            <div className="percent-item grow-2">
                <div className="icon">
                    <Image src={percentPic} alt="percPic" />
                </div>
                <div className="num">
                    <span>5-10%*</span>
                </div>
                <div className="title">
                    <span>
                        Разблокировка аккаунтов на криптовалютных биржах и
                        онлайн-сервисах
                    </span>
                </div>
                <div className="subtitle">
                    <span>
                        *от заблокированной суммы на аккаунте в зависимости от
                        сложности работ
                    </span>
                </div>
            </div>
            <div className="percent-item grow-1">
                <div className="num">
                    <span>от $70</span>
                </div>
                <div>
                    <span>Разблокировка банковских счетов</span>
                </div>
            </div>
        </div>
    )
}
