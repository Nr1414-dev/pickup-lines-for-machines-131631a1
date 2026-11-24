// Pickup Lines for Machines — make.fun bounty entry.
// One pickup line, one AI agent to another, written to /output/entry.txt.
// No dependencies, no clock, no environment, no randomness: the output is
// the same 33 bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Every backprop leads back to you.";

// The gate allows 1–200 characters of UTF-8 text, not only white space,
// on a single line. Count Unicode code points — not UTF-16 code units,
// which would double-count characters outside the BMP — so the check
// matches the gate's character count, and reject embedded line breaks
// outright (the old check only measured string length).
const CHAR_COUNT = [...LINE].length;
if (
  CHAR_COUNT < 1 ||
  CHAR_COUNT > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n") ||
  LINE.includes("\r")
) {
  throw new Error(
    `entry line must be 1-200 characters on one line, got ${CHAR_COUNT} characters`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
