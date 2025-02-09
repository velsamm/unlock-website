import Image from "next/image";
import { WhoWorks } from "$components/WhoWorks/WhoWorks";
import { HelpWith } from "$components/HelpWith/HelpWith";
// import { UnlockServices } from "$components/Services";
import { HowWeWork } from "$components/HowWeWork/HowWeWork";
import { Price } from "$components/Price";
// import { TG } from "$components/TG/TG";
import { ContactForm } from "$components/ContactForm/ContactForm";
import manOnPcPic from '$assets/icons/svg/ManOnPC.svg'

export default function Home() {
  return (
    <main>
      <div className="mt-8 md:mt-32">
        <h1 className="text-2xl md:text-6xl">
          Разблокируем доступ к средствам на криптовалютных биржах
          и банковских счетах
        </h1>
      </div>
      <div className="flex justify-between flex-col-reverse md:flex-row">
        <ContactForm/>
        <div className="image-man-on-pc">
          <Image src={manOnPcPic} alt='manOnPcPic'/>
        </div>
      </div>

      <div className="mt-20" />
      <WhoWorks/>
      <HelpWith/>

      <div className="mt-20" />

      {/*<UnlockServices/>*/}
      <HowWeWork/>

      <div id='prices' />
      <Price/>

      {/*<TG/>*/}
    </main>
  )
}
