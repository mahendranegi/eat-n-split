import React, { useState } from "react";

function Bill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [expenses, setExpenses] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const friendExpense = bill ? bill - expenses : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !expenses) return;

    const value =
      whoIsPaying === "user"
        ? bill - expenses
        : -expenses;

    onSplitBill(value);
  }

  return (
    <section className="billSection">
      <h2>Split a bill with {friend.name}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Bill Value</label>

          <input
            type="number"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Your Expense</label>

          <input
            type="number"
            value={expenses}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value <= bill) {
                setExpenses(value);
              }
            }}
          />
        </div>

        <div>
          <label>{friend.name}'s Expense</label>

          <input value={friendExpense} disabled />
        </div>

        <div>
          <label>Who is paying?</label>

          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">{friend.name}</option>
          </select>
        </div>

        <button className="btnPrimary">
          Split Bill
        </button>
      </form>
    </section>
  );
}

export default Bill;