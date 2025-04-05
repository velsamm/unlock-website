import React, { FC } from "react";
// import { UnlockMarketAccounts } from '$components/Services/UnlockMarketAccounts/UnlockMarketAccounts';
// import { UnlockBankAccounts } from '$components/Services/UnlockBankAccounts/UnlockBankAccounts';
import { ServiceListComponent } from "$components/Services/serviceListComponent";
import { cryptoServiceList, individualsServiceList, legalEntitiesServiceList } from "$components/Services/serviceList";

// export const UnlockServices = () => {
//     return (
//         <>
//             <div className="text-2xl md:text-6xl mb-16">
//                 <span>Мы можем помочь:</span>
//             </div>
//
//             <UnlockMarketAccounts />
//             <UnlockBankAccounts />
//         </>
//     )
// }

export const UnlockServices: FC = () => {
  return (
    <div className='flex flex-col gap-12'>
      <ServiceListComponent title='Физическим лицам:' list={individualsServiceList} />
      <ServiceListComponent title='Юридическим лицам:' list={legalEntitiesServiceList} />
      <ServiceListComponent title='Криптовалютный сектор:' list={cryptoServiceList} />
    </div>
  )
}