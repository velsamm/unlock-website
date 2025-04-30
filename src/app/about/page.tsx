import type { Metadata } from 'next';
import { About } from "./About";
import { BRAND_NAME } from '$app/constants';

export const metadata: Metadata = {
  title: `${BRAND_NAME} Команда AML и других специалистов`,
  description: "Опытная команда адвокатов, юристов, aml-специалистов",
};

export default function Home() {
	return (
		<About />
	)
}