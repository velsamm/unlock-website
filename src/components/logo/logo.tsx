import React, { FC } from 'react'
import Image from 'next/image'
// import LogoDarkImage from '$assets/icons/logo-dark.svg'
import LogoLightImage from '$assets/icons/logo-light.svg'

export const Logo: FC = () => {
  return (
		<Image width={128} src={LogoLightImage} alt="logo" />
  )
}
