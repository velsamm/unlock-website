import PurplePersonPic from "$assets/icons/svg/PurplePerson.svg";
import OrangePersonPic from "$assets/icons/svg/OrangePerson.svg";
import Image from "next/image";
import { Typography } from "$components/typography/typography";

export const WhoWorks = () => {
  return (
    <div className="flex who-work-container flex-col md:flex-row items-center relative p-6 md:p-12">
      <div className="w-72 max-w-72">
        <div className="flex justify-start items-center h-full">
          <div className="image-purple-person flex justify-end">
            <Image src={PurplePersonPic} alt="purplePerson" />
          </div>
          <div className="image-orange-person">
            <Image src={OrangePersonPic} alt="orangePerson" />
          </div>
        </div>
      </div>
      <div className="pt-5 md:p-5">
        <Typography as="span" appearance='regular' className="md:!text-3xl md:!leading-10">
          В штате BZ Pravo работают профессиональные юристы с опытом работы
          более 10 лет в областях KYC/AML, Fintech и банковской сферы
        </Typography>
      </div>
    </div>
  );
};
