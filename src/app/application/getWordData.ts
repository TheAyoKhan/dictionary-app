export const getWordData = async (
	apiEndpoint: string,
	word: string,
	requester: (url: string) => Promise<Response>
): Promise<Response | null> => {
	const response = await requester(
		`${apiEndpoint}/${word}`
	);
	if (response) return response;
	else return null;
};
