import KeyPic from 'src/assets/icons/svg/Key.svg'
import HandShakePic from 'src/assets/icons/svg/HandShake.svg'
import LinesDotsPic from 'src/assets/icons/svg/LinesDots.svg'

export const HelpWith = () => {
    return (
        <div className="row help-with-container">
            <div className="col help-with">
                <div className="row column">
                    <div className="title">
                        <img src={String(KeyPic)} alt="keyPic" />
                    </div>
                    <span>
                        Понимание внутренней работы криптовалютного и
                        банковского секторов
                    </span>
                </div>
            </div>
            <div className="col help-with">
                <div className="row column">
                    <div className="title">
                        <img src={String(HandShakePic)} alt="HandShakePic" />
                    </div>
                    <span>
                        Индивидуальный подход и консультирование клиентов 24/7
                    </span>
                </div>
            </div>
            <div className="col help-with">
                <div className="row column">
                    <div className="title">
                        <img src={String(LinesDotsPic)} alt="LinesDotsPic" />
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
