import React, { useEffect, useState } from "react";
import "./Pg2.css";
import Navbar from "./Navbar";
import db from "./firebase";
import Popup from "./Popup";
import { Link } from "react-router-dom";

function Pg2() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [popup, setPopup] = useState(false);

  function getData() {
    db.collection("customers")
      .orderBy("sno", "asc")
      .onSnapshot((snapshot) => {
        const items = [];
        snapshot.docs.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
        });

        // Method 2(use return when using string instead of array):    db.collection('customers').orderBy('sno','asc').onSnapshot((snapshot)=>{

        //   const items= snapshot.docs.map((doc)=>{
        //   return {...doc.data(),key:doc.id}}
        //   )
        // console.log(items)

        setData(items);
        setLoader(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pg2">
      <div className="pg2_navbar">
        <Navbar />
      </div>

      <div className="pg2_body">
        <button
          type="button"
          onClick={() => {
            setPopup(true);
          }}
          className="b1"
        >
          {" "}
          Send Money
        </button>
        {popup && <Popup close={setPopup} />}

        <Link to="/transactions">
          {" "}
          <button className="b2" type="submit">
            Transaction Details
          </button>
        </Link>
      </div>

      <div className="pg2_table">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Account Number</th>
              <th scope="col">Bank Balance</th>
            </tr>
          </thead>
          <tbody>
            {loader === false &&
              data.map((customer) => {
                return (
                  <tr>
                    <th scope="row">{customer.sno}</th>
                    <td>{customer.name}</td>
                    <td>{customer.accountNo}</td>
                    <td>{customer.bankBalance}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Pg2;
