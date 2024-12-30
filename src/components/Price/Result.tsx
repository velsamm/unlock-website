import clockPic from '$assets/icons/svg/clocks.svg'
import checkPic from '$assets/icons/svg/check.svg'
import Image from "next/image";

export const Result = () => {
    return (
        <div className="flex gap-12">
            <div className="result-item mb-16 p-6 relative grow">
                <div className="clocks-icon">
                    <Image src={clockPic} alt="clocksPic" />
                </div>
                <div className="text-8xl font-medium leading-[117px] mb-6">
                    <span>От 5 до 30 дней</span>
                </div>
                <div className="text-3xl leading-9 mb-4">
                    <span>Сроки оказания услуг</span>
                </div>
            </div>
            <div className="result-item mb-16 p-6 relative grow">
                <div className="check-icon">
                    <Image src={checkPic} alt="checkPic" />
                </div>
                <div className="text-8xl font-medium leading-[117px] mb-6">
                    <span>Платите за результат</span>
                </div>
                <div className="text-3xl leading-9 mb-4">
                    <span>
                        В случае отказа в разблокировке аккаунта мы вернем
                        оплату за услуги в 100% размере
                    </span>
                </div>
            </div>
        </div>
    )
}
