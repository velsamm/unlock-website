import Image from "next/image";
import starPic from '$assets/icons/svg/star.svg'
import star2Pic from '$assets/icons/svg/star-2.svg'

export const HowWeWork = () => {
    return (
        <>
            <div className="how-we-work">
                <span>Как мы работаем:</span>
            </div>
            <div className="row how-we-work-container">
                <div className="col how-we-work-item">
                    <div className="row column relative">
                        <div className="star">
                            <Image src={starPic} alt='starPic' />
                        </div>
                        <div className="header">
                            <span className="num">1</span>
                            <span className="title">Сбор документов</span>
                        </div>
                        <span className="content">
                            Вы передаете нам всю необходимую информацию по делу:
                            договоры, переписки с банком/биржей, документы,
                            которые могут послужить основанием для
                            разблокирования счета/крипто-аккаунта
                        </span>
                    </div>
                </div>
                <div className="col how-we-work-item">
                    <div className="row column">
                        <div className="header">
                            <span className="num">2</span>
                            <span className="title">Анализ ситуации</span>
                        </div>
                        <span className="content">
                            После заключения договора с вами наши эксперты
                            тщательно и оперативно изучают обстоятельства дела,
                            оценивают перспективы и подробно рассказывают вам о
                            дальнейших действиях
                        </span>
                    </div>
                </div>
                <div className="col how-we-work-item">
                    <div className="row column relative">
                        <div className="star-2">
                            <Image src={star2Pic} alt='star2Pic' />
                        </div>
                        <div className="header">
                            <span className="num">3</span>
                            <span className="title">Переговоры с сервисом</span>
                        </div>
                        <span className="content">
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
