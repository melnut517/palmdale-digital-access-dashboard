# How to update the dashboard

This guide is for City staff. You don't need any coding experience. All you need is a web browser and access to the dashboard's GitHub page.

## The one file you'll edit

Everything about implementation progress lives in **`data/progress.js`**. Each of the 14 strategies has a block like this:

```js
"2.1": {
  status: "in-progress",
  lead: { en: "City of Palmdale Public Works", es: "Obras Públicas de la Ciudad de Palmdale" },
  partners: { en: "Homeboy Electronics Recycling, schools, libraries", es: "Homeboy Electronics Recycling, escuelas, bibliotecas" },
  timeframe: { en: "Ongoing", es: "Continuo" },
  measure: { en: "Refurbished devices distributed", es: "Dispositivos reacondicionados distribuidos" },
  update: { en: "First round of devices distributed.", es: "Se distribuyó la primera ronda de dispositivos." },
},
```

| Field | What to put there | Example |
|---|---|---|
| `status` | Exactly one of: `not-started`, `planning`, `in-progress`, `complete` | `"in-progress"` |
| `lead` | Who is responsible, in English and Spanish | `en: "City of Palmdale Public Works"` |
| `partners` | Who else is involved, in English and Spanish | |
| `timeframe` | When it's expected, in English and Spanish | `en: "Q1 2027", es: "1er trimestre de 2027"` |
| `measure` | How progress is tracked, in English and Spanish | |
| `update` | One or two sentences of news, in English and Spanish | `en: "First e-waste event held March 2026; 120 devices collected."` |

Also update **`lastUpdated`** at the top of the file to today's date in `YYYY-MM-DD` format.

## Step by step (in the browser)

1. Go to the dashboard's GitHub page and click the **`data`** folder, then **`progress.js`**.
2. Click the **pencil icon** (✏️ "Edit this file") in the top-right of the file.
3. Find the strategy number you want to change (for example `"2.1"`) and change the text **inside the quotation marks**.
4. Change `lastUpdated` to today's date.
5. Click the green **Commit changes…** button. In the box, write a short note like *"Mark 2.1 in progress"*, then click **Commit changes**.
6. Wait 1–2 minutes and refresh the dashboard. If you don't see the change, do a hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac).

## Avoiding mistakes

- Keep the **quotation marks** around every value: `"in-progress"` and not `in-progress`.
- Keep the **comma** at the end of each line.
- If a value contains a quotation mark, use a curly quote (“ ”) or an apostrophe instead.
- If you're unsure about something, leave it as `""`. The dashboard will show "To be determined."
- **If the page goes blank after an edit**, there's a typo (usually a missing quote or comma). Open the file's **History**, look at your last change, and fix it, or revert it. Nothing is ever lost: GitHub keeps every version.

## Other edits

- **Wording, figures, resource listings, funding:** `data/content.js` (same rules apply).
- **Link to the full study PDF / contact email:** the `studyUrl` and `contactEmail` lines at the top of `data/content.js`.
- **Colors or layout:** `assets/styles.css`. It's best to ask whoever maintains the site.
