import type { APIResponse } from "@/types/api";
import { ControllerError } from "@/types/errors";
import type { Context } from "elysia";

type ControllerFunc<D = void> = (ctx: Context) => Promise<APIResponse<D>>;

export const APIHandler =
	<D = void>(controllerFunc: ControllerFunc<D>): ControllerFunc<D> =>
	async (ctx: Context) => {
		try {
			return await controllerFunc(ctx);
		} catch (error) {
			if (error instanceof ControllerError) {
				ctx.set.status = error.code;

				return {
					success: false,
					code: error.code,
					error: error.message,
				};
			}

			if (error instanceof Error) {
				ctx.set.status = 400;

				return {
					success: false,
					code: 400,
					error: error.message ?? "Some Error Occurred!!",
				};
			}

			ctx.set.status = 500;

			return {
				success: false,
				code: 500,
				error: "Internal Server Error!!",
			};
		}
	};
