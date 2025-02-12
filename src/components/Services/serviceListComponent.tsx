import React, { FC } from "react";

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
				<h3 className="text-base/7 font-semibold">{title}</h3>
			</div>
			<div className="services-list mt-6 border-t border-gray-100">
				<dl className="divide-y divide-gray-100">
					{
						list.map((item, index) => (
							<div key={index} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm/6 font-medium">{item.name}</dt>
								<dd className="ml-auto mt-1 text-sm/6 sm:col-span-2 sm:mt-0">{item.value}</dd>
							</div>
						))
					}
				</dl>
			</div>
		</div>
	)
}