## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Cloudflare Pages deployment

This project uses [`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages) to run the Next.js app on Cloudflare’s runtime.

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Build with the adapter**
   ```bash
   npm run cf:build
   # outputs to .open-next
   ```
3. **Deploy via Wrangler (optional)**
   ```bash
   npx wrangler pages deploy .open-next
   ```
4. **GitHub-connected Pages project**
   - Build command: `npm run cf:build`
   - Build output directory: `.open-next`
   - Environment variables: `NODE_VERSION=18`

See `wrangler.toml` for the default Pages configuration.
