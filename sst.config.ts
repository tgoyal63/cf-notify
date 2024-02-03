import { getLambdaAPIs } from "@/api/lambdas";
import { type SSTConfig } from "sst";
// import { Bucket, Service } from "sst/constructs";

export default {
	config(input) {
		return {
			name: "cf-notify",
			region: "ap-south-1",
			profile:
				input.stage === "production"
					? "cf-notify-dev"
					: "cf-notify-dev",
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			getLambdaAPIs(stack);
		});
	},
} satisfies SSTConfig;
