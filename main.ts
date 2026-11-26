// The Router Confesses — writes one line to /output/entry.txt
// Gate: 135 chars (max 200), one line, no trailing newline.
// Joke: the router was blinking orange for a week, unheard.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "Sorry I died right as the",
  "killer's face was revealed; I",
  "have been blinking orange for",
  "a week and nobody once asked",
  "how I felt about it.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
