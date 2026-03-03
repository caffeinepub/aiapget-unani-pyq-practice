# Specification

## Summary
**Goal:** Add a Skip button and a per-question countdown timer to the QuizScreen in the AIAPGET Unani PYQ app.

**Planned changes:**
- Add a "Skip" button next to the existing "Next" button on the quiz card; clicking it records the question as skipped (no answer) and advances to the next question
- Hide or repurpose the Skip button on the last question so the quiz can still be completed
- Track skipped questions in the answers array passed to `onComplete` so the ResultsScreen can display a skipped count
- Update ResultsScreen to show the number of skipped questions
- Add a countdown timer displayed prominently at the top of the quiz card, counting down from 60 seconds per question in MM:SS format
- Auto-skip the current question when the timer reaches zero and advance to the next question
- Reset the timer to 60 seconds on every new question (via Next, Skip, or auto-skip)
- Stop the timer when the user selects an answer or manually clicks Next/Skip
- Turn the timer text red when 10 or fewer seconds remain
- Style both the Skip button and timer consistently with the existing parchment/teal/gold theme

**User-visible outcome:** During the quiz, users see a live 60-second countdown timer and a Skip button on each question. They can skip questions freely, the timer auto-skips if they run out of time, and the results screen shows how many questions were skipped.
