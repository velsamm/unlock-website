import type { Metadata } from "next";
import { Blog } from "$components/blog/blog";
import { BRAND_NAME } from "$app/constants";

export const metadata: Metadata = {
	title: `Блог | Юристы об их буднях связанных с криптовалютой, банками и 115-ФЗ, онлайн-бизнесе |  ${BRAND_NAME}`,
	description: "Разблокируем доступ к криптовалютным аккаунтам и банковским счетам",
};

export default function Home() {
	return (
		<Blog />
	)
}