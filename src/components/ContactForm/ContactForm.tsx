'use client';

import React from "react";
import { EMAIL_LINK, TELEGRAM_LINK } from "$utils/constants";

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
      <h2 className='text-2xl md:text-5xl text-center'>
        Получить консультацию
      </h2>
      <button className="btn my-5" onClick={handleTelegramClick}>В телеграме</button>
      <button className="btn" onClick={handleEmailClick}>По эл. почте</button>
    </section>
  )
}
