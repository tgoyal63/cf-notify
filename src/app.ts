import { Elysia } from "elysia";
import { APIHandler } from "@/utils/controller";
import { logger } from "@/utils/logger";
import { networkLogger } from "./middlewares/network-logger";

export const startServer = () => {
	const app = new Elysia();
	const PORT = process.env["PORT"] ?? "";

	app.use(networkLogger);

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

	app.listen(PORT, () => {
		logger.info(`App is running...`);
	});
};
