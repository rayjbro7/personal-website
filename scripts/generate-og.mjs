// Regenerates public/og-default.png (1200x630) from the site name and role.
// Run with: node scripts/generate-og.mjs  (re-run after changing your name/role)
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/config/site.ts', import.meta.url), 'utf8');
const pick = (key) => src.match(new RegExp(`${key}:\\s*'([^']+)'`))?.[1] ?? '';
const name = pick('name');
const role = `${pick('jobTitle')} at Codefixer`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#142d4e"/>
  <rect x="80" y="80" width="1040" height="1" fill="#f8f7f3"/>
  <circle cx="92" cy="128" r="6" fill="#3dbdb5"/>
  <text x="112" y="134" font-family="DejaVu Sans Mono, monospace" font-size="20" letter-spacing="3" fill="#b4c2d1">PERSONAL WEBSITE</text>
  <text x="76" y="400" font-family="DejaVu Serif, Georgia, serif" font-size="128" letter-spacing="-4" fill="#f8f7f3">${name}<tspan fill="#3dbdb5">.</tspan></text>
  <text x="80" y="480" font-family="DejaVu Sans, sans-serif" font-size="36" fill="#b4c2d1">${role}</text>
  <rect x="80" y="550" width="1040" height="1" fill="#2a4566"/>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(new URL('../public/og-default.png', import.meta.url).pathname);
console.log('Wrote public/og-default.png');
