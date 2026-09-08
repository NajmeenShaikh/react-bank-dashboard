import { describe, expect, it, vi } from "vitest";
import { getDashboardSummary } from "./bankingApi";

describe("getDashboardSummary", () => {
  it("returns the expected banking dashboard contract", async () => {
    vi.useFakeTimers();

    const promise = getDashboardSummary();
    await vi.advanceTimersByTimeAsync(300);
    const summary = await promise;

    expect(summary.account.currency).toBe("INR");
    expect(summary.account.balance).toBeGreaterThan(0);
    expect(summary.transactions).toHaveLength(4);
    expect(summary.transactions[0]).toMatchObject({
      id: "TXN-1001",
      type: "DEBIT",
      status: "SUCCESS",
    });
    expect(summary.monthlySpending).toBe(28450);
    expect(summary.pendingTransfers).toBe(1);
    expect(summary.unreadNotifications).toBe(3);

    vi.useRealTimers();
  });
});
