import React, { FC } from "react";
import { Typography } from "$components/typography/typography";

type Props = {
	title: string;
	list: {
		name: string;
		value: string;
	}[];
}

export const ServiceListComponent: FC<Props> = ({ title, list }) => {
	return (
		<div>
			<div className="px-4 sm:px-0">
				<Typography as='h3' appearance='header'>{title}</Typography>
			</div>
			<div className="mt-6 border-t border-gray-100">
				<dl className="divide-y divide-gray-100">
					{
						list.map((item, index) => (
							<div key={index} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt>
									<Typography as='h1' appearance='regular'>{item.name}</Typography>
								</dt>
								<dd className="ml-auto mt-1 sm:col-span-2 sm:mt-0">
									<Typography as='h1' appearance='small'>{item.value}</Typography>
								</dd>
							</div>
						))
					}
				</dl>
			</div>
		</div>
	)
}