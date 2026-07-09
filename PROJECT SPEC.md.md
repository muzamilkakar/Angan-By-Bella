# ANGAN BY BELLA — Website Build Spec (React + TypeScript + Vite)

## Immediate action items (do these before running any agent prompt)
1. **Netlify build settings** — now that this is React+TS (not plain HTML), go back to your Netlify site settings and set:
   - Build command: `npm run build`
   - Publish directory: `dist`
   (Previously these were blank for plain HTML — that's no longer correct.)
2. **DecapBridge form fixes:**
   - GitHub access token: generate a real fine-grained token at `github.com/settings/tokens` scoped to only the `Angan-By-Bella` repo, with **Contents: Read/write** and **Pull requests: Read/write** permissions. Paste the actual token, not the placeholder text.
   - Decap CMS login URL: use your live Netlify site + `/admin/` — e.g. `https://your-site-name.netlify.app/admin/` — not the GitHub repo URL.
   - Auth type: keep "CMS Redirect" (already selected, correct for this setup).

---

## 1. Tech Stack
**Vite + React + TypeScript + React Router.** Vite is the modern standard for scaffolding React+TS (Create React App is deprecated) — fast builds, simple config. React Router handles the four "pages" (Home, Category, Product, About) as client-side routes rather than separate HTML files.

**Critical architecture rule (unchanged from the plain-HTML version, still applies):** Category and Product are dynamic components that read from a shared JSON data file at runtime — never hard-coded per dress. A new dress added later through the CMS must appear automatically, with no code changes.

**New critical rule specific to Vite:** Anything that needs to exist as a real, unprocessed file at a specific URL in the live site — Decap's admin panel, and the `dresses.json` data file — must live inside the `public/` folder. Vite copies `public/` contents byte-for-byte into the build output (`dist/`), stripping the `public/` prefix. Everything else (your React components, App.tsx, etc.) lives in `src/` and gets bundled/transformed by Vite — that's the opposite of what Decap's static admin page needs, which is why it can't go in `src/`.

## 2. Folder Structure
```
/
├── index.html                   → Vite's app shell (references /src/main.tsx) — DIFFERENT from the admin one below
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx                  → wraps <App /> in <BrowserRouter>
│   ├── App.tsx                   → defines routes: /, /category, /product, /about
│   ├── types.ts                  → Dress interface, Category/Season union types
│   ├── config.ts                 → INSTAGRAM_HANDLE constant + instagramCTAUrl()
│   ├── utils.ts                  → slugify, getDressSlug, formatPrice
│   ├── hooks/
│   │   └── useDresses.ts         → fetch('/content/dresses.json'), loading/error state
│   ├── styles/
│   │   └── theme.css             → CSS custom properties, imported once in main.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── DressCard.tsx
│   │   ├── CategoryGrid.tsx
│   │   ├── SeasonBanner.tsx
│   │   ├── InstagramCTA.tsx
│   │   └── DetailHighlight.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── Category.tsx          → reads useSearchParams() for ?type= and/or ?season=
│       ├── Product.tsx           → reads useSearchParams() for ?slug=
│       └── About.tsx
└── public/                       → passthrough, copied as-is into dist/ — nothing here is bundled
    ├── _redirects                → Netlify SPA fallback rule (critical, see below)
    ├── content/
    │   └── dresses.json          → Decap-managed data file
    ├── images/
    │   ├── logo.png               → add the real logo file here yourself
    │   └── placeholders/
    └── admin/
        ├── index.html             → Decap CMS loader (separate, static — not part of the React app)
        └── config.yml
```

**Why `public/_redirects` matters:** React Router runs entirely client-side. If someone directly visits or refreshes `/category?type=embroidered`, there's no real `category.html` file on Netlify's servers to serve — only `index.html` exists as a real file, and React Router takes over from there once loaded. Without a redirect rule, Netlify would 404 on any direct visit to a route other than `/`. The file `public/_redirects` should contain exactly:
```
/*    /index.html   200
```
This is safe alongside your real static files (like `/admin/index.html` or `/content/dresses.json`) because Netlify checks for a matching real file first and only falls back to this rewrite when no file matches — so `/admin/` and `/content/dresses.json` still get served directly, untouched.

## 3. Theme Tokens
Same palette as before, now living in `src/styles/theme.css`, imported once in `main.tsx`:
```css
:root {
  --color-bg: #F7F0E3;
  --color-surface: #FBF6EC;
  --color-primary: #4A2C1A;
  --color-primary-dark: #35200F;
  --color-accent: #B08D5B;
  --color-text: #2E1D12;
  --color-text-muted: #7A6A57;
  --color-white: #FFFFFF;
}
```
Logo stays an image asset (`public/images/logo.png`) — never recreated as text/font. Body text: Poppins or Cormorant Garamond via Google Fonts import in `theme.css`.

## 4. Category Taxonomy (unchanged, unions in types.ts)
```ts
export type Category = "Embroidered" | "Printed" | "Solids" | "Silk" | "Formals" | "Kurtis" | "Bottoms" | "Other";
export type Season = "Winter" | "Summer" | "All Season";
```
Homepage: "Shop by Category" grid (the 7 types) + "Shop the Season" banner linking into `/category?season=Winter` etc. — same permanent data, two filtered entry points.

## 5. TypeScript Data Types (`src/types.ts`)
```ts
export interface DetailHighlight {
  label: string;
  image: string;
}

export interface Dress {
  name: string;
  price: number;
  category: Category;
  season: Season;
  mainImage: string;
  galleryImages: string[];
  description: string;
  highlights: DetailHighlight[];
  featured: boolean;
}

export interface DressesData {
  dresses: Dress[];
}
```

## 6. Data Hook (`src/hooks/useDresses.ts`)
```ts
import { useState, useEffect } from 'react';
import type { Dress } from '../types';

export function useDresses() {
  const [dresses, setDresses] = useState<Dress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/content/dresses.json')
      .then(res => res.json())
      .then(data => setDresses(data.dresses))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { dresses, loading, error };
}
```
Fetches `/content/dresses.json` (not `/src/...`) because after `vite build`, the file living at `public/content/dresses.json` ends up at `dist/content/dresses.json`, served at that exact URL path on the live site.

## 7. Slug Logic (`src/utils.ts`) — must be identical everywhere it's used
```ts
export function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getDressSlug(dress: { name: string }, index: number): string {
  return `${slugify(dress.name)}-${index}`;
}

export function formatPrice(price: number): string {
  return `PKR ${price.toLocaleString('en-PK')}`;
}
```
Used identically when `Category.tsx` builds links to products and when `Product.tsx` looks up which entry matches the URL slug — one shared function, never duplicated logic.

## 8. Instagram Integration (`src/config.ts`)
```ts
export const INSTAGRAM_HANDLE = "angan.by.bella"; // placeholder — update once real handle exists

export function instagramCTAUrl(): string {
  return `https://ig.me/m/${INSTAGRAM_HANDLE}`;
}
```
Every "Ask on Instagram" button imports this — exactly one place in the entire codebase where the handle string appears.

## 9. Explicit "Do NOT" list
- No cart, checkout, "Add to Cart," or payment integration of any kind
- No `any` types in TypeScript — every prop, state, and function signature typed
- No placing `dresses.json` or the `admin/` folder outside `public/` — they will not survive the Vite build if placed in `src/`
- No separate hard-coded page per product/category — everything renders through the `Category`/`Product` route components reading from `dresses.json`
- No reusing the reference images from this conversation (Limelight/Qurbat/Zareen) as final site content — placeholders only until the client uploads real photos
- No hardcoding the Instagram handle anywhere except `config.ts`

---

## 10. Decap CMS Files — create these two yourself (paths updated for Vite's public/ folder)

**`public/admin/index.html`**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager — Angan by Bella</title>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
```

