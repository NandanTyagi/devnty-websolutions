# DEVNTY Websolutions

## Run and verify

Use Node.js 22 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

Production checks:

```sh
npm run lint
npm run build
npm run test:ci
```

`test:ci` starts the production build on port 3100, checks all four pages,
404 handling and invalid contact requests, then stops the server. It never
sends an email. `npm run test:smoke` tests an already running server; set
`SMOKE_BASE_URL` to select its URL.

## Delivery

GitHub repository: `NandanTyagi/devnty-websolutions`.
Vercel project: `devnty-web`, team `team-devnty`.
Production branch: `main`. Production URL: https://www.devnty.com.

Pushes to `main` automatically build and deploy through the existing Vercel
Git integration. Other branches receive preview deployments. GitHub Actions
is not used or required. Pull requests retain the Vercel deployment check.

Run lint, build and smoke tests locally before release. After deployment,
set `SMOKE_BASE_URL=https://www.devnty.com` and run `npm run test:smoke`.
Optionally set `EXPECTED_COMMIT` to verify the exact deployed commit through
`/api/health`.

`EMAIL_FROM` and `APP_PASSWORD` are configured in Vercel for development,
preview and production. Use an untracked `.env.local` for local email work.
Never commit credentials. Automated checks do not prove inbox delivery.

If a smoke test fails, inspect its output and the matching Vercel build. Revert the responsible commit through a pull request to redeploy the
previous application state.

## Contact form protection

The only email entry point is `POST /api/v1/form-submit`. It checks the origin,
content type, payload size and field lengths, rejects the honeypot field, then
requires Vercel BotID Basic verification before calling the server-only mail helper.
Verification outages fail closed. The helper is not a public Server Action.
Mail content is escaped and visitors cannot choose the recipient or subject.

Vercel Firewall has an active rule named `Contact form rate limit`, matching
POST requests to this endpoint: 5 attempts per IP per 60 seconds. This rule is
platform configuration, so it also works across serverless instances. Manage it
in the devnty-web project's Firewall settings. Bot protection reduces abuse;
it cannot guarantee that every automated submission will be caught.

Run `npm run test:contact` to exercise validation and the protected handler with
mocked bot verification and mail delivery. These tests never send email.
BotID's real classification must be checked on Vercel, not inferred from local dev.
For a preview-only browser test, set `CONTACT_FORM_TEST_MODE=1` scoped to the test
branch. Verified submissions return success without sending mail. Production
ignores this flag. Remove the preview variable after testing.

The seven project cards and their order are maintained in
`components/ProjectCards.jsx`. The same source supplies the two homepage previews.
