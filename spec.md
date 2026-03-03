# Specification

## Summary
**Goal:** Apply an eye-friendly, high-contrast color theme across all screens while preserving the existing Unani/Islamic manuscript aesthetic (parchment, teal, and gold family).

**Planned changes:**
- Update global CSS custom properties in `index.css` to use a softer, lower-saturation warm background (e.g. `#f7f3ec`), muted medium teal accents, darkened gold accent, and body/heading text colors meeting WCAG AA 4.5:1 contrast ratio.
- Update Tailwind config color tokens (`foreground`, `muted-foreground`, `primary-foreground`, `background`, `card`, `popover`, etc.) to align with the new eye-friendly palette so utility classes produce accessible results consistently.
- Audit and fix text color declarations in `QuizScreen.tsx`, `ReviewScreen.tsx`, `ResultsScreen.tsx`, `AdminPanelScreen.tsx`, `TopicBrowserScreen.tsx`, `HistoryScreen.tsx`, `HomeScreen.tsx`, `SubscriptionPlansScreen.tsx`, and `AppHeader.tsx` to ensure all text elements (question text, option labels, headings, stats, form labels, nav links, timer) are clearly visible against their backgrounds in all states (selected, highlighted, correct, incorrect, warning).

**User-visible outcome:** All screens display readable, high-contrast text on soft, glare-free backgrounds — no text appears invisible or blends into its background — while the overall parchment/teal/gold manuscript look is preserved.
