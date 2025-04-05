import React, { FC } from "react";
import { ServiceListComponent } from "$components/Services/serviceListComponent";
import { cryptoServiceList, individualsServiceList, legalEntitiesServiceList } from "$components/Services/serviceList";

export const UnlockServices: FC = () => {
  return (
    <div className='flex flex-col gap-12'>
      <ServiceListComponent title='Физическим лицам:' list={individualsServiceList} />
      <ServiceListComponent title='Юридическим лицам:' list={legalEntitiesServiceList} />
      <ServiceListComponent title='Криптовалютный сектор:' list={cryptoServiceList} />
    </div>
  )
}