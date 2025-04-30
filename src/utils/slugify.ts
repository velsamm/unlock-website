const transliterationMap: { [key: string]: string } = {
	'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
	'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
	'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
	'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
	'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
};

export function slugify(input: string): string {
	const regex = new RegExp(Object.keys(transliterationMap).join('|'), 'g');
	return input
		.trim()
		.toLowerCase()
		.replace(regex, (match) => transliterationMap[match])
		.replace(/[^a-zA-Z0-9-]/g, ' ')
		.replace(/\s+/g, '-')
		.replace(/-$/g, '')
		.replace(/-+/g, '-');
}