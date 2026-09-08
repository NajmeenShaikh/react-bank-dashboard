# SecureBank Dashboard — React + TypeScript

An enterprise-style banking dashboard built to demonstrate production-oriented frontend engineering for **BFSI / FinTech applications**.

The project focuses on typed domain models, server-state management, reusable components, responsive UI, accessible interactions, loading/error states, automated tests, and a clean service boundary ready for REST API integration.

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
- Loading state with accessible status announcement
- Error state with accessible retry action
- Responsive layout
- Keyboard-visible focus states
- Semantic HTML and accessible status messaging
- Typed banking domain models
- TanStack Query server-state layer
- Isolated service/API layer
- Vitest + React Testing Library test coverage for core UI states and API contract
- GitHub Actions quality pipeline

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
│   ├── bankingApi.ts
│   └── bankingApi.test.ts
├── test/
│   └── setup.ts
├── types/
│   └── banking.ts
├── App.test.tsx
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
- Accessible table headers and caption
- `role="status"` with `aria-live` for loading/success notifications
- `role="alert"` for blocking error states
- `aria-busy` while dashboard data is loading
- Keyboard-visible focus indicators
- Buttons for actions rather than clickable non-interactive elements
- Status labels that include text rather than relying on color alone
- Responsive layouts for smaller screens

## 🧪 Testing

The project uses **Vitest + React Testing Library**.

Covered scenarios include:

1. Dashboard loading state renders as an accessible status.
2. Successful account data and transaction rows render.
3. Notification count is exposed accessibly.
4. Error state exposes a retry action and invokes refetch.
5. Banking service returns the expected typed dashboard contract.

Run tests locally:

```bash
npm test
```

## 🤖 CI Quality Gate

GitHub Actions runs on pushes and pull requests targeting `main` and performs:

```text
Install dependencies
      ↓
Lint
      ↓
Vitest unit/component tests
      ↓
TypeScript + Vite production build
```

The workflow is defined in `.github/workflows/ci.yml`.

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

Tests:

```bash
npm test
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
- [x] Vitest + React Testing Library
- [x] GitHub Actions CI configuration
- [ ] Real REST API integration
- [ ] Authentication / authorization
- [ ] Fund transfer workflow
- [ ] Beneficiary management
- [ ] Loans and EMI workflows
- [ ] Spending charts
- [ ] E2E testing

## 👩‍💻 Author

**Najmeen Shaikh** — React UI Frontend Developer focused on React, TypeScript, JavaScript, REST APIs, and BFSI / FinTech applications.

GitHub: https://github.com/NajmeenShaikh
