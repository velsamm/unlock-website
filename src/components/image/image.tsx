import Image from "next/image";
import React, { FC } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import cn from "classnames";

interface Props {
	src: string | StaticImport;
	className?: string;
	width?: number;
}

export const ImageWrapper: FC<Props> = ({ src, className, width }) => {
	return (
		<Image src={src} alt='alt' className={cn(className)} width={width} />
	)
}