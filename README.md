# SecureBank Dashboard — React + TypeScript

An enterprise-style banking dashboard built to demonstrate production-oriented frontend engineering for **BFSI / FinTech applications**.

The project demonstrates typed banking domain models, server-state management, reusable components, responsive UI, accessibility, automated tests, CI, and a clean service boundary ready for REST API integration.

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
- Loading and error states with retry
- Responsive layout
- Keyboard-visible focus states
- Semantic HTML and accessible status messaging
- Strict TypeScript banking domain models
- TanStack Query server-state layer
- Isolated service/API layer
- Vitest + React Testing Library coverage for core UI states and API contract
- GitHub Actions quality pipeline

## 🧱 Architecture

```text
UI Components
      ↓
useDashboard()
      ↓
TanStack Query
      ↓
bankingApi.ts
      ↓
REST API / Banking Backend
```

The current service returns mock data. In production, the service can be replaced with HTTP calls without moving network concerns into presentational components.

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

### TypeScript

Banking applications contain important domain concepts such as accounts, transactions, balances, statuses, and payment requests. Strong typing makes contracts explicit and reduces accidental misuse during refactoring.

### TanStack Query

Server state has different lifecycle concerns from local UI state. TanStack Query manages caching, loading/error states, retries, and refetching while keeping components focused on rendering and interaction.

### Service layer

Components should not know whether data comes from mock data, REST, or another backend. The service boundary makes the UI easier to test and the API integration easier to replace.

## 🧪 Testing

The project uses **Vitest + React Testing Library**.

Covered scenarios include:

1. Dashboard loading state renders as an accessible status.
2. Successful account data and transaction rows render.
3. Notification information is exposed accessibly.
4. Error state exposes a retry action and invokes refetch.
5. Banking service returns the expected typed dashboard contract.

### Commands

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
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

## ♿ Accessibility

- Semantic landmarks and headings
- Accessible table headers and caption
- `role="status"` for loading/success messaging
- `role="alert"` for errors
- `aria-live` announcements for important state changes
- `aria-busy` while dashboard data is loading
- Buttons for actions rather than clickable non-interactive elements
- Status labels with text rather than color alone
- Keyboard-visible focus indicators
- Responsive layouts for smaller screens

## 🔐 Security

This repository contains simulated banking information only. It does not process real money, credentials, payment-card information, or customer PII.

Never commit secrets, API keys, authentication tokens, or real financial data.

## 📸 Screenshots / Demo

Add current screenshots after final visual polish:

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