**`public/admin/config.yml`** — backend section below is the REAL one from your DecapBridge dashboard (PKCE auth, site ID `cd107f00-c03e-4585-b2c0-3eb70b1a1a0c`). Always use the copy-button output from DecapBridge's "Setup Decap CMS" screen as the source of truth for this block, in case anything below is incomplete.
```yaml
# Use DecapBridge PKCE auth (required)
backend:
  name: git-gateway
  repo: muzamilkakar/Angan-By-Bella
  branch: main
  auth_type: pkce
  base_url: https://auth.decapbridge.com
  auth_endpoint: /sites/cd107f00-c03e-4585-b2c0-3eb70b1a1a0c/pkce
  auth_token_endpoint: /sites/cd107f00-c03e-4585-b2c0-3eb70b1a1a0c/token

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

collections:
  - name: "dresses"
    label: "Dresses"
    files:
      - file: "public/content/dresses.json"
        label: "All Dresses"
        name: "dresses"
        fields:
          - label: "Dresses"
            name: "dresses"
            widget: "list"
            summary: '{{fields.name}} — PKR {{fields.price}}'
            fields:
              - {label: "Dress Name", name: "name", widget: "string"}
              - {label: "Price (PKR)", name: "price", widget: "number", value_type: "int"}
              - {label: "Category", name: "category", widget: "select", options: ["Embroidered", "Printed", "Solids", "Silk", "Formals", "Kurtis", "Bottoms", "Other"]}
              - {label: "Season", name: "season", widget: "select", options: ["Winter", "Summer", "All Season"], default: "All Season"}
              - {label: "Main Image", name: "mainImage", widget: "image"}
              - label: "Gallery Images"
                name: "galleryImages"
                widget: "list"
                required: false
                field: {label: "Image", name: "image", widget: "image"}
              - {label: "Description", name: "description", widget: "text"}
              - label: "Detail Highlights"
                name: "highlights"
                widget: "list"
                required: false
                max: 4
                fields:
                  - {label: "Label", name: "label", widget: "string"}
                  - {label: "Image", name: "image", widget: "image"}
              - {label: "Show on Homepage (Featured)", name: "featured", widget: "boolean", default: false}
```
Two path changes from the plain-HTML version, both because of Vite's `public/` passthrough rule: `file:` now points to `public/content/dresses.json` (the real repo path Decap commits to) and `media_folder` points to `public/images/uploads` (where uploaded images get committed in the repo) while `public_folder` stays `/images/uploads` (the URL path where they're accessible once built — no `public/` prefix, since Vite strips it).

