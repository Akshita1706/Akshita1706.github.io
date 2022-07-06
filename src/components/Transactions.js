import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Transactions.css";
import db from "./firebase";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    db.collection("transactions")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        setTransactions(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="transactions">
      <div className="transactions_navbar">
        <Navbar />
      </div>
      <div className="transactions_heading">
        <h2> TRANSACTION HISTORY</h2>
      </div>

      <div className="transactions_table">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Sender</th>
              <th scope="col">Recipient</th>
              <th scope="col">Amount Transfered</th>
              <th scope="col">Date and time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((customer, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{customer.giver}</td>
                  <td>{customer.receiver}</td>
                  <td>{customer.amount_transfered}</td>
                  <td>{customer.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
