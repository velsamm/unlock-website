export function getCurrentScheme() {
	return document.querySelector('[data-theme]')?.getAttribute('data-theme');
}
