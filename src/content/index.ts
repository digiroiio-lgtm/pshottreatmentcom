import { clinicPages } from "./pages/clinic";
import { comparisonPages } from "./pages/comparisons";
import { conditionPages } from "./pages/conditions";
import { corePages } from "./pages/core";
import { diagnosticPages } from "./pages/diagnostics";
import { homePage } from "./pages/home";
import { legacyPages } from "./pages/legacy";
import { pshotPages } from "./pages/pshot";
import { regenerativePages } from "./pages/regenerative";
import { shockwavePages } from "./pages/shockwave";
import type { PageDef } from "./types";

export const pages: PageDef[] = [
  homePage,
  ...corePages,
  ...pshotPages,
  ...shockwavePages,
  ...regenerativePages,
  ...conditionPages,
  ...diagnosticPages,
  ...comparisonPages,
  ...clinicPages,
  ...legacyPages,
];

const byPath = new Map(pages.map((page) => [page.path, page]));
if (byPath.size !== pages.length) throw new Error("Duplicate page path in content registry");

export const getPage = (path: string) => byPath.get(path);
export const slugPages = pages.filter((page) => page.path !== "/");
