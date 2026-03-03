# Specification

## Summary
**Goal:** Remove the "Unauthorized: Only admins can add questions" error from the Admin Panel by stripping all authorization guards from the backend functions and eliminating the frontend error display.

**Planned changes:**
- In `backend/main.mo`, remove all role/principal checks from `addQuestion` and `getAdminQuestions` so both functions accept calls from any caller without trapping or rejecting.
- In `AdminPanelScreen.tsx`, remove the frontend error banner and any conditional logic that displays the "Unauthorized: Only admins can add questions" message or hides the Add Question form based on role checks.
- Keep the password gate (`Naeem9472`) as the sole access control mechanism on the frontend.

**User-visible outcome:** After entering the correct admin password, the Add Question form and Questions list are fully visible and functional with no unauthorized error banner shown.
