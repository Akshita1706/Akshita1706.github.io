import React, { useState, useEffect } from "react";

import "./Popup.css";
import db from "./firebase";

function Popup({ close }) {
  const [amount, setAmount] = useState();
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const items = [];
    const sub = db.collection("customers").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        items.push({ ...doc.data(), key: doc.id });
      });
      setPosts(items);
    });
    return () => sub();
  }, []);

  const transferMoney = async (e) => {
    e.preventDefault();

    close(false);

    var rec = posts.filter((p) => {
      return p.name === recipient;
    });

    var sen = posts.filter((p) => {
      return p.name === sender;
    });

    if (sen[0].bankBalance < parseFloat(amount)) {
      alert("Sender doesn't have enough funds.😢");
    } else {
      var recipientNewBalance = rec[0].bankBalance + parseFloat(amount);
      var senderNewBalance = sen[0].bankBalance - parseFloat(amount);

      await db.collection("customers").doc(sen[0].key).update({
        bankBalance: senderNewBalance,
      });

      await db
        .collection("customers")
        .doc(rec[0].key)
        .update({
          bankBalance: recipientNewBalance,
        })
        .then(() => {
          alert("Money Transferred Successfully🙌 !!!!");
        });

      await db.collection("transactions").add({
        giver: sender,
        receiver: recipient,
        amount_transfered: amount,
        date: Date(Date.now()).toString(),
      });

      window.location.reload();
      setAmount(0);
      setRecipient("");
      setSender("");
    }
  };

  return (
    <div className="popup">
      <div className="popupBackground">
        <form className="popupContainer">
          <div className="sender">
            <div className="sender_input">
              <select
                className="form-control form-control-lg"
                native
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                label="From"
              >
                <option value="" disabled selected hidden>
                  Sender's name
                </option>
                <option aria-label="None" value="" />
                {posts.map((data) => {
                  return (
                    <option key={Math.random().toString(36).substr(2, 9)}>
                      {data.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="recipient">
            <div className="recipient_input">
              <select
                className="form-control form-control-lg"
                native
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                label="From"
              >
                <option value="" disabled selected hidden>
                  Recipient's name
                </option>
                <option aria-label="None" value="" />
                {posts.map((data) => {
                  return (
                    <option key={Math.random().toString(36).substr(2, 9)}>
                      {data.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="amount">
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount to be transfered (in rupees)"
              type="number"
            />
          </div>

          <div className="footer">
            <button
              className="b1"
              onClick={() => {
                close(false);
              }}
            >
              Cancel{" "}
            </button>

            <button className="b2" onClick={transferMoney}>
              Transfer{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
