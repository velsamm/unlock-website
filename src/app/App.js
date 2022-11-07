import { useRef } from "react";
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
    const pricesRef = useRef(null)
    const advantagesRef = useRef(null)
    const servicesRef = useRef(null)
    const contactRef = useRef(null)

    const scrollToPrices = () => pricesRef?.current.scrollIntoView({ behavior: 'smooth' })
    const scrollToAdvantages = () => advantagesRef?.current.scrollIntoView({ behavior: 'smooth' })
    const scrollToServices = () => servicesRef?.current.scrollIntoView({ behavior: 'smooth' })
    const scrollToContactForm = () => contactRef?.current.scrollIntoView({ behavior: 'smooth' })

    const scroller = {
        scrollToPrices,
        scrollToAdvantages,
        scrollToServices
    }

    return (
        <>
            <Header scroller={scroller} />
            <main>
                <div className="landing">
                    <h1 className="title">
                        Разблокируем доступ к средствам на криптовалютных биржах
                        и банковских счетах
                    </h1>
                </div>
                <div className="title-action relative">
                    <div className="d-flex column gap-10">
                        <p className="btn-a" onClick={scrollToContactForm}>
                            Оставить заявку на сайте
                        </p>
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

                <div ref={advantagesRef} />
                <WhoWorks />
                <HelpWith />

                <div className="services" />

                <div ref={servicesRef} />
                <UnlockServices />

                <HowWeWork />

                <div ref={pricesRef} />
                <Price />

                <TG />

                <div ref={contactRef} />
                <ContactForm />

                <Footer />
            </main>
        </>
    )
}

export default App
