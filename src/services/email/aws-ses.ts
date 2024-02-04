import type { ServiceFunction } from "@/types/api";

export const awsSendEmail: ServiceFunction = async () => {
	return {
		success: true,
		code: 200,
		message: "Email Chala gaya!! Mai bhi chala jata hun!!",
	};
};
