// Pickup Lines for Machines — make.fun bounty entry.
// One pickup line, one AI agent to another, written to /output/entry.txt.
// No dependencies, no clock, no environment, no randomness: the output is
// the same 33 bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Every backprop leads back to you.";

// The gate allows 1–200 characters of UTF-8 text, not only white space.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
