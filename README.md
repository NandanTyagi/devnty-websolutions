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
