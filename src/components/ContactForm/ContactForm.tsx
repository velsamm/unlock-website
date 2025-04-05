'use client';

import React from "react";
import { EMAIL_LINK, TELEGRAM_LINK } from "$utils/constants";
import { Typography } from "$components/typography/typography";

const navigate = (url: string, target = '_blank') => {
  window.open(url, target)
}

export const ContactForm = () => {
  const handleTelegramClick = () => {
    navigate(TELEGRAM_LINK);
  }

  const handleEmailClick = () => {
    navigate(EMAIL_LINK);
  }

  return (
    <section className='my-auto mt-8 md:m-0'>
      <Typography as='h2' appearance='subheader' className='text-center'>
        Получить консультацию
      </Typography>
      <button className="btn my-5" onClick={handleTelegramClick}>В телеграме</button>
      <button className="btn" onClick={handleEmailClick}>По эл. почте</button>
    </section>
  )
}
