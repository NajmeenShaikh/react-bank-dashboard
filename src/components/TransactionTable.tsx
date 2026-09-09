import { useMemo, useState } from "react";
import type { Transaction, TransactionType } from "../types/banking";

interface TransactionTableProps {
  transactions: Transaction[];
}

type Filter = "ALL" | TransactionType;

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

export function TransactionTable({ transactions }: TransactionTableProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("ALL");

  const filteredTransactions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return transactions.filter((transaction) => {
      const matchesType = filter === "ALL" || transaction.type === filter;
      const matchesQuery = !normalizedQuery ||
        transaction.merchant.toLowerCase().includes(normalizedQuery) ||
        transaction.id.toLowerCase().includes(normalizedQuery);
      return matchesType && matchesQuery;
    });
  }, [filter, query, transactions]);

  return (
    <section className="panel" aria-labelledby="transactions-heading">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Account activity</p>
          <h2 id="transactions-heading">Recent transactions</h2>
        </div>
        <button className="secondary-button" type="button">View all</button>
      </div>

      <div className="transaction-controls">
        <label className="search-field">
          <span className="sr-only">Search transactions</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search merchant or transaction ID"
            aria-label="Search transactions"
          />
        </label>
        <div className="filter-group" role="group" aria-label="Filter transactions by type">
          {(["ALL", "DEBIT", "CREDIT"] as Filter[]).map((option) => (
            <button
              key={option}
              className={filter === option ? "filter-button active" : "filter-button"}
              type="button"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option === "ALL" ? "All" : option === "DEBIT" ? "Debit" : "Credit"}
            </button>
          ))}
        </div>
      </div>

      <p className="muted result-count" aria-live="polite">
        Showing {filteredTransactions.length} of {transactions.length} transactions
      </p>

      <div className="table-wrapper">
        <table>
          <caption className="sr-only">Recent banking transactions</caption>
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col" className="amount">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => {
              const isDebit = transaction.type === "DEBIT";
              return (
                <tr key={transaction.id}>
                  <td>
                    <strong>{transaction.merchant}</strong>
                    <span className="muted">{transaction.id}</span>
                  </td>
                  <td>{new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(transaction.date))}</td>
                  <td><span className={`status status-${transaction.status.toLowerCase()}`}>{transaction.status}</span></td>
                  <td className={`amount ${isDebit ? "debit" : "credit"}`}>
                    {isDebit ? "−" : "+"}{currency.format(transaction.amount)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filteredTransactions.length === 0 && <p className="empty-state">No transactions match your search.</p>}
      </div>
    </section>
  );
}
