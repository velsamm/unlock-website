import PurplePersonPic from 'src/assets/icons/svg/PurplePerson.svg'
import OrangePersonPic from 'src/assets/icons/svg/OrangePerson.svg'

export const WhoWorks = () => {
    return (
        <div className="row who-work-container align-items-center relative">
            <div className="col who-work-images">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col image-purple-person row justify-content-flex-end">
                        <img src={String(PurplePersonPic)} alt="purplePerson" />
                    </div>
                    <div className="col image-orange-person">
                        <img src={String(OrangePersonPic)} alt="orangePerson" />
                    </div>
                </div>
            </div>
            <div className="col who-work-text">
                <span>
                    В штате Unlock работают профессиональные юристы с опытом
                    работы более 10 лет в областях KYC/AML, Fintech и банковской
                    сферы
                </span>
            </div>
        </div>
    )
}
