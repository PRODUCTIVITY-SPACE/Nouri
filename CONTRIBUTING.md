# Contributing to Nouri

Welcome to the Nouri codebase. This guide explains how work flows from an issue to a merged pull request. Please read it in full before you start working on anything.

---

## Table of Contents

1. [Branch Strategy](#branch-strategy)
2. [Working on an Issue](#working-on-an-issue)
3. [Commit Messages](#commit-messages)
4. [Opening a Pull Request](#opening-a-pull-request)
5. [Linking PRs to Issues](#linking-prs-to-issues)
6. [Code Review Rules](#code-review-rules)
7. [What Happens When Your PR is Merged](#what-happens-when-your-pr-is-merged)

---

## Branch Strategy

```
main          ← Production. Never pushed to directly. Only merged via PR from develop.
  └── develop ← Integration branch. Never pushed to directly. Only merged via PRs from feature branches.
        ├── feature/42-cart-sidebar
        ├── feature/15-menu-category-tabs
        ├── fix/67-cart-count-wrong-on-mobile
        └── chore/update-dependencies
```

### Rules

| Branch | Who pushes? | Protected? |
|---|---|---|
| `main` | Nobody directly — only PRs from `develop` | ✅ Yes |
| `develop` | Nobody directly — only PRs from feature branches | ✅ Yes |
| `feature/*` | The developer working on that issue | No |
| `fix/*` | The developer fixing that bug | No |
| `chore/*` | For maintenance work with no linked issue | No |

### Branch Naming

Always prefix with the issue number:

```
feature/{issue-number}-{short-description}
fix/{issue-number}-{short-description}
chore/{short-description}
```

Examples:
- `feature/3-responsive-navbar`
- `feature/7-menu-category-tabs`
- `fix/12-cart-count-badge-missing`
- `chore/update-eslint-config`

---

## Working on an Issue

1. **Assign yourself** to the issue on GitHub before starting.
2. Create your branch from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/42-your-feature-name
   ```
3. Work on the issue. Commit often with clear messages (see below).
4. Push your branch and open a pull request against `develop`.

---

## Commit Messages

Use imperative tense. Keep the first line under 72 characters.

```
✅  Add cart sidebar slide animation
✅  Fix item count badge not updating on quantity change
✅  Remove hardcoded colour from MenuCard component
❌  fixed stuff
❌  WIP
❌  changes
```

---

## Opening a Pull Request

- PR title should match the issue title or be a concise description of the change.
- Every PR **must** target `develop` (not `main`).
- Fill in the PR template fully — do not delete sections.
- Add at least one reviewer before marking as Ready for Review.
- Mark as **Draft** while still in progress.

---

## Linking PRs to Issues

To automatically close an issue when your PR is merged, include one of these keywords in the PR body, followed by the issue number:

```
Closes #42
Fixes #42
Resolves #42
```

When the PR is merged into `develop`, GitHub will automatically close issue #42.

**Example PR body:**
```
## Summary
Implements the cart sidebar slide-over with quantity controls.

Closes #6
```

You can close multiple issues in one PR:
```
Closes #6
Closes #7
```

---

## Code Review Rules

- A PR requires **at least 1 approving review** before it can be merged.
- CI checks (lint, type-check, build) must pass before merging.
- No force-pushing to `develop` or `main`.
- If changes are requested, push a new commit — do not force-push (it resets the review).
- The author should not merge their own PR unless the team has agreed.

---

## What Happens When Your PR is Merged

1. Your feature branch is merged into `develop`.
2. The linked GitHub Issue is automatically closed.
3. The issue moves to **Done** on the project board.
4. Delete your feature branch after merging — keep the repo clean.

---

## Getting Help

Open a Discussion in the GitHub repo or message the team on Slack. Do not open a new issue to ask questions.
