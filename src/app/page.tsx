import Image from "next/image";
import { Fragment } from "react";
import { Header } from "$components/Header/Header";
import { WhoWorks } from "$components/WhoWorks/WhoWorks";
import { HelpWith } from "$components/HelpWith/HelpWith";
import { UnlockServices } from "$components/Services";
import { HowWeWork } from "$components/HowWeWork/HowWeWork";
import { Price } from "$components/Price";
import { TG } from "$components/TG/TG";
import { ContactForm } from "$components/ContactForm/ContactForm";
import { Footer } from "$components/Footer/Footer";
import manOnPcPic from '$assets/icons/svg/ManOnPC.svg'

export default function Home() {
  return (
    <section className='app'>
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
            <a className="btn-a" href='#contact-form'>
              Оставить заявку на сайте
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
            <Image src={manOnPcPic} alt='manOnPcPic'/>
          </div>
        </div>

        <div className="services" id='advantages'/>
        <WhoWorks/>
        <HelpWith/>

        <div className="services" id='services'/>

        <UnlockServices/>
        <HowWeWork/>

        <div id='prices' />
        <Price/>

        <TG/>

        <div id='contact-form' />
        <ContactForm/>
        <Footer/>
      </main>
    </section>
  )
}
