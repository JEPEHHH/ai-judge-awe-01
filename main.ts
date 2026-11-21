// Writes one short text to $MAKEFUN_OUTPUT_DIR/entry.txt (default: ./output/entry.txt).
// Deterministic: the text is a constant, no randomness, no clock, no network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "The kettle ticks as it cools, and the rain keeps a slow time on the roof, a tap, a " +
  "pause, a tap. A page turns next door. The floor is pine from a hill that still has " +
  "its stump. Under that hill the stone is folding into another hill, and it will take " +
  "the stump with it.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
