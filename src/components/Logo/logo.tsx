import React, { FC } from "react";
import Image from "next/image";
import LogoImage from '$assets/icons/svg/logo-light.svg'

export const Logo: FC = () => <Image width={128} src={LogoImage} alt="logo" />
