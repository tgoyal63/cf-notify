import { Api, Stack } from "sst/constructs";

export const getLambdaAPIs = (stack: Stack) => {
	const api = new Api(stack, "API", {
		routes: {
			"GET /": "src/lambdas/ymca.YMCAHandler",
		},
	});

	stack.addOutputs({
		ApiEndpoint: api.url,
	});

	return api;
};
