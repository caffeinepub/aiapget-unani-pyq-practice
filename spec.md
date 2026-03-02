# Specification

## Summary
**Goal:** Add subscription plans screen with Monthly/Yearly options, UPI and other payment method UI, a top-left 3-dot kebab menu for navigation, and backend plan metadata storage.

**Planned changes:**
- Add a vertical 3-dot (kebab) menu icon in the top-left corner of the persistent header that opens a slide-out drawer with links to all main screens (Home, Practice Quiz, Browse by Topic, Browse by Year, Score History, Subscription Plans, Admin Panel), dismissible by tapping outside; styled in the existing parchment/teal/gold theme
- Add a Subscription Plans screen showing Monthly and Yearly plan cards, each with plan name, price, billing cycle, features list, and a Subscribe/Get Started button; yearly plan highlights savings compared to monthly
- Add a payment method selector UI (UI-only mock, no real transactions) triggered when Subscribe is clicked, listing UPI, Credit Card, Debit Card, Net Banking, and Wallets with icons/labels; UPI prominently displayed
- Add `SubscriptionPlan` record type in `backend/main.mo` with stable state for Monthly and Yearly plans, and a `getSubscriptionPlans` query function

**User-visible outcome:** Users can open a navigation drawer from the top-left 3-dot menu on any screen, navigate to a Subscription Plans page, view Monthly and Yearly plan options, and go through a mock payment method selection flow including UPI and other payment methods.