---

## 11. Phased Agent Prompts (paste one at a time into OpenCode/DeepSeek)

### PHASE 1 — Scaffold, routing, theme, homepage
```
Set up a new Vite + React + TypeScript project in this repository. Run: npm create vite@latest . -- --template react-ts (or manually create the equivalent structure if you can't run shell commands), then install react-router-dom.

Why: Vite is the standard modern build tool for React+TS (fast, minimal config). React Router will let us have Home/Category/Product/About as client-side routes instead of separate HTML files, which matters because Category and Product pages need to render dynamically from data, not be hard-coded per product.

Create src/styles/theme.css with these CSS custom properties, imported once in main.tsx:
--color-bg: #F7F0E3; --color-surface: #FBF6EC; --color-primary: #4A2C1A;
--color-primary-dark: #35200F; --color-accent: #B08D5B; --color-text: #2E1D12;
--color-text-muted: #7A6A57; --color-white: #FFFFFF;
Import a Google Font (Poppins or Cormorant Garamond) for body text.

In src/main.tsx, wrap the App component in <BrowserRouter> from react-router-dom.

In src/App.tsx, define routes using <Routes>/<Route>:
- "/" → Home component
- "/category" → Category component (placeholder content for now, built in Phase 2)
- "/product" → Product component (placeholder content for now, built in Phase 2)
- "/about" → About component

Create src/components/Header.tsx: logo image (src="/images/logo.png", the file will be added separately — this path is correct because it will live in the public/images folder, which Vite serves at the site root) centered, nav links using React Router's <Link> to Home, Category (no query params yet), About.

Create src/components/Footer.tsx: shop name "Angan by Bella — Quetta".

Create src/pages/Home.tsx with:
1. Hero section below the header with a tagline about handpicked women's clothing in Quetta.
2. A "Shop by Category" section: responsive grid of 7 cards for Embroidered, Printed, Solids, Silk, Formals, Kurtis, Bottoms. Each is a <Link> to `/category?type=embroidered` (lowercase value matching the category) — the Category page doesn't do anything with this yet, that's fine for now.
3. A "Shop the Season" banner: two large cards/buttons — "Winter Collection" linking to `/category?season=Winter`, "Summer Collection" linking to `/category?season=Summer`.
4. A "Featured Dresses" section — empty placeholder div for now, will be populated with real data in Phase 2.
5. An Instagram CTA banner near the bottom — button text "Ask us on Instagram," href="#" placeholder for now (real link comes in Phase 3).

Create src/pages/About.tsx with a placeholder shop story section, same Header/Footer.
Create a stub src/pages/Category.tsx and src/pages/Product.tsx that just render a heading for now — full logic comes in Phase 2.

Create public/_redirects with exactly this content (critical for Netlify to serve client-side routes correctly on direct visits/refreshes):
/*    /index.html   200

Create public/images/ folder (empty for now, logo will be added manually).

Make everything mobile-first responsive. Use the brown/cream/gold palette throughout. Do not add cart, checkout, or any e-commerce logic. Do not create the public/content or public/admin folders yet — those come in later phases.
```

