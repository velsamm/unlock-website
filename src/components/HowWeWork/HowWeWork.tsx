import Image from "next/image";
import starPic from '$assets/icons/svg/star.svg'
import star2Pic from '$assets/icons/svg/star-2.svg'

export const HowWeWork = () => {
    return (
        <>
            <div className="mt-20 mb-10 text-6xl">
                <span>Как мы работаем:</span>
            </div>
            <div className="flex gap-5">
                <div className="flex-1 p-6 mb-10 how-we-work-item">
                    <div className="flex flex-col relative">
                        <div className="star">
                            <Image src={starPic} alt='starPic' />
                        </div>
                        <div className="flex flex-col text-3xl leading-9">
                            <span className="text-8xl font-medium leading-[117px] mb-6">1</span>
                            <span className="text-3xl leading-9 mb-4">Сбор документов</span>
                        </div>
                        <span className="text-lg">
                            Вы передаете нам всю необходимую информацию по делу:
                            договоры, переписки с банком/биржей, документы,
                            которые могут послужить основанием для
                            разблокирования счета/крипто-аккаунта
                        </span>
                    </div>
                </div>
                <div className="flex-1 p-6 mb-10 how-we-work-item">
                    <div className="flex flex-col relative">
                        <div className="flex flex-col text-3xl leading-9">
                            <span className="text-8xl font-medium leading-[117px] mb-6">2</span>
                            <span className="text-3xl leading-9 mb-4">Анализ ситуации</span>
                        </div>
                        <span className="text-lg">
                            После заключения договора с вами наши эксперты
                            тщательно и оперативно изучают обстоятельства дела,
                            оценивают перспективы и подробно рассказывают вам о
                            дальнейших действиях
                        </span>
                    </div>
                </div>
                <div className="flex-1 p-6 mb-10 how-we-work-item">
                    <div className="flex flex-col relative">
                        <div className="star-2">
                            <Image src={star2Pic} alt='star2Pic' />
                        </div>
                        <div className="flex flex-col text-3xl leading-9">
                            <span className="text-8xl font-medium leading-[117px] mb-6">3</span>
                            <span className="text-3xl leading-9 mb-4">Переговоры с сервисом</span>
                        </div>
                        <span className="text-lg">
                            Мы подготавливаем все необходимые документы,
                            помогаем в коммуникации с банком/сервисом и
                            контролируем ситуацию до снятия ограничений с ваших
                            средств
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
