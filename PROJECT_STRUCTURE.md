# Project Structure Guide

## Philosophy

This project follows a **responsibility-based architecture**.

Folders represent **responsibilities**, not technologies.

Technologies may change.

Libraries may change.

Frameworks may change.

The responsibilities should remain the same.

---

## Core Principles

- One folder = One responsibility
- Keep the project lightweight
- Avoid duplicate logic
- Keep folders stable for years
- Organize by purpose, not by feature
- Add new folders only when a new responsibility exists

---

# Folder Guide

## app

Application entry point.

Contains routes, layouts, pages and API routes.

Responsible for navigation.

---

## components

Everything the user can see.

UI Components

Layout Components

Page Sections

Shared Components

---

## content

Website content.

Today it may contain markdown.

Tomorrow it may contain MDX.

Later it may be replaced with a CMS.

The responsibility stays the same.

Content belongs here.

---

## seo

Everything related to Search.

Metadata

Schema

Robots

Sitemap

OpenGraph

LLMS

AI Search

---

## lib

Shared integrations.

External services.

Third-party SDKs.

Infrastructure.

Examples

Google Analytics

Resend

Three.js

Framer Motion helpers

Image helpers

Environment

Logging

---

## config

Application configuration.

Navigation

Social Links

Site Information

Constants

Settings

---

## hooks

Reusable React Hooks.

---

## utils

Pure helper functions.

No UI.

No business logic.

---

## types

Global TypeScript types.

Interfaces.

Enums.

---

## styles

Global styling.

Animations.

Variables.

---

## public

Static assets.

Fonts

Icons

Images

Documents

Only assets that rarely change belong here.

---

# Long-Term Vision

The project should survive framework updates.

Whether the project uses

- Next.js
- React
- Three.js
- MDX
- Sanity
- Resend
- GSAP
- Framer Motion

the folder responsibilities remain unchanged.

Only implementations change.

The architecture remains stable.

---

# Future Expansion

Possible future additions:

- Blog
- Case Studies
- Sanity CMS
- AI Search
- Analytics
- Dashboard
- Newsletter
- Search

These should extend the existing responsibilities rather than changing the project structure.

The goal is to keep this architecture maintainable for at least 2–3 years with minimal structural changes.













My only suggestion

I would not create folders like sanity, analytics, or three until you actually adopt those technologies. Instead, let them fit into the existing responsibilities:

Sanity → content (or later add sanity only when it's in use)
Resend → lib
Google Analytics → lib
Three.js → components for scenes and lib for setup/helpers
Framer Motion → components and lib
Blog → content
Case Studies → content