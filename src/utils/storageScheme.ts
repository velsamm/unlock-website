export const getStorageTheme = () => {
	return window.localStorage.getItem('theme');
}

export const setStorageTheme = (theme: 'light' | 'dark') => {
	return window.localStorage.setItem('theme', theme);
}

