import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { useDashboard } from "./hooks/useDashboard";

vi.mock("./hooks/useDashboard", () => ({
  useDashboard: vi.fn(),
}));

const mockedUseDashboard = vi.mocked(useDashboard);

const dashboardData = {
  account: {
    id: "ACC-001",
    accountNumber: "•••• 4821",
    type: "Savings" as const,
    balance: 125840.5,
    currency: "INR" as const,
  },
  transactions: [
    {
      id: "TXN-1001",
      merchant: "Metro Utilities",
      type: "DEBIT" as const,
      amount: 2450,
      date: "2026-09-07",
      status: "SUCCESS" as const,
    },
  ],
  monthlySpending: 28450,
  pendingTransfers: 1,
  unreadNotifications: 3,
};

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows an accessible loading state", () => {
    mockedUseDashboard.mockReturnValue({ isPending: true, isError: false, data: undefined } as ReturnType<typeof useDashboard>);

    render(<App />);

    expect(screen.getByRole("status")).toHaveTextContent("Loading your banking dashboard");
  });

  it("renders account and transaction data", () => {
    mockedUseDashboard.mockReturnValue({ isPending: false, isError: false, data: dashboardData } as ReturnType<typeof useDashboard>);

    render(<App />);

    expect(screen.getByRole("heading", { name: /good morning/i })).toBeInTheDocument();
    expect(screen.getByRole("table", { name: /recent banking transactions/i })).toBeInTheDocument();
    expect(screen.getByText("Metro Utilities")).toBeInTheDocument();
    expect(screen.getByText("Pending transfers")).toBeInTheDocument();
    expect(screen.getByLabelText("3 unread notifications")).toBeInTheDocument();
  });

  it("exposes an actionable retry control on error", () => {
    const refetch = vi.fn();
    mockedUseDashboard.mockReturnValue({ isPending: false, isError: true, data: undefined, refetch } as ReturnType<typeof useDashboard>);

    render(<App />);

    expect(screen.getByRole("alert")).toHaveTextContent("couldn't load your dashboard");
    fireEvent.click(screen.getByRole("button", { name: "Retry" }));
    expect(refetch).toHaveBeenCalledTimes(1);
  });
});
