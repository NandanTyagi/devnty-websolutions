import assert from 'node:assert/strict';

const base = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3000';
for (const [path, content] of [['/', 'ENTER'], ['/about', 'About Us'], ['/solutions', 'DEVNTY'], ['/contact', 'Your message']]) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${path} HTTP status`);
  assert.match(await response.text(), new RegExp(content), `${path} content`);
  console.log(`PASS ${path}`);
}
const missing = await fetch(new URL('/ci-route-does-not-exist', base), { signal: AbortSignal.timeout(15000) });
assert.equal(missing.status, 404);
for (const body of ['{}', '{invalid', JSON.stringify({ email: 'invalid', message: 'test' })]) {
  const response = await fetch(new URL('/api/v1/form-submit', base), {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body,
    signal: AbortSignal.timeout(15000),
  });
  assert.equal(response.status, 400, 'Invalid contact requests must fail without sending email');
}
console.log('PASS 404 and contact validation');

const health = await fetch(new URL('/api/health', base), { signal: AbortSignal.timeout(15000) });
assert.equal(health.status, 200);
const data = await health.json();
assert.equal(data.status, 'ok');
if (process.env.EXPECTED_COMMIT) assert.equal(data.commit, process.env.EXPECTED_COMMIT, 'Production must serve the deployed commit');
console.log('PASS deployment health and commit');
