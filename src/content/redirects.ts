// Source of truth lives in redirects.mjs so next.config.mjs can import it without a TypeScript build step.
import { redirects as redirectMap } from "./redirects.mjs";

export const redirects: Record<string, string> = redirectMap;
