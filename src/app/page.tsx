import Image from "next/image";
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
            <ContactForm/>
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
        <Footer/>
      </main>
    </section>
  )
}
