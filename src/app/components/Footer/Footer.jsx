import Logo from 'src/assets/icons/svg/logo.svg'

export const Footer = () => {
    return (
        <footer>
            <div className="row about">
                <div className="col grow-2">
                    <img src={String(Logo)} alt="logo" />
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
            </div>
            <div className="row justify-content-flex-end align-items-center design-author-block">
                <span>Разработка дизайна сайта:</span>
                <a href="https://yafawn.com">yafawn design ↗</a>
            </div>
        </footer>
    )
}
