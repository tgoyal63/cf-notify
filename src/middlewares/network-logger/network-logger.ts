import { logger } from "@/utils/logger";
import { ElysiaLogging, LogFormat } from "@otherguy/elysia-logging";

export const networkLogger = ElysiaLogging(logger, {
	format: LogFormat.COMMON,
	level: "http",
});
