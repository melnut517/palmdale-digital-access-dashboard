# Getting the dashboard onto GitHub

A walkthrough for publishing the dashboard to GitHub for the first time, then handing it to the City. It doesn't use any command line.

## Words you'll see

- **Repository ("repo")**: a project folder on GitHub. It stores the files and every past version of them.
- **Commit**: a saved change, with a short note describing it.
- **GitHub Pages**: GitHub's free website hosting. It turns the repo into a live web page.
- **Public / private**: who can see the repo. GitHub Pages on a free account requires a **public** repo. That's fine here, because everything on the dashboard is public information.

## Part 1: Create the repository (about 10 minutes)

1. Sign in at **github.com**.
2. Click the **+** in the top-right, then **New repository**.
3. Name it `palmdale-digital-access-dashboard`. Choose **Public**. Leave the other boxes unchecked. Click **Create repository**.
4. On the next page, click the link **"uploading an existing file."**
5. Open the `palmdale-digital-access-dashboard` folder on your computer. Select **everything inside it** (`index.html` and the `assets`, `data` and `docs` folders) and drag it all into the browser window.
   *Drag the folders themselves, not just the files inside them, so the folder structure is kept.*
6. At the bottom, write "First version of dashboard" and click **Commit changes**.

## Part 2: Turn on the website (about 5 minutes)

1. In the repo, click **Settings** (top menu), then **Pages** (left menu).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
4. Wait 1–3 minutes and refresh. A box will appear at the top: **"Your site is live at https://YOUR-USERNAME.github.io/palmdale-digital-access-dashboard/"**. That's the link to share.

## Part 3: Make updates later

- **Change a status:** follow `docs/HOW-TO-UPDATE.md`. Everything happens in the browser.
- **Replace a whole file** (for example, after Claude makes design changes): in the repo, open the folder, click **Add file → Upload files**, drag in the new version and commit. GitHub replaces the old one and keeps it in the file's history.
- **Undo a mistake:** open the file and click **History**. You can view or copy any earlier version.

> **Optional:** [GitHub Desktop](https://desktop.github.com) is a free app that keeps a folder on your computer in sync with the repo. It's handy once you're making frequent changes, but you don't need it to get started.

## Part 4: Invite collaborators (city staff, a colleague)

1. Go to **Settings → Collaborators → Add people**.
2. Enter their GitHub username or email. They'll get an invitation to accept.
3. Collaborators can edit files and approve changes. Anyone can *view* a public repo.

## Part 5: Hand it over to the City

When the City is ready to own it:

1. The City creates a GitHub **organization** (free), e.g. `cityofpalmdale`. Ideally a staff role account owns it, not one person.
2. In your repo, go to **Settings → General**, scroll to **Danger Zone → Transfer ownership** and enter the City's organization name.
3. GitHub moves everything, including history, issues and collaborators. The old link redirects automatically.
4. If the City wants its own web address (e.g. `digitalaccess.cityofpalmdaleca.gov`), their IT team adds one DNS record. Then they enter that address under **Settings → Pages → Custom domain**.

Nothing about the dashboard depends on your account, a paid service or a database. It's plain HTML, CSS and JavaScript files, so any web host the City chooses can serve them as-is.
