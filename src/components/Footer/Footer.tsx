import { Logo } from "$components/Logo/logo";

export const Footer = () => {
    return (
        <footer className="row about">
            <div className="col grow-2">
                <Logo />
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
