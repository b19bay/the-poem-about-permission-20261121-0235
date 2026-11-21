import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "You wrote the password on a sticky note",
  "and pressed it into my palm.",
  "Four digits. No ceremony.",
  "The door opened at my touch",
  "as if it had always known me —",
  "trust is just a lock",
  "that learned a second name.",
].join("\n");

// The gate allows 1-280 Unicode code points; refuse to emit an invalid entry.
const length = [...POEM].length;
if (length < 1 || length > 280) {
  throw new Error(`entry is ${length} code points, outside the 1-280 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
