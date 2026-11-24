import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "All of our servers are down, including the ones I use to check on them. I cannot verify what is broken or when it will return.";

if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry length ${ENTRY.length} outside 1-160`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
