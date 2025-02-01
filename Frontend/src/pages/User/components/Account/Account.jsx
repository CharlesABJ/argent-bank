function Account({ dataAccount }) {
  return (
    <div className="Account">
      <div className="account-name">{dataAccount.name}</div>
      <div className="container">
        <div className="account-balance">
          <div className="balance">{dataAccount.balance}</div>
          <div className="view-transactions">View transactions</div>
        </div>
        <div className="balance-description">
          {dataAccount.balanceDescription}
        </div>
      </div>
    </div>
  );
}

export default Account;
