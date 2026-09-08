import type { Transaction } from "../types/banking";

interface TransactionTableProps {
  transactions: Transaction[];
}

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <section className="panel" aria-labelledby="transactions-heading">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Account activity</p>
          <h2 id="transactions-heading">Recent transactions</h2>
        </div>
        <button className="secondary-button" type="button">View all</button>
      </div>

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
            {transactions.map((transaction) => {
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
      </div>
    </section>
  );
}
