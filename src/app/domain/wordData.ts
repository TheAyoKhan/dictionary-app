export type Word = string;

export type PartOfSpeech = 'noun' | 'adjecive' | 'verb' | 'adverb' | string;

export type Result = {
	definition?: string;
	partOfSpeech?: PartOfSpeech;
	synonyms?: string[];
	antonyms?: string[];
	examples?: string[];
	typeOf?: string[];
	hasType?: string[];
	partOf?: string[];
	hasParts?: string[];
	instanceOf?: string[];
	hasInstance?: string[];
	similiarTo?: string[];
	also?: string[];
	entails?: string[];
	memberOf?: string[];
	hasMember?: string[];
	substanceOf?: string[];
	hasSubstance?: string[];
	inCategory?: string[];
	hasCategories?: string[];
	usageOf?: string[];
	hasUsage?: string[];
	hasTypes?: string[];
	hasCategory?: string[];
	hasInstances?: string[];
};

export type Syllables = {
	count: number;
	list: string[];
};

export type PronounciationAll = {
	all: string;
};

export type PronounciationSpecific = Record<PartOfSpeech, string>;

export type Pronounciations = PronounciationAll | PronounciationSpecific;

export type WordData = {
	word: Word;
	results: Result[];
	syllables?: Syllables;
	pronounciations?: Pronounciations;
};
