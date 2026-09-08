import { useState } from "react";
import { AccountCard } from "./components/AccountCard";
import { QuickActions } from "./components/QuickActions";
import { StatCard } from "./components/StatCard";
import { TransactionTable } from "./components/TransactionTable";
import { useDashboard } from "./hooks/useDashboard";

function App() {
  const { data, isPending, isError, refetch } = useDashboard();
  const [notice, setNotice] = useState("");

  if (isPending) {
    return (
      <main className="page-shell">
        <div className="state-card" role="status" aria-live="polite" aria-busy="true">
          Loading your banking dashboard…
        </div>
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="page-shell">
        <div className="state-card" role="alert" aria-live="assertive">
          <h1>We couldn't load your dashboard</h1>
          <p>Please try again. No account data has been changed.</p>
          <button className="primary-button" type="button" onClick={() => refetch()}>
            Retry
          </button>
        </div>
      </main>
    );
  }

  const spending = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(data.monthlySpending);

  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">SecureBank • Digital Banking</p>
          <h1>Good morning, Najmeen</h1>
          <p className="muted">Here’s your financial overview.</p>
        </div>
        <div className="notification" aria-label={`${data.unreadNotifications} unread notifications`}>
          Notifications <span aria-hidden="true">{data.unreadNotifications}</span>
        </div>
      </header>

      {notice && (
        <div className="notice" role="status" aria-live="polite">
          {notice}
        </div>
      )}

      <AccountCard account={data.account} />

      <section className="stats-grid" aria-label="Account summary">
        <StatCard label="Monthly spending" value={spending} detail="Across tracked activity" />
        <StatCard label="Pending transfers" value={String(data.pendingTransfers)} detail="Requires monitoring" />
        <StatCard label="Transactions" value={String(data.transactions.length)} detail="Recent activity loaded" />
      </section>

      <div className="content-grid">
        <TransactionTable transactions={data.transactions} />
        <QuickActions onAction={(label) => setNotice(`${label} is ready for the next workflow step.`)} />
      </div>

      <section className="feature-grid" aria-label="Banking services">
        {[
          ["Cards", "Manage debit and credit cards"],
          ["Loans & EMI", "Track loans and repayment plans"],
          ["Beneficiaries", "Manage trusted transfer recipients"],
          ["Analytics", "Understand spending patterns"],
        ].map(([title, description]) => (
          <article className="feature-card" key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
            <button type="button" onClick={() => setNotice(`${title} module selected.`)}>
              Open module
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
