import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./BuyPage.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref as databaseRef, child, get } from "firebase/database";
import SellCards from "./components/SellCards";


const firebaseConfig = {
  apiKey: "AIzaSyCMM56fnkSA1P5p4b6plQso_3001MpEEYI",
  authDomain: "kgpsellex.firebaseapp.com",
  projectId: "kgpsellex",
  storageBucket: "kgpsellex.appspot.com",
  messagingSenderId: "750261842834",
  appId: "1:750261842834:web:309fb0919f637e0932074b",
  measurementId: "G-ZTC4HQ2M0V",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function BuyPage() {
  const dbRef = databaseRef(getDatabase());

  const [dataObj, setDataObj] = useState([]);




  const fetchData = () => {
    get(child(dbRef, `items/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const dataArray = Object.values(data);
        //   console.log(data);
          setDataObj(dataArray);
        //   console.log(rollNoArray)
        } else {
          alert("No data to display!");
        }
      })
      .catch((error) => {
        alert("Some error occured! Please try again later.");
      });

  };
  useEffect(() => {
    fetchData();
  });


  return (
    
    <>
      <Navbar />
      {
        dataObj.map((item, key)=>{
            return(
                <SellCards key={key} seller={item.username} rollno={item.rollno} hall={item.hall} email={item.email} phno={item.phno} pdtype={item.product} descp={item.descp} price={item.amt} status={item.status}/>
            );
            
        })
      }
    </>
  );
}

export default BuyPage;
