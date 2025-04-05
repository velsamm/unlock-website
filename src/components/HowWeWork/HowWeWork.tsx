import React from 'react'
import { Typography } from "$components/typography/typography";

export const HowWeWork = () => {
  return (
    <>
      <div className="mt-20 mb-10 text-2xl md:text-6xl">
        <Typography as='p' appearance='header'>Как мы работаем:</Typography>
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex-1 p-6 mb-10 how-we-work-item">
          <div className="flex flex-col">
            <div className="flex flex-col text-3xl leading-9">
              <span className="text-5xl md:text-8xl font-medium md:leading-[117px] mb-6">
                1
              </span>
              <Typography appearance='subheader' className="leading-9 md:font-normal font-semibold mb-4">Сбор документов</Typography>
            </div>
            <Typography appearance='regular' as='span'>
              Вы передаете нам всю необходимую информацию по делу: договоры,
              переписки с банком/биржей, документы, которые могут послужить
              основанием для разблокирования счета/крипто-аккаунта
            </Typography>
          </div>
        </div>
        <div className="flex-1 p-6 mb-10 how-we-work-item">
          <div className="flex flex-col relative">
            <div className="flex flex-col text-3xl leading-9">
              <span className="text-5xl md:text-8xl font-medium md:leading-[117px] mb-6">
                2
              </span>
              <Typography appearance='subheader' className="leading-9 md:font-normal font-semibold mb-4">Анализ ситуации</Typography>
            </div>
            <Typography appearance='regular' as='span'>
              После заключения договора с вами наши эксперты тщательно и
              оперативно изучают обстоятельства дела, оценивают перспективы и
              подробно рассказывают вам о дальнейших действиях
            </Typography>
          </div>
        </div>
        <div className="flex-1 p-6 mb-10 how-we-work-item">
          <div className="flex flex-col">
            <div className="flex flex-col text-3xl leading-9">
              <span className="text-5xl md:text-8xl font-medium md:leading-[117px] mb-6">
                3
              </span>
              <Typography appearance='subheader' className="leading-9 md:font-normal font-semibold mb-4">
                Переговоры с сервисом
              </Typography>
            </div>
            <Typography appearance='regular' as='span'>
              Мы подготавливаем все необходимые документы, помогаем в
              коммуникации с банком/сервисом и контролируем ситуацию до снятия
              ограничений с ваших средств
            </Typography>
          </div>
        </div>
      </div>
    </>
  )
}
