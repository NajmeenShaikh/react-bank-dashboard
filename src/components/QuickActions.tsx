interface QuickActionsProps {
  onAction: (label: string) => void;
}

const actions = ["Transfer money", "Pay a bill", "Manage beneficiaries", "View statements"];

export function QuickActions({ onAction }: QuickActionsProps) {
  return (
    <section className="panel" aria-labelledby="actions-heading">
      <p className="eyebrow">Shortcuts</p>
      <h2 id="actions-heading">Quick actions</h2>
      <div className="actions-grid">
        {actions.map((action) => (
          <button key={action} className="action-button" type="button" onClick={() => onAction(action)}>
            {action}
          </button>
        ))}
      </div>
    </section>
  );
}
