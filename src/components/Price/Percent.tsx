import percentPic from '$assets/icons/svg/percent.svg'
import Image from "next/image";

export const Percent = () => {
    return (
        <div className="flex gap-12 flex-col md:flex-row">
            <div className="mb-16 p-6 relative percent-item grow">
                <div className="icon">
                    <Image src={percentPic} alt="percPic" />
                </div>
                <div className="text-5xl md:text-8xl font-medium leading-[117px] mb-6">
                    <span>5-10%*</span>
                </div>
                <div className="text-3xl leading-9 mb-4">
                    <span>
                        Разблокировка аккаунтов на криптовалютных биржах и
                        онлайн-сервисах
                    </span>
                </div>
                <div className="text-md leading-9 mb-4">
                    <span>
                        *от заблокированной суммы на аккаунте в зависимости от
                        сложности работ
                    </span>
                </div>
            </div>
            <div className="percent-item p-6 grow">
                <div className="text-5xl md:text-8xl font-medium leading-[117px] mb-6">
                    <span>от $70</span>
                </div>
                <div>
                    <span>Разблокировка банковских счетов</span>
                </div>
            </div>
        </div>
    )
}
