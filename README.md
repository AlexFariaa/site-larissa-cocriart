# CoCriart Site (Foundation)

## Prerequisites

- Node.js 18+
- npm

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment file:

```bash
cp .env.example .env.local
```

3. Fill the variables in `.env.local`.

4. Start development server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (Netlify)

Automatic deploy pipeline is configured via `netlify.toml` and `@netlify/plugin-nextjs`.
Every push to `main` should trigger a new Netlify build.
