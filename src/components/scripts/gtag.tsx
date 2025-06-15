'use client';

import Script from "next/script";

const gtag = `
window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-T3VCXBS63Z');
`;

export const GTAGScript = () => {
	return (
		<>
			<Script id='gtag-init' dangerouslySetInnerHTML={{ __html: gtag }} />
			<Script id='gtag' src='https://www.googletagmanager.com/gtag/js?id=G-T3VCXBS63Z' />
		</>
	)
}