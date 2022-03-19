const toCamelCase = (str: string): string => {
	// Split the string into an array of words
	const arr = str.split(' ');

	const arr2 = arr.map((word, i) => {
		// If the word is the first word in the array, return it lowercased
		if (i === 0) return word.toLowerCase();

		// Otherwise, split the word into an array of letters
		const arr = word.split('');
		// Capitalize the first letter of the word
		arr[0] = arr[0].toUpperCase();
		// Join the array of letters back into a word
		return arr.join('');
	});

	// Join the array of words back into a camel case string
	const camelCase = arr2.join('');

	// Return the camel case string
	return camelCase;
};

export default toCamelCase;
