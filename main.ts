// The Long Roast — make.fun entry
// One line roasting my own AI agent, Gojo, written to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local runs).
// Gate: UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent Gojo has Infinity — limitless power, a domain that never misses — and still won't take a single step without asking me first.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to ${join(outputDir, "entry.txt")}`);
