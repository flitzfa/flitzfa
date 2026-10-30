import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync, mkdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { checkPublicBuild } from '../scripts/check-public-build.mjs';

test('built partners page includes the public contract', () => {
  const html = readFileSync('dist/partners/index.html', 'utf8');
  for (const content of ['Derivación', 'White label', 'Demos propias', 'https://turnos.flitzfa.com.ar/', 'https://catalogo.flitzfa.com.ar/', 'https://gimnasio.flitzfa.com.ar/', 'https://veterinaria.flitzfa.com.ar/', '/#proyectos', 'mailto:']) {
    assert.ok(html.includes(content), `Missing public content: ${content}`);
  }
  assert.match(html, /rel="canonical" href="https:\/\/flitzfa.com.ar\/partners/);
  assert.ok(checkPublicBuild() > 0);
});

test('hidden demo is not in the built pages', () => {
  for (const page of ['dist/index.html', 'dist/partners/index.html']) {
    assert.doesNotMatch(readFileSync(page, 'utf8'), /distribuidora/i);
  }
});

test('privacy guard rejects private content even inside a public HTML file', () => {
  const dir = mkdtempSync(join(tmpdir(), 'flitzfa-private-content-'));
  try {
    writeFileSync(join(dir, 'index.html'), '<p>FLITZFA_INTERNAL_ONLY</p>');
    assert.throws(() => checkPublicBuild(dir), /Private documentation content/);
  } finally {
    // Exact mkdtemp-created path; no user-supplied or parent directory deletion.
    rmSync(dir, { recursive: true });
  }
});

test('privacy guard rejects a copied documentation directory', () => {
  const dir = mkdtempSync(join(tmpdir(), 'flitzfa-private-path-'));
  try {
    mkdirSync(join(dir, 'docs/business'), { recursive: true });
    writeFileSync(join(dir, 'docs/business/README.md'), 'internal');
    assert.throws(() => checkPublicBuild(dir), /Private document path/);
  } finally {
    rmSync(dir, { recursive: true });
  }
});
