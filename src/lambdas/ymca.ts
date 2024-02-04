import { awsSendEmail } from "@/services/email";
import { ApiHandler } from "sst/node/api";

export const YMCAHandler = ApiHandler(async () => {
	const data = await awsSendEmail();

	return {
		statusCode: data.code,
		body: JSON.stringify(data),
	};
});
