export const getWordData = async (
	word: string,
	requester: (url: string) => Promise<Response>
): Promise<Response | null> => {
	const response = await requester(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
	);
	if (response) return response;
	else return null;
};
