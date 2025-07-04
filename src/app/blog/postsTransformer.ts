import { postsSource } from "./postsSource";
import { slugify } from "$utils/slugify";

import image1 from '$assets/images/blog/1.png';
import image2 from '$assets/images/blog/2.png';
import image3 from '$assets/images/blog/3.png';
import image4 from '$assets/images/blog/4.png';
import image5 from '$assets/images/blog/5.png';
import image6 from '$assets/images/blog/6.jpg';
import image7 from '$assets/images/blog/7.jpg';
import image8 from '$assets/images/blog/8 .png';
import image9 from '$assets/images/blog/9.png';
import image10 from '$assets/images/blog/10.png';
import image11 from '$assets/images/blog/11.jpg';
import image12 from '$assets/images/blog/12.png';
import image13 from '$assets/images/blog/13.png';
import image14 from '$assets/images/blog/14.png';
import image15 from '$assets/images/blog/15.png';
import image16 from '$assets/images/blog/16.jpg';
import image17 from '$assets/images/blog/17.jpg';
import image18 from '$assets/images/blog/18.png';
import image19 from '$assets/images/blog/19.jpeg';
import image20 from '$assets/images/blog/20.jpg';
import image21 from '$assets/images/blog/21.jpg';
import image22 from '$assets/images/blog/22.png';
import image23 from '$assets/images/blog/23.png';

const imagesBindings = {
	'kogda-postavschik-zabyl-o-svoikh-obyazatelstvakh-vozvraschaem-pochti-2-mln-rub-cherez-sud': image1,
	'kak-razblokirovat-akkaunt-na-kriptobirzhe-rabochie-shagi-rekomendatsii-po-aml-profilyu': image2,
	'operatsii-s-tsifrovymi-valyutami-po-dogovoru-i-aktu': image3,
	'-161-fz-kak-i-kuda-podavat-zhalobu-esli-vvedeny-ogranicheniya-po-schetu': image4,
	'vash-vklad-v-buduschee-o-kotorom-vy-ne-prosili': image5,
	donosy: image6,
	'zablokirovali-kriptovalyutnyy-akkaunt-vy-tochno-ne-delali-eto': image7,
	'pochemu-zaschita-lichnogo-brenda-zalog-uspekha-vashego-biznesa': image8,
	'kakuyu-detsentralizatsiyu-my-zasluzhili-localcoinswap-isklyuchila-rossiyu-gde-bezopasno-torgovat-r2r': image9,
	'kak-snyat-blokirovku-s-akkaunta-na-bybit': image10,
	'vozmozhen-li-dogovor-zayma-v-kriptovalyute': image11,
	'ogranicheniya-po-115-fz': image12,
	'operativnaya-razblokirovka-scheta-v-ao-tinkoff-bank': image13,
	'vyvod-denezhnykh-sredstv-s-zablokirovannogo-scheta-v-alfa-banke': image14,
	'snyatie-ogranicheniy-po-schetu-v-sberbanke': image15,
	'pochemu-vazhno-znat-chto-zaprashivaet-kriptovalyutnaya-birzha-servis-v-ramkakh-aml-proverki': image16,
	'razblokirovka-kriptovalyutnykh-aktivov': image17,
	'zablokirovali-kriptovalyutnyy-akkaunt-my-pomozhem': image18,
	'razblokirovka-scheta-v-alfa-banke': image19,
	'razblokirovka-bankovskogo-scheta': image20,
	'posledstviya-neosnovatelnogo-obogascheniya-realnyy-primer-iz-yuridicheskoy-praktiki': image21,
	'pochemu-bitzlato-ne-budet-blokirovat-rossiyskikh-polzovateley-v-usloviyakh-sanktsiy-ssha-i-es-protiv-rossii': image22,
	'istoriya-iz-praktiki-pochemu-tinkoff-ne-otkryvaet-schet-i-pomozhet-li-sud': image23
}

export function postsTransformer()  {
	console.log('postsTransformer');
	const postsSourceNoPinned = postsSource.result.items.filter((item) => {
		return !item.data.isPinned;
	});

	const posts = postsSourceNoPinned.map((item) => {
		const id = slugify(item.data.title);

		return {
			blocks: item.data.blocks.map((block) => ({ type: block.type, data: block.data, })),
			title: item.data.title,
			id,
			date: item.data.date * 1000,
			image: imagesBindings[id],
		}
	});

	return posts;
}

export type Post = ReturnType<typeof postsTransformer>[0];
export const posts: Post[] = postsTransformer();