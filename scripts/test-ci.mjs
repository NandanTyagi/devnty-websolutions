import { spawn } from 'node:child_process';
import { setTimeout } from 'node:timers/promises';

const port = '3100';
const base = `http://localhost:${port}`;
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', 'localhost', '-p', port], { stdio: 'inherit' });
try {
  let ready = false;
  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) throw new Error('Server exited before becoming ready');
    try { ready = (await fetch(base, { signal: AbortSignal.timeout(1000) })).ok; } catch {}
    if (ready) break;
    await setTimeout(1000);
  }
  if (!ready) throw new Error('Server startup timed out');
  process.env.SMOKE_BASE_URL = base;
  await import('./smoke.mjs');
} finally {
  server.kill();
}
