import type { Account } from "../types/banking";

interface AccountCardProps {
  account: Account;
}

export function AccountCard({ account }: AccountCardProps) {
  const balance = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: account.currency,
    maximumFractionDigits: 2,
  }).format(account.balance);

  return (
    <section className="account-card" aria-labelledby="account-heading">
      <div>
        <p className="eyebrow">{account.type} account</p>
        <h2 id="account-heading">{account.accountNumber}</h2>
      </div>
      <div>
        <p className="eyebrow">Available balance</p>
        <p className="account-balance">{balance}</p>
      </div>
    </section>
  );
}
