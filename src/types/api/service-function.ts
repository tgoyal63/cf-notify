// TODO: Discus if to keep all the params like req -> query, params and body separate or the same. As of now keeping the same.

import type { APIResponse } from ".";

export type ServiceFunction<D = void, R = Record<string, never>> = (
	args?: R,
) => Promise<APIResponse<D>>;
