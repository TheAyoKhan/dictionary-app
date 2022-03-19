const toDashed = (str: string): string => {
	// Make the string lowercase
	const lowerCase = str.toLowerCase();

	// Split the string into an array of words
	const arr = lowerCase.split(' ');

	// Join the array of words back into a string with dashes between each word
	const dashed = arr.join('-');

	// Return the new string
	return dashed;
};

export default toDashed;
