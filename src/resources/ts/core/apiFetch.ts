export interface FetchOptions {
	id?: string;
	type?: string;
}

export type ApiFetch = (options: FetchOptions) => Promise<any[]>;
