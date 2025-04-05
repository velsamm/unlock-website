export function getCurrentTheme() {
	return document.querySelector('[data-theme]')?.getAttribute('data-theme');
}
