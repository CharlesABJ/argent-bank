import Account from "./components/Account/Account";

function User() {
  return (
    <div className="User">
      <h2>
        Welcome back
        <span>Tony Jarvis</span>
      </h2>
      <button>Edit Name</button>

      <div className="accounts-zone">
        <Account
          dataAccount={{
            name: "Argent Bank Checking (x8349)",
            balance: "$2,082.79",
            balanceDescription: "Available balance",
          }}
        />
        <Account
          dataAccount={{
            name: "Argent Bank Savings (x6712)",
            balance: "$10,001.12",
            balanceDescription: "Available balance",
          }}
        />
        <Account
          dataAccount={{
            name: "Argent Bank Credit Card (x8349)",
            balance: "$2,082.79",
            balanceDescription: "Current balance",
          }}
        />
      </div>
    </div>
  );
}

export default User;
