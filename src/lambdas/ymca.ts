import { ApiHandler } from "sst/node/api";

export const YMCAHandler = ApiHandler(async () => {
	// We can extract it via functions that are adaptive to situations

	return {
		statusCode: 200,
		body: JSON.stringify({
			success: true,
			message: "YMCA ki profs ki ****",
		}),
	};
});
