# Specification

## Summary
**Goal:** Fix the correct answer option text in the quiz so it is visible and bold after the answer is revealed.

**Planned changes:**
- In `QuizScreen.tsx`, update the correct answer highlighted state to display the option text in a high-contrast, dark color (e.g., deep teal or dark green) and bold font weight, so it is legible against the teal/green highlighted background.
- Apply the same text color and bold styling fix in `ReviewScreen.tsx` wherever the correct answer option is highlighted.

**User-visible outcome:** After selecting an answer in the quiz, the correct option's text is clearly visible (dark, high-contrast color) and bold against the highlighted background, instead of being invisible as shown in the screenshot where option B's text disappears.
