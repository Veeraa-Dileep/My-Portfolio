# Gold Prestige — Portfolio Color Scheme

## Color Palette

| Name | Hex | Use For |
|---|---|---|
| Pure Black | `#0A0A0A` | Page / body background |
| Soft Black | `#111111` | Section backgrounds |
| Card Black | `#1A1A1A` | Cards, panels, containers |
| Warm Shadow | `#1A1509` | Hover states, dividers |
| Deep Gold | `#7C5C1E` | Borders, subtle accents |
| Antique Gold | `#B8923A` | Headings, nav links, labels |
| Warm Gold | `#D4AD5C` | Secondary text, icons |
| Bright Gold | `#EDD07A` | CTA buttons, highlights (use sparingly) |
| Cream | `#F5E6C0` | Body text, paragraphs |

---

## CSS Variables (paste into your `:root`)

```css
:root {
  --black-page:    #0A0A0A;
  --black-section: #111111;
  --black-card:    #1A1A1A;
  --black-hover:   #1A1509;
  --gold-deep:     #7C5C1E;
  --gold-mid:      #B8923A;
  --gold-warm:     #D4AD5C;
  --gold-bright:   #EDD07A;
  --cream:         #F5E6C0;
}
```

---

## Usage Rules

### Backgrounds — layer these three
- `#0A0A0A` → entire page background
- `#111111` → section backgrounds (hero, about, contact)
- `#1A1A1A` → cards, project tiles, panels
- `#1A1509` → hover state on cards/buttons

### Borders & dividers
- Use `#7C5C1E` at 40–60% opacity for all borders
- Example: `border: 0.5px solid rgba(124, 92, 30, 0.5)`
- Never use gray or white borders — they break the warmth

### Text hierarchy
- `#B8923A` → name, section headings, nav links
- `#D4AD5C` → sub-headings, skill tags, secondary labels
- `#F5E6C0` → all body text and paragraphs (never use #FFFFFF)

### Call-to-action
- `#EDD07A` → one primary CTA button only ("View Work", "Hire Me")
- Text on bright gold button: `#0A0A0A` (pure black)
- Use sparingly — the less it appears, the more it stands out

---

## Colour Ratio

| Colour | Approx. % of design | Role |
|---|---|---|
| Blacks (`#0A0A0A` – `#1A1A1A`) | 75% | Backgrounds, structure |
| Cream (`#F5E6C0`) | 15% | All readable body text |
| Antique gold (`#B8923A`) | 5% | Headings, accents |
| Bright gold (`#EDD07A`) | 5% | CTA only |

---

## 3 Rules to Keep Gold Looking Expensive

1. **Never fill large areas with gold.** Gold only works as an accent on dark. Think jewellery on black velvet — the velvet makes the gold shine.
2. **Use the full gold spectrum.** `#7C5C1E` for borders → `#B8923A` for headings → `#EDD07A` for CTA. One flat gold shade looks cheap; the layered spectrum looks refined.
3. **Warm your whites.** Replace `#FFFFFF` with `#F5E6C0` and `#CCCCCC` with `#D4AD5C` everywhere. Pure white breaks the warm atmosphere.

---

## Prompt for Claude Code

Paste this into Claude Code to build your portfolio:

```
Build me a portfolio website using the Gold Prestige color scheme.

CSS variables to use:
  --black-page:    #0A0A0A  (page background)
  --black-section: #111111  (section backgrounds)
  --black-card:    #1A1A1A  (cards and panels)
  --black-hover:   #1A1509  (hover states)
  --gold-deep:     #7C5C1E  (borders, dividers)
  --gold-mid:      #B8923A  (headings, nav links)
  --gold-warm:     #D4AD5C  (secondary text, icons)
  --gold-bright:   #EDD07A  (CTA button only)
  --cream:         #F5E6C0  (all body text, never use white)

Design rules:
- Page background is #0A0A0A, sections use #111111, cards use #1A1A1A
- All borders use #7C5C1E at ~50% opacity
- Headings and nav links in #B8923A
- Body text always in #F5E6C0, never pure white
- Only ONE element uses #EDD07A — the primary CTA button
- Text on gold buttons must be #0A0A0A
- No gradients except a subtle glow on the hero name
- Font pairing: a serif or elegant display font for the name/headings,
  a clean sans-serif for body text

Sections to include:
1. Hero — name, title, one CTA button
2. About — short bio paragraph
3. Work / Projects — 3 project cards
4. Skills — tag/pill list
5. Contact — email link or form
```
