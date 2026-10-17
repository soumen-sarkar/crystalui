// Generates outlined (font-independent) logo SVGs using Didact Gothic, uppercase.
import opentype from 'opentype.js';
import { writeFileSync, readFileSync } from 'node:fs';

const font = (()=>{const b=readFileSync('node_modules/@fontsource/didact-gothic/files/didact-gothic-latin-400-normal.woff');return opentype.parse(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength));})();
const SIZE = 30, LS = 0.14, TEXT = 'CRYSTAL U', X = 74;

const probe = font.getPath(TEXT, 0, 0, SIZE, { letterSpacing: LS }).getBoundingBox();
const capH = probe.y2 - probe.y1;
const baseline = 32 + capH / 2;               // vertically centre on the 64px mark
const textPath = font.getPath(TEXT, X, baseline, SIZE, { letterSpacing: LS });
const d = textPath.toPathData(2);
const bb = textPath.getBoundingBox();
// Didact Gothic's capital I has slab serifs; draw a plain stem so 'UI' stays geometric.
const stemW = 2.25, gap = SIZE * LS + 2.2;
const ix = bb.x2 + gap;
const tb = font.getPath('T', 0, baseline, SIZE).getBoundingBox();   // flat cap height
const iRect = { x: +ix.toFixed(2), y: +tb.y1.toFixed(2), w: stemW, h: +(tb.y2 - tb.y1).toFixed(2) };
const W = Math.ceil(ix + stemW + 4);

const mark = (c) => `
  <polygon points="10,24 32,4 32,24" fill="${c.a}"/>
  <polygon points="32,4 54,24 32,24" fill="${c.b}"/>
  <polygon points="10,24 32,24 32,60" fill="${c.c}"/>
  <polygon points="32,24 54,24 32,60" fill="${c.d}"/>`;

const dark  = { a: '#C9F5AE', b: '#9FE870', c: '#163D2A', d: '#17231D', text: '#17231D' };
const light = { a: '#C9F5AE', b: '#9FE870', c: '#9FE870', d: '#C9F5AE', text: '#FFFFFF' };

const lockup = (c, label) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} 64" width="${W}" height="64" role="img" aria-label="${label}">
  <title>${label}</title>${mark(c)}
  <path d="${d}" fill="${c.text}" stroke="${c.text}" stroke-width="0.7" stroke-linejoin="round"/>
  <rect x="${iRect.x}" y="${iRect.y}" width="${iRect.w}" height="${iRect.h}" fill="${c.text}"/>
</svg>
`;
const markSvg = (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="CRYSTAL UI mark">
  <title>CRYSTAL UI mark</title>${mark(c)}
</svg>
`;

writeFileSync('src/assets/crystal-ui-logo.svg', lockup(dark, 'CRYSTAL UI'));
writeFileSync('src/assets/crystal-ui-logo-light.svg', lockup(light, 'CRYSTAL UI'));
writeFileSync('src/assets/crystal-ui-mark.svg', markSvg(dark));
writeFileSync('src/assets/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#9FE870"/><g transform="translate(8 8) scale(.75)">${mark({a:'#F8F9F5',b:'#C9F5AE',c:'#163D2A',d:'#17231D'})}</g></svg>\n`);
console.log('logo width', W);
