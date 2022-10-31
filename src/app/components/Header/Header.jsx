import Logo from 'src/assets/icons/svg/logo.svg'

export const Header = () => (
    <header className="row justify-content-space-between align-items-center">
        <div className="col">
            <img src={String(Logo)} alt="logo" />
        </div>
        <div className="col grow-0">
            <div className="row justify-content-flex-end flex-nowrap nav">
                <div className="col ta-center">
                    <a className="page-link" href="#advantages">
                        Преимущества
                    </a>
                </div>
                <div className="col ta-center">
                    <a className="page-link" href="#services">
                        Услуги
                    </a>
                </div>
                <div className="col ta-center">
                    <a className="page-link" href="#price">
                        Стоимость
                    </a>
                </div>
            </div>
        </div>
    </header>
)
