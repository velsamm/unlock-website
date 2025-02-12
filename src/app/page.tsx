import Image from "next/image";
import { WhoWorks } from "$components/WhoWorks/WhoWorks";
import { HelpWith } from "$components/HelpWith/HelpWith";
import { HowWeWork } from "$components/HowWeWork/HowWeWork";
import { ContactForm } from "$components/ContactForm/ContactForm";
import manOnPcPic from '$assets/icons/svg/ManOnPC.svg'

export default function Home() {
  return (
    <main>
      <section className="pt-0 md:pt-32 cta flex flex-col justify-around">
        <div>
          <h1 className="text-2xl md:text-6xl">
            Разблокируем доступ к средствам на криптовалютных биржах
            и банковских счетах
          </h1>
        </div>
        <div className="flex justify-between flex-col-reverse md:flex-row items-center">
          <ContactForm/>
          <div className="image-man-on-pc">
            <Image src={manOnPcPic} alt='manOnPcPic'/>
          </div>
        </div>
      </section>

      <div className="mt-20"/>
      <WhoWorks/>
      <HelpWith/>

      <div className="mt-20"/>
      <HowWeWork/>
    </main>
  )
}
