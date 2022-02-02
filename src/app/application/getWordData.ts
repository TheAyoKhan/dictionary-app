export type Options = Record<string, unknown>;
export type Requester<T> = (url: string, options: Options) => Promise<T>;

export const getWordData = async <T>(
	apiEndpoint: string,
	word: string,
	options: Record<string, unknown> = {},
	requester: Requester<T>
): Promise<T | null> => {
	const response = await requester(`${apiEndpoint}/${word}`, options);
	console.dir(response);
	return response || null;
};
