'use client';

import Script from "next/script";

const gtag = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T3VCXBS63Z"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-T3VCXBS63Z');
</script>
`;

export const GTAGScript = () => {

	return <Script id='gtag-script' dangerouslySetInnerHTML={{ __html: gtag }} strategy='beforeInteractive' />
}