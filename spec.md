# Specification

## Summary
**Goal:** Fix admin-added questions not appearing in topic/category/year filters across the app.

**Planned changes:**
- Update the backend (`main.mo`) to unify hardcoded and admin-added questions into a single source, so `getQuestions`, `getByTopic`, `getByYear`, and the random quiz set function all draw from the combined question pool.
- Update the frontend Topic Browser screen and any year/topic filter screens to merge backend-stored (admin-added) questions with the local static question bank so both sets are visible and queryable.

**User-visible outcome:** Questions added via the Admin Panel now appear in their assigned topic and year categories in the Topic Browser, Year Browser, and random quiz sets, alongside the existing static questions.
