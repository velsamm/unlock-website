import React from "react";
import { UnlockServices } from "$components/services";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "БЗ Право - Услуги физическим и юридическим лицам",
};

export default function Home() {
	return (
		<div className="mt-20">
			<UnlockServices/>
		</div>
	)
}