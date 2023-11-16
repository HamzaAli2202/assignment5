import React, { useState } from "react";
import { Emp } from "./components/Emp";
import"./components/common.css"


function App() {
 const[empid,setEmpid]=useState();
 const[mail,setMail]=useState("");
 const[cname,setCname]=useState("");
  
  return (
   <div className="main">
    <input type="number" placeholder="Enter Empid" onChange={(e)=>setEmpid(e.target.value)}/>
    <input type="email" placeholder="Enter Email Id" onChange={(e)=>setMail(e.target.value)}/>
    <input type="text" placeholder="Enter Company Name" onChange={(e)=>setCname(e.target.value)}/>
    <Emp empid={empid} email={mail} cname={cname} /> 
   </div>
  );
}

export default App;
