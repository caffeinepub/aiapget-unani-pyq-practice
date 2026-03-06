# AIAPGET Unani PYQ Practice

## Current State
- Full MCQ practice app for Unani system of medicine
- Admin panel with password protection (Naeem9472) for adding/removing questions
- Subscription system: 7-day free trial, monthly (₹100), yearly (₹800)
- Payment flow: Razorpay link → user submits UTR → admin approves/rejects via Payments tab
- Device binding per subscription
- Questions stored in `var adminQuestions` (heap) — LOST on every canister upgrade
- Payment records stored ONLY in localStorage — NOT shared across devices, lost if admin clears storage

## Requested Changes (Diff)

### Add
- `stable var adminQuestions` in backend so questions persist permanently across upgrades
- `PaymentRecord` type in backend with fields: id, date, plan, amount, utrId, paymentMethod, userId, userName, deviceId, status (#pending | #approved | #rejected), approvedAt, rejectedAt
- `stable var paymentRecords` in backend to store all payment submissions
- Backend functions: `submitPaymentRecord`, `getPaymentRecords`, `approvePayment`, `rejectPayment`, `resetDeviceBinding`, `getPaymentRecordsByUser`
- Admin panel Payments tab reads from backend (not just localStorage) — shows all users' payment records
- When admin approves: backend record updated to #approved; localStorage subscription activated for that user
- When admin rejects: backend record updated to #rejected; user sees rejection notice

### Modify
- `var adminQuestions` → `stable var adminQuestions` (critical fix)
- `var subscriptionSettings` → `stable var subscriptionSettings`
- Payment submission in PaymentMethodSelectorScreen: also calls backend `submitPaymentRecord`
- Admin panel `handleApprovePayment` and `handleRejectPayment`: also call backend `approvePayment` / `rejectPayment`
- Admin panel Payments tab: loads from backend via `getPaymentRecords` on mount, merges with localStorage for backward compatibility

### Remove
- Nothing removed — localStorage fallback kept for backward compatibility

## Implementation Plan
1. Regenerate backend with stable vars and PaymentRecord stable storage + full CRUD
2. Update backend.d.ts bindings (auto-generated)
3. Update useAdminQueries hook: add usePaymentRecords, useSubmitPaymentRecord, useApprovePayment, useRejectPayment, useResetDeviceBinding hooks
4. Update AdminPanelScreen Payments tab: fetch records from backend, show all records, approve/reject via backend
5. Update PaymentMethodSelectorScreen: call submitPaymentRecord on backend when UTR submitted
6. Validate and deploy