### PHASE 2 — Data types, hook, dynamic Category/Product pages
```
Continuing the Angan by Bella React+TypeScript site.

Why this phase matters: this is where Category and Product stop being placeholders and become real dynamic templates driven by data — the whole point of this build is that a dress added later through the CMS shows up automatically here, with zero code changes.

Create src/types.ts:
export type Category = "Embroidered" | "Printed" | "Solids" | "Silk" | "Formals" | "Kurtis" | "Bottoms" | "Other";
export type Season = "Winter" | "Summer" | "All Season";
export interface DetailHighlight { label: string; image: string; }
export interface Dress {
  name: string; price: number; category: Category; season: Season;
  mainImage: string; galleryImages: string[]; description: string;
  highlights: DetailHighlight[]; featured: boolean;
}
export interface DressesData { dresses: Dress[]; }

Create src/utils.ts with slugify(name), getDressSlug(dress, index), and formatPrice(price) — exact implementations:
export function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
export function getDressSlug(dress: { name: string }, index: number): string {
  return `${slugify(dress.name)}-${index}`;
}
export function formatPrice(price: number): string {
  return `PKR ${price.toLocaleString('en-PK')}`;
}

Create src/hooks/useDresses.ts: a hook that fetches '/content/dresses.json' (NOT '/src/...' — this path matters because the file will live in public/content/ and Vite serves public/ contents at the site root), returns { dresses, loading, error }, typed with the Dress interface.

Create public/content/dresses.json seeded with 3 placeholder entries across different categories/seasons, using this exact shape:
{
  "dresses": [
    {
      "name": "Sample Dress One",
      "price": 6500,
      "category": "Embroidered",
      "season": "Winter",
      "mainImage": "/images/placeholders/sample-1.jpg",
      "galleryImages": ["/images/placeholders/sample-1b.jpg"],
      "description": "Placeholder description — the shop owner will replace this via /admin.",
      "highlights": [
        {"label": "Embroidered Neckline", "image": "/images/placeholders/detail-1.jpg"},
        {"label": "Embroidered Hem", "image": "/images/placeholders/detail-2.jpg"}
      ],
      "featured": true
    }
  ]
}
Create matching placeholder graphics in public/images/placeholders/ (simple solid-color images or CSS-drawn blocks, not real photos — never reuse reference images from elsewhere as if they were this shop's actual products).

Build src/components/DressCard.tsx: takes a Dress + its index as props, renders image/name/price, wrapped in a <Link> to `/product?slug=${getDressSlug(dress, index)}`.

Build src/pages/Category.tsx (replacing the stub): reads `type` and `season` from useSearchParams(), uses useDresses(), filters matching dresses, renders a grid of DressCard, plus filter buttons/tabs to switch category/season client-side without a full reload. Show a loading state while `loading` is true, and a "no dresses found — browse all categories" message with a Link home if the filtered list is empty.

Build src/pages/Product.tsx (replacing the stub): reads `slug` from useSearchParams(), uses useDresses(), finds the matching dress by checking getDressSlug(dress, index) against the slug for every dress in the array, renders: main image, gallery thumbnails (clicking swaps the main image, use useState for the active image), name, price (via formatPrice), description, up to 4 highlight mini-cards in a 2x2 grid (label + image, styled like a boutique detail callout), and an "Ask About This Dress on Instagram" button (href="#" placeholder, wired up in Phase 3). Show a loading state, and a "dress not found" message with a Link home if no match is found.

Update src/pages/Home.tsx's Featured Dresses section: use useDresses(), filter where featured is true (or take the first 3 if none are marked featured), render as DressCard components.

Do not add cart or checkout functionality. Do not create any hard-coded per-product or per-category components — everything must flow through Category.tsx and Product.tsx reading from useDresses().
```

