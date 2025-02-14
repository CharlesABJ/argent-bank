function Account({ dataAccount }) {
  return (
    <div className="Account">
      <div className="infos">
        <div className="account-name">{dataAccount.name}</div>
        <div className="account-balance">{dataAccount.balance}</div>
        <div className="balance-description">
          {dataAccount.balanceDescription}
        </div>
      </div>

      <div className="actions">
        <div className="view-transactions">View transactions</div>
      </div>
    </div>
  );
}

export default Account;
