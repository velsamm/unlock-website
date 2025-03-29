import React, { FC } from "react";
import { ServiceListComponent } from "$components/services/serviceListComponent";
import { cryptoServiceList, individualsServiceList, legalEntitiesServiceList } from "$components/services/serviceList";
import { Block } from "$components/block/block";

export const UnlockServices: FC = () => {
  return (
    <Block>
      <div className='flex flex-col gap-12'>
        <ServiceListComponent title='Физическим лицам:' list={individualsServiceList} />
        <ServiceListComponent title='Юридическим лицам:' list={legalEntitiesServiceList} />
        <ServiceListComponent title='Криптовалютный сектор:' list={cryptoServiceList} />
      </div>
    </Block>
  )
}