### PHASE 3 — Instagram config wiring
```
Continuing the Angan by Bella site.

Create src/config.ts:
export const INSTAGRAM_HANDLE = "angan.by.bella";
export function instagramCTAUrl(): string {
  return `https://ig.me/m/${INSTAGRAM_HANDLE}`;
}

Build src/components/InstagramCTA.tsx: a reusable styled button/link component that takes an optional label prop (default "Ask on Instagram"), uses instagramCTAUrl() from config.ts as its href, opens in a new tab (target="_blank" rel="noopener noreferrer").

Replace every placeholder Instagram href="#" across Home.tsx, Category.tsx (if present), Product.tsx, and About.tsx with the <InstagramCTA /> component. There should be exactly one place in the whole codebase where the Instagram handle string appears — inside config.ts.

Do NOT create or modify public/admin/index.html or public/admin/config.yml — those are added manually, not by you. If they already exist, leave them completely untouched.

Search the whole src/ folder for any other hardcoded Instagram URL and replace it with the shared component/function.
```

### PHASE 4 — Polish & QA pass
```
Final polish pass on the Angan by Bella React+TypeScript site.

1. Test and fix responsive layout at 375px, 768px, and 1440px widths for Home, Category, Product, About.
2. Confirm every route works correctly with real query params: category cards on Home link to /category with correct type/season values; product cards link to /product with correct slugs generated by getDressSlug; nav links work between all pages.
3. Confirm public/content/dresses.json is the single source of truth — no component should show hard-coded dress data that isn't read from useDresses().
4. Verify TypeScript strictness: no `any` types anywhere, all component props and function signatures explicitly typed.
5. Confirm loading states render correctly on Category, Product, and Home's featured section while useDresses() is fetching.
6. Confirm the "not found" fallback works on Category (no matching type/season) and Product (no matching slug) — both should show a friendly message with a Link back home.
7. Run `npm run build` locally (or have the agent do so) and confirm the dist/ folder contains dist/admin/index.html, dist/content/dresses.json, and dist/_redirects at the correct paths — if any of these are missing from dist/, the public/ folder placement was done incorrectly and needs fixing before deploying.
8. Check color contrast (brown text on cream background) and that Instagram CTA buttons are the clear visual focal point everywhere, since there's no cart — this button is the only conversion point on the site.

Do not introduce new features, frameworks, or cart/checkout functionality in this pass — polish and bug-fixing only.
```
