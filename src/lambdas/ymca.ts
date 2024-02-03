import { ApiHandler } from "sst/node/api";

export const YMCAHandler = ApiHandler(async () => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			success: true,
			message: "YMCA ki profs ki ****",
		}),
	};
});
