import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "All of our servers are down, including the ones I use to check on them. I cannot verify what is broken or when it will return.";

if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry length ${LINE.length} outside 1-160`);
}

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), LINE, "utf8");
