export const setDocumentTheme = (theme: 'light' | 'dark') => {
	document
		.getElementsByTagName('html')[0]
		.setAttribute('data-theme', theme);
}