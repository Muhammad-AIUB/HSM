# HSM — Health Systems Matter

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind 3 content site for a public
health organisation. It publishes **interviews with, and articles by, named real people** —
their words, credentials, and career histories.

## Commands

```bash
npm run dev          # next dev --turbopack, port 3000
npm run build        # runs `clean` first (scripts/clean-next.js), then next build
npm run lint         # next lint over the whole repo — has pre-existing warnings
npx tsc --noEmit     # typecheck (fast, use this as the primary gate)
```

Lint only the files you touched (`npx eslint <paths>`); `npm run lint` reports unrelated
pre-existing warnings and will mislead you about whether your change is clean.

## PRIME DIRECTIVE — content fidelity

Every interview and blog page reproduces a real person's statements and credentials under
their name and photo. Fabrication here is a reputational harm to that person, not a bug.

- **Never invent, embellish, paraphrase, or "improve"** a quote, qualification, job title,
  institution, date, or statistic. Transcribe the source document.
- When a source document is supplied, the page text must match it. Verify by diffing the
  rendered text against the source rather than eyeballing it.
- Obvious mechanical typos in the source (stray comma, missing `Q.` prefix) may be fixed —
  **say so explicitly** in your summary. Anything that changes meaning is the author's call.
- No source for a fact means the fact does not go on the page. Ask.
- Person names and honorifics are copied exactly as the source writes them. The site is
  inconsistent between `Dr.` and `Dr` across pages — follow the source document, not
  neighbouring pages.

## Layout

The interview and blog trees are **not symmetrical**. This trips people up:

| | Article pages | Listing (cards) | Order file |
|---|---|---|---|
| Interviews | `app/interview/<slug>/page.tsx` | `app/interview/page.tsx` | `app/interview/interviewOrder.ts` |
| Blogs | `app/blog-and-interview/blog/<slug>/page.tsx` | `app/blog/page.tsx` | `app/blog-and-interview/blog/blogOrder.ts` |

`app/blog-and-interview/blog/page.tsx` and `app/blog-and-interview/interview/page.tsx` are
**not** the listings — the first is a static landing page with hardcoded featured content,
the second is an unused stub. Do not add entries to either.

Images: `public/images/blog-interview/` (blogs and some interviews) and
`public/images/blog-interview/interview/` (most interview portraits). Both are in use;
reference whichever path the file actually sits at. Filenames containing spaces are normal
here and Next's `<Image>` handles them — do not rename existing files to "fix" this.

## Serial numbers work differently for blogs and interviews

- **Interviews** — `app/interview/page.tsx` sorts the `interviews` array **ascending by
  `date`** before rendering, and the card pill reads `Interview #{index + 1}`. The serial is
  therefore derived from the date, *not* from the `id` field and *not* from array position.
  A new interview with the newest date lands last and takes the highest serial. `id` is
  only a React key — but keep it unique and one above the current maximum.
- **Blogs** — `app/blog/page.tsx` derives the serial by looking the slug up in `blogOrder`.
  Position in `blogOrder` *is* the serial.

`interviewOrder` / `blogOrder` also drive the "Next Interview" / "Next Blog" button, which
wraps modulo the array length. The last entry links back to the first — that wrap is the
proof your entry is genuinely last.

## Adding an interview

Four edits. Missing any one leaves the page unreachable or mis-numbered.

1. **`app/interview/<slug>/page.tsx`** — copy the most recent interview page as the
   template. It is a server component; it imports `interviewOrder` and
   `@/components/Shared/LinkedInLogo`, and sets `const currentSlug = "<slug>"`.
2. **`app/interview/interviewOrder.ts`** — append `{ slug, title }` at the **end**.
3. **`app/interview/page.tsx`** — add `{ id, title, date, description, image, slug }` to the
   **top** of the `interviews` array (`id` = current max + 1, `date` as `"Month D, YYYY"`).
4. **`app/interview/page.tsx`** — if the portrait needs a non-default crop, add a branch to
   the `interview.slug === ... ? <Image .../> :` ternary chain in the card renderer.

Page structure, in order: blue title band (name highlighted in a `#FFCE00` pill linking to
LinkedIn) → navy hero with circular avatar + yellow quote card carrying the pull quote and
`Published: <date>` → `<h2>` section per source heading, each wrapping `<h3>` questions and
`<p>` answers prefixed `<span className="font-bold">First name:</span>` → "Interview
conducted by" banner → `#BFEFF3` About box → Next Interview button.

Interviews are credited to Monaemul Islam Sizear, linked to `/sizear`, unless told otherwise.

## Adding a blog post

Same shape: create `app/blog-and-interview/blog/<slug>/page.tsx`, append to `blogOrder`, and
add the card to `app/blog/page.tsx`. Author bios are colocated components named
`BioOf<Name>.tsx` in the article's own directory, imported by its `page.tsx`.

## Conventions

Brand palette, used as Tailwind arbitrary values throughout — there are no semantic colour
tokens for these, so copy the hex codes:

`#001844` navy (headers, hero) · `#2D8CBB` blue (questions, links) · `#FFCE00` yellow
(highlights, buttons) · `#C2185B` pink (section headings) · `#BFEFF3` pale cyan (About box)
· `#EF4444` red (date pill)

- `react/no-unescaped-entities` is **off** in `eslint.config.mjs`, but existing pages still
  write `&rsquo; &ldquo; &rdquo; &mdash;`. Match that.
- Cropping a photo that is not a headshot: `object-fit`/`object-position` can only pan, not
  zoom, and has **no effect on the axis that is not overflowing**. To tighten a wide shot,
  use `scale-[N] origin-[X%_Y%]`.
- **A scaled image must sit in its own `overflow-hidden` box the same size as the image.**
  `transform: scale()` does not reflow: the element keeps its layout box, so text below
  keeps its position while the image *paints* over it. On the interview cards the only
  `overflow-hidden` is on the `<Link>` wrapping the whole card, which clips at the card's
  outer edge — far below the title — so a `scale-[1.75]` image painted 63px over its own
  card title. Every scaled image in this repo is wrapped (`w-52 h-52 rounded-full
  overflow-hidden` for hero avatars, `w-full h-56 overflow-hidden` for card thumbnails).
  Verify by asserting the clip box's `bottom` is above the title's `top`, not by eye.
- Rest-state `scale-*` is the risky case; `hover:scale-105` overflows by ~11px only while
  hovered, which is why the other cards never showed this. An inline `style` transform also
  silently kills the shared `hover:scale-105`, so express it as Tailwind classes and restate
  the hover (`hover:scale-[N*1.05]`).
- Reading a transformed element's computed style right after a synthetic hover returns the
  value mid-`transition` (300ms here), not the target. Wait before asserting, or you will
  chase a bug that is not there.
- `.claude/settings.local.json` is machine-local and gitignored. `.claude/launch.json`
  defines the `hsm-dev` preview server and is committed.

## Before saying it works

`npx tsc --noEmit` and `npx eslint <changed files>` both clean, then load the page in the
browser preview and confirm: the content matches the source, the images actually render
(a `200` on the image request does not mean it is visible — check the element's box), the
serial pill and date are right, the Next button wraps as expected, and the layout holds at
375px. Screenshot the result.
