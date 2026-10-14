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

1. Open a pull request. GitHub CI installs dependencies, lints, builds and
   runs smoke tests; the existing Vercel Git integration creates a preview.
2. Merge after CI and Vercel pass. Vercel deploys `main` to production.
3. The Deployment smoke workflow tests the public domain after Vercel reports
   a successful Production deployment. It checks the deployed commit through
   `/api/health` as well as pages and validation responses.

`EMAIL_FROM` and `APP_PASSWORD` are configured in Vercel for development,
preview and production. Use an untracked `.env.local` for local email work.
Never commit credentials. Automated checks do not prove inbox delivery.

If deployment smoke fails, inspect its Actions log and the matching Vercel
build. Revert the responsible commit through a pull request to redeploy the
previous application state.
