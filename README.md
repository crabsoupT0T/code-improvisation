# Code Improvisation

**A public gathering place where developers improvise, share, remix, and collaboratively improve code — like Reddit, but for building together.**

Welcome. This repo is meant to be a living workshop, not a finished product.

Suggested topics: `community` · `open-source` · `hacktoberfest` · `javascript` · `collaboration`

## The idea

Coders assemble here the way people assemble on Reddit:

- Someone drops a half-finished idea, a snippet, a bug, a wild experiment.
- Others riff on it — refactor, extend, roast, remix, ship a better version.
- Threads become features. Comments become PRs. Improvisation becomes the codebase.

No single owner of the *direction*. The community steers what gets built.

## How to participate (this is the whole point)

1. **Open an issue** — use **Prompt / idea** or **Remix this**.
2. **Comment** with code, critiques, or a fork of the idea.
3. **Open a pull request** that lands the improvisation.
4. Turn on **Discussions** in repo settings for subreddit-style categories.

Start here: [issue #1 — first room thread](https://github.com/crabsoupT0T/code-improvisation/issues/1)

Good first moves:
- Add a snippet under `stage/` — unfinished code is welcome.
- Improve someone else's snippet in `remixes/`.
- Improve the public page in `site/`.

## Public site

The gathering page lives in `site/`.
A GitHub Actions workflow deploys it to GitHub Pages.

After you enable Pages (Settings → Pages → Source: GitHub Actions), it should appear at:

https://crabsoupT0T.github.io/code-improvisation/

## Repo layout

```
stage/          # unfinished ideas and snippets
remixes/        # improved or forked versions
site/           # public web face
.github/        # issue + PR templates, Pages workflow
```

## Ground rules

- Be kind. Roast the code, not the person.
- Credit the original improvisation when you remix it.
- Small PRs ship faster than grand designs.
- If you put it here, others may build on it.

## License

MIT — take it, change it, ship it.

---

If you found this because you wanted a place where coders *assemble*, you are already in the right room. Open an issue. Drop a file. Improvise.
