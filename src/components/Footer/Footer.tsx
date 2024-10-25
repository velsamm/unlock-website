import Logo from '$assets/icons/svg/logo.svg'
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="row about">
            <div className="col grow-2">
                <Image src={Logo} alt="logo" />
            </div>
            <div className="col">
                <ul>
                    <li>Преимущества</li>
                    <li>Услуги</li>
                    <li>Стоимость</li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li>Пользовательское соглашение</li>
                    <li>Политика конфиденциальности</li>
                </ul>
            </div>
        </footer>
    )
}
