import PurplePersonPic from '$assets/icons/svg/PurplePerson.svg'
import OrangePersonPic from '$assets/icons/svg/OrangePerson.svg'
import Image from "next/image";

export const WhoWorks = () => {
    return (
        <div className="flex who-work-container items-center relative p-12">
            <div className="w-72 max-w-72">
                <div className="flex justify-center items-center h-full">
                    <div className="image-purple-person flex justify-end">
                        <Image src={PurplePersonPic} alt="purplePerson" />
                    </div>
                    <div className="image-orange-person">
                        <Image src={OrangePersonPic} alt="orangePerson" />
                    </div>
                </div>
            </div>
            <div className="text-3xl leading-10 p-5">
                <span>
                    В штате BZ Pravo работают профессиональные юристы с опытом
                    работы более 10 лет в областях KYC/AML, Fintech и банковской
                    сферы
                </span>
            </div>
        </div>
    )
}
