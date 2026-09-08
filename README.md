# SecureBank Dashboard — React + TypeScript

An enterprise-style banking dashboard built to demonstrate production-oriented frontend engineering for **BFSI / FinTech applications**.

The project focuses on typed domain models, server-state management, reusable components, responsive UI, accessible interactions, loading/error states, and a clean service boundary ready for REST API integration.

## 🎯 Business Use Case

A digital banking customer needs a single place to monitor account balance, recent transactions, spending, pending transfers, notifications, and common banking services.

This portfolio application models that experience with realistic mock data while keeping the frontend architecture ready to connect to a real backend.

## ✨ Features

- Account balance overview
- Recent transaction table
- Debit / credit transaction presentation
- Transaction status: success, pending, failed
- Monthly spending summary
- Pending-transfer monitoring
- Notification count
- Quick banking actions
- Cards, Loans & EMI, Beneficiaries, and Analytics modules
- Loading state
- Error state with retry
- Responsive layout
- Keyboard-visible focus states
- Semantic HTML and accessible status messaging
- Typed banking domain models
- TanStack Query server-state layer
- Isolated service/API layer

## 🧱 Architecture

```text
src/
├── components/
│   ├── AccountCard.tsx
│   ├── QuickActions.tsx
│   ├── StatCard.tsx
│   └── TransactionTable.tsx
├── hooks/
│   └── useDashboard.ts
├── services/
│   └── bankingApi.ts
├── types/
│   └── banking.ts
├── App.tsx
├── main.tsx
└── styles.css
```

### Data flow

```text
UI Components
      ↓
useDashboard()
      ↓
TanStack Query
      ↓
bankingApi.ts
      ↓
REST API / Backend
```

The current service returns mock data. In a production application, the service can be replaced with HTTP calls without moving network concerns into presentational components.

## 🔌 REST API Contract — Production Target

```text
GET  /api/accounts
GET  /api/transactions
GET  /api/beneficiaries
POST /api/transfers
GET  /api/loans
GET  /api/notifications
```

Example transfer contract:

```ts
interface FundTransferRequest {
  fromAccountId: string;
  beneficiaryId: string;
  amount: number;
  remarks?: string;
}
```

## 🧠 Engineering Decisions

### Why TypeScript?

Banking applications contain important domain concepts such as accounts, transactions, balances, statuses, and payment requests. Strong typing reduces accidental misuse and makes contracts easier to understand and refactor.

### Why TanStack Query?

Server state has different lifecycle concerns from local UI state. TanStack Query provides caching, loading/error states, retries, and refetching while keeping components focused on rendering and user interaction.

### Why a service layer?

Components should not know whether data comes from mock data, REST, or another backend. The service boundary makes the UI easier to test and the API integration easier to replace.

## ♿ Accessibility

The dashboard uses:

- Semantic landmarks and headings
- Accessible table headers
- `role="status"` and `role="alert"` for important state changes
- Keyboard-visible focus indicators
- Buttons for actions rather than clickable non-interactive elements
- Status labels that include text rather than relying on color alone
- Responsive layouts for smaller screens

## 🧪 Testing Plan

Recommended next test layer:

- Vitest
- React Testing Library

Priority scenarios:

1. Dashboard loading state renders.
2. Successful account data renders.
3. Error state exposes a retry action.
4. Transaction rows render with stable IDs.
5. Debit and credit values are presented correctly.
6. Quick actions provide accessible buttons.
7. Mobile layout remains usable.

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## 🔐 Security

This repository contains simulated banking information only. It does not process real money, credentials, payment-card information, or customer PII.

Never commit secrets, API keys, authentication tokens, or real financial data.

## 📸 Screenshots / Demo

Add screenshots after the final visual polish:

- Dashboard overview
- Account summary
- Transaction history
- Responsive mobile view
- Loading/error state

## 🗺️ Roadmap

- [x] React + TypeScript foundation
- [x] Typed banking models
- [x] Service/API boundary
- [x] TanStack Query integration
- [x] Responsive banking dashboard
- [x] Loading/error states
- [x] Accessibility foundation
- [ ] Real REST API integration
- [ ] Authentication / authorization
- [ ] Fund transfer workflow
- [ ] Beneficiary management
- [ ] Loans and EMI workflows
- [ ] Spending charts
- [ ] Vitest + React Testing Library
- [ ] GitHub Actions CI
- [ ] E2E testing

## 👩‍💻 Author

**Najmeen Shaikh** — React UI Frontend Developer focused on React, TypeScript, JavaScript, REST APIs, and BFSI / FinTech applications.

GitHub: https://github.com/NajmeenShaikh
