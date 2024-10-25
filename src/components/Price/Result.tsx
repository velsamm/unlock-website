import clockPic from '$assets/icons/svg/clocks.svg'
import checkPic from '$assets/icons/svg/check.svg'
import Image from "next/image";

export const Result = () => {
    return (
        <div className="result-container">
            <div className="result-item grow-1">
                <div className="clocks-icon">
                    <Image src={clockPic} alt="clocksPic" />
                </div>
                <div className="num">
                    <span>От 5 до 30 дней</span>
                </div>
                <div className="title">
                    <span>Сроки оказания услуг</span>
                </div>
            </div>
            <div className="result-item grow-2">
                <div className="check-icon">
                    <Image src={checkPic} alt="checkPic" />
                </div>
                <div className="num">
                    <span>Платите за результат</span>
                </div>
                <div className="title">
                    <span>
                        В случае отказа в разблокировке аккаунта мы вернем
                        оплату за услуги в 100% размере
                    </span>
                </div>
            </div>
        </div>
    )
}
