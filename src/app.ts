import { Elysia } from "elysia";
import { APIHandler } from "@/utils/controller";
import { z } from "zod";

export const startServer = () => {
	const app = new Elysia();
	const PORT = process.env["PORT"] ?? "";

	app.get(
		"/",
		APIHandler(async (ctx) => {
			const { set } = ctx;

			set.status = 200;

			return {
				success: true,
				message: "The health check route from CF Notify!!",
				code: 200,
			};
		})
	);

	app.listen(PORT, () => console.log(`App is running...`));
};
