import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler } from '../utils/contact-handler.mjs';
const valid = { firstName: 'Test', lastName: 'Person', email: 'test@example.com', message: 'A test enquiry.' };
function setup(overrides = {}) {
  let sent = 0;
  const handler = createContactHandler({
    env: { VERCEL: '1', VERCEL_ENV: 'production', EMAIL_FROM: 'sender@example.com', APP_PASSWORD: 'test' },
    verifyBot: async () => ({ isHuman: true, isBot: false, isVerifiedBot: false }),
    sendMail: async () => { sent++; }, ...overrides,
  });
  return { handler, count: () => sent };
}
const request = (data = valid, headers = {}) => new Request('https://www.devnty.com/api/v1/form-submit', { method: 'POST', headers: { Origin: 'https://www.devnty.com', 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(data) });
test('verified human request sends one email', async () => { const s=setup(); assert.equal((await s.handler(request())).status,200); assert.equal(s.count(),1); });
test('bots, verified crawlers and verification outages never send mail', async () => {
  for (const verifyBot of [async()=>({isHuman:false,isBot:true}),async()=>({isHuman:true,isVerifiedBot:true}),async()=>({}),async()=>{throw Error('unavailable')}]) {
    const s=setup({verifyBot}); const r=await s.handler(request()); assert.ok([403,503].includes(r.status)); assert.equal(s.count(),0);
  }
});
test('honeypot, cross-site, missing origin, malformed JSON and invalid fields never send mail', async () => {
  const s=setup();
  const cases=[request({...valid,website:'spam'}),request(valid,{Origin:'https://attacker.example'}),request(valid,{Origin:''}),request({...valid,message:' '}),new Request('https://www.devnty.com/api/v1/form-submit',{method:'POST',headers:{Origin:'https://www.devnty.com','Content-Type':'application/json'},body:'{invalid'})];
  for(const req of cases) assert.ok([400,403].includes((await s.handler(req)).status)); assert.equal(s.count(),0);
});
test('oversized payloads and unsupported content types fail',async()=>{const s=setup();assert.equal((await s.handler(request({...valid,message:'x'.repeat(17000)}))).status,413);assert.equal((await s.handler(request(valid,{'Content-Type':'text/plain'}))).status,415);assert.equal(s.count(),0);});
test('mail failure cannot report success', async()=>{const s=setup({sendMail:async()=>{throw Error('SMTP unavailable')}});assert.equal((await s.handler(request())).status,502);});
test('preview dry-run verifies browser without sending, production ignores test mode',async()=>{
  const preview=setup({env:{VERCEL:'1',VERCEL_ENV:'preview',CONTACT_FORM_TEST_MODE:'1'}});const r=await preview.handler(request());assert.equal(r.status,200);assert.equal((await r.json()).testMode,true);assert.equal(preview.count(),0);
  const prod=setup({env:{VERCEL:'1',VERCEL_ENV:'production',CONTACT_FORM_TEST_MODE:'1'}});assert.equal((await prod.handler(request())).status,503);assert.equal(prod.count(),0);
});
