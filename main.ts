import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 280;

const ENTRY =
  "My palm reader stopped halfway down my lifeline and asked me to pay up front.";

function validateEntry(text: string): string {
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line without line breaks");
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be empty or whitespace only");
  }
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`Entry length ${chars} exceeds 1..${MAX_CHARS} characters`);
  }
  return text;
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const outputPath = join(outputDir, "entry.txt");
  const validated = validateEntry(ENTRY);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, validated, "utf8");
}

main();
