import Image from "next/image";
import { WhoWorks } from "$components/WhoWorks/WhoWorks";
import { HelpWith } from "$components/HelpWith/HelpWith";
import { HowWeWork } from "$components/HowWeWork/HowWeWork";
import { ContactForm } from "$components/ContactForm/ContactForm";
import manOnPcPic from '$assets/icons/svg/ManOnPC.svg'
import { UnlockChatAnimation } from "$components/UnlockChatAnimation/unlockChatAnimation";

export default function Home() {
  return (
    <main>
      <section className="pt-0 cta flex flex-col justify-evenly pb-36">
        <div>
          <h1 className="text-2xl md:text-6xl">
            Разблокируем доступ к средствам на криптовалютных биржах
            и банковских счетах
          </h1>
        </div>
        <div className="flex justify-between flex-col-reverse md:flex-row items-center gap-0 md:gap-5">
          <ContactForm/>
          <UnlockChatAnimation />
          {/*<div className="image-man-on-pc">*/}
          {/*  <Image src={manOnPcPic} alt='manOnPcPic'/>*/}
          {/*</div>*/}
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
