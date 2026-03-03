# AIAPGET Unani PYQ Practice

## Current State
- Full-stack MCQ practice app for Unani medicine (AIAPGET exam)
- React frontend with AppHeader (3-dot kebab menu, logo, title), HomeScreen, QuizScreen, ResultsScreen, ReviewScreen, TopicBrowserScreen, HistoryScreen, AdminPanelScreen, SubscriptionPlansScreen, PaymentMethodSelectorScreen
- App logo image already exists at `/assets/generated/app-logo.dim_128x128.png` and is used in AppHeader
- Navigation is screen-state based (no router), managed in App.tsx via `Screen` union type
- Eye-friendly warm parchment theme (teal primary, gold accents)
- PWA support enabled

## Requested Changes (Diff)

### Add
- **Logo**: Make the existing logo in AppHeader more prominent; add logo to new About page and Footer
- **About page**: New screen describing the app — purpose, target audience (AIAPGET aspirants), features overview
- **Contact page**: New screen with contact information (email/support details)
- **Footer with copyright**: Persistent footer visible on non-quiz/results/review screens, with copyright text, navigation links to About/Contact/Privacy Policy
- **Privacy Policy page**: New screen with standard privacy policy content relevant to the app

### Modify
- `App.tsx`: Add new screen types — `about`, `contact`, `privacy` — and render their components; add Footer component below the screen content on applicable screens
- `AppHeader.tsx`: Add navigation links to About, Contact in the dropdown menu

### Remove
- Nothing removed

## Implementation Plan
1. Create `AboutScreen.tsx` page component
2. Create `ContactScreen.tsx` page component
3. Create `PrivacyPolicyScreen.tsx` page component
4. Create `Footer.tsx` component with copyright, nav links to About/Contact/Privacy
5. Update `App.tsx`:
   - Add `about`, `contact`, `privacy` to `Screen` union type
   - Render new screen components
   - Add `Footer` below the main content area (hidden on quiz/results/review)
6. Update `AppHeader.tsx`:
   - Add About and Contact items to `menuItems` array
7. Apply deterministic `data-ocid` markers to all interactive elements
