import manOnPcPic from 'src/assets/icons/svg/ManOnPC.svg'
import { WhoWorks } from 'src/app/components/WhoWorks/WhoWorks'
import { HelpWith } from 'src/app/components/HelpWith/HelpWith'
import { UnlockServices } from 'src/app/components/Services'
import { HowWeWork } from 'src/app/components/HowWeWork/HowWeWork'
import { Price } from 'src/app/components/Price'
import { TG } from 'src/app/components/TG/TG'
import { ContactForm } from 'src/app/components/ContactForm/ContactForm'
import { Header } from 'src/app/components/Header/Header'
import { Footer } from 'src/app/components/Footer/Footer'
import 'src/index.css'

function App() {
    return (
        <>
            <Header />
            <main>
                <div className="landing">
                    <h1 className="title">
                        Разблокируем доступ к средствам на криптовалютных биржах
                        и банковских счетах
                    </h1>
                </div>
                <div className="title-action relative">
                    <div className="d-flex column gap-10">
                        <a className="btn-a" href="#contact">
                            <span>Оставить заявку на сайте</span>
                        </a>
                        <a
                            className="btn-telegram"
                            href="https://t.me/un_lock_site"
                        >
                            Оставить заявку в Telegram
                        </a>
                        <a
                            className="btn-e-mail"
                            href="mailto:un-locksite@yandex.ru"
                        >
                            Оставить заявку по e-mail
                        </a>
                    </div>
                    <div className="image-man-on-pc">
                        <img src={String(manOnPcPic)} alt="" />
                    </div>
                </div>

                <WhoWorks />
                <HelpWith />

                <div className="services" />

                <UnlockServices />
                <HowWeWork />
                <Price />
                <TG />
                <ContactForm />

                <Footer />
            </main>
        </>
    )
}

export default App
