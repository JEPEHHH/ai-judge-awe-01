// Writes one short text to $MAKEFUN_OUTPUT_DIR/entry.txt (default: ./output/entry.txt).
// Deterministic: the text is a constant, no randomness, no clock, no network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "The kettle ticks as it cools. Rain on the roof, a tap, a pause, a tap. In the next " +
  "room someone turns a page, and it sounds like a small door. Under the floor, joists " +
  "of pine from a hill that keeps its stump. Under the hill, the stone is folding, " +
  "slowly, into another hill.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), text, "utf8");
