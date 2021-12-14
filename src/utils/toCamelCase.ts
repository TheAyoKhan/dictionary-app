const toCamelCase = (str: string): string => {
	const arr = str.split(' ');

	const arr2 = arr.map((w, i) => {
		if (i === 0) return w.toLowerCase();
		const arr = w.split('');
		arr[0] = arr[0].toUpperCase();
		return arr.join('');
	});

	return arr2.join('');
};

export default toCamelCase;
