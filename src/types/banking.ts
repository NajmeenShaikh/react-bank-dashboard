export type TransactionStatus = "SUCCESS" | "PENDING" | "FAILED";
export type TransactionType = "DEBIT" | "CREDIT";

export interface Account {
  id: string;
  accountNumber: string;
  type: "Savings" | "Current";
  balance: number;
  currency: "INR";
}

export interface Transaction {
  id: string;
  merchant: string;
  type: TransactionType;
  amount: number;
  date: string;
  status: TransactionStatus;
}

export interface DashboardSummary {
  account: Account;
  transactions: Transaction[];
  monthlySpending: number;
  pendingTransfers: number;
  unreadNotifications: number;
}
