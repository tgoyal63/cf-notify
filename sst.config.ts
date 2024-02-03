import { type SSTConfig } from "sst";
import { Bucket } from "sst/constructs";

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
			// const service = new Service(stack, "service", {
			// 	port: 8000,
			// });
			// stack.addOutputs({
			// 	ServiceUrl: service.url,
			// });
			new Bucket(stack, "public");
		});
	},
} satisfies SSTConfig;
