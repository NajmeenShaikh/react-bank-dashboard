import type { Account, DashboardSummary, Transaction } from "../types/banking";

const account: Account = {
  id: "ACC-001",
  accountNumber: "•••• 4821",
  type: "Savings",
  balance: 125840.5,
  currency: "INR",
};

const transactions: Transaction[] = [
  { id: "TXN-1001", merchant: "Metro Utilities", type: "DEBIT", amount: 2450, date: "2026-09-07", status: "SUCCESS" },
  { id: "TXN-1002", merchant: "Salary Credit", type: "CREDIT", amount: 85000, date: "2026-09-01", status: "SUCCESS" },
  { id: "TXN-1003", merchant: "Travel Booking", type: "DEBIT", amount: 12400, date: "2026-08-28", status: "PENDING" },
  { id: "TXN-1004", merchant: "Grocery Mart", type: "DEBIT", amount: 3280, date: "2026-08-25", status: "SUCCESS" },
];

export async function getDashboardSummary(): Promise<DashboardSummary> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return {
    account,
    transactions,
    monthlySpending: 28450,
    pendingTransfers: 1,
    unreadNotifications: 3,
  };
}
