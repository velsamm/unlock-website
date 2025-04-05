import { WhoWorks } from "$components/WhoWorks/WhoWorks";
import { HelpWith } from "$components/HelpWith/HelpWith";
import { HowWeWork } from "$components/HowWeWork/HowWeWork";
import { ContactForm } from "$components/ContactForm/ContactForm";
import { UnlockChatAnimation } from "$components/UnlockChatAnimation/unlockChatAnimation";
import { Theme } from "$components/Theme/Theme";
import { Typography } from "$components/typography/typography";

export default function Home() {
  return (
    <main>
      <Theme />
      <section className="pt-0 cta flex flex-col justify-evenly">
        <div>
          <Typography as='h1' appearance='header'>
            Разблокируем доступ к средствам на криптовалютных биржах
            и банковских счетах
          </Typography>
        </div>
        <div className="flex justify-between flex-col-reverse md:flex-row items-center gap-0 md:gap-5">
          <ContactForm/>
          <UnlockChatAnimation />
        </div>
      </section>

      <div className="mt-20 md:m-0"/>
      <WhoWorks/>
      <HelpWith/>

      <div className="mt-20"/>
      <HowWeWork/>
    </main>
  )
}
