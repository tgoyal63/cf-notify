export type APIResponse<D = void> = {
	code: number;
} & (
	| {
			success: true;
			message?: string;
			data?: D;
	  }
	| {
			success: false;
			error: string | Array<string>;
	  }
);
