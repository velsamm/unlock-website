import KeyPic from '$assets/icons/svg/Key.svg'
import HandShakePic from '$assets/icons/svg/HandShake.svg'
import LinesDotsPic from '$assets/icons/svg/LinesDots.svg'
import Image from "next/image";

export const HelpWith = () => {
    return (
        <div className="flex gap-5 mt-5">
            <div className="help-with p-12">
                <div className="flex flex-col">
                    <div className="mb-12">
                        <Image src={KeyPic} alt="keyPic" />
                    </div>
                    <span>
                        Понимание внутренней работы криптовалютного и
                        банковского секторов
                    </span>
                </div>
            </div>
            <div className="p-12 help-with">
                <div className="flex flex-col">
                    <div className="mb-12">
                        <Image src={HandShakePic} alt="HandShakePic" />
                    </div>
                    <span>
                        Индивидуальный подход и консультирование клиентов 24/7
                    </span>
                </div>
            </div>
            <div className="p-12 help-with">
                <div className="flex flex-col">
                    <div className="mb-12">
                        <Image src={LinesDotsPic} alt="LinesDotsPic" />
                    </div>
                    <span>
                        Нетривиальные подходы к решению вопросов в кратчайшие
                        сроки
                    </span>
                </div>
            </div>
        </div>
    )
}
