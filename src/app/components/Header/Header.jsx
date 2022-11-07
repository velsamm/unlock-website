import Logo from 'src/assets/icons/svg/logo.svg'

export const Header = ({ scroller }) => (
    <header className="row justify-content-space-between align-items-center">
        <div className="col">
            <img src={String(Logo)} alt="logo" />
        </div>
        <div className="col grow-0">
            <div className="row justify-content-flex-end flex-nowrap nav">
                <div className="col ta-center">
                    <span className="page-link"  onClick={() => {
                        scroller.scrollToAdvantages()
                    }}>
                        Преимущества
                    </span>
                </div>
                <div className="col ta-center">
                    <span className="page-link" onClick={() => {
                        scroller.scrollToServices()
                    }}>
                        Услуги
                    </span>
                </div>
                <div className="col ta-center">
                    <span className="page-link" onClick={() => {
                        scroller.scrollToPrices()
                    }}>
                        Стоимость
                    </span>
                </div>
            </div>
        </div>
    </header>
)
