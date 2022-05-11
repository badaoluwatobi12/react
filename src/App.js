import React, { useEffect, useState } from "react";
import './App.css'
import { collect } from './Component/Fire'
import { getDocs,addDoc } from 'firebase/firestore'

function App() {

  const [email,setMail]=useState("")
  const [pws,setPws]=useState("")
  const [details,setDetails]=useState({email,pws})
  const submit=()=>{
  
    console.log({email,pws})
     addDoc(collect,{email,pws})
     .then(()=>{alert('data added')})
     .catch((err)=>{alert(err.message)})
  }

  
  const [ff,setFF]=useState([])

  const fm=()=>{
    getDocs(collect)
    .then((snapshot)=>{
      let arr=[];
      snapshot.docs.forEach((tobiDoc)=>{
        arr.push({...tobiDoc.data(),id:tobiDoc.id})
      })
      setFF(arr)
    }).catch(()=>console.log('this is error from tobi'))
  }
useEffect(()=>{
  fm()
},[ff])

  return(
    <>
    <button onClick={()=>console.log(ff)}>show de</button>
        <div>  
        <div className="">
            <div className="">
                <input type="text" value={email} onChange={(e)=>setMail(e.target.value)} placeholder="Email" id="user" />
            </div> 
            <div className="">
                <input type="text" value={pws} onChange={(e)=>setPws(e.target.value)} placeholder="Password" id="pswd"/>
            </div>
          
            <div class="">
              <button onClick={()=>submit()}>submit now</button>
                {/* <input type="submit" onClick={()=>submit()} value="Sign Up" /> */}
                </div> 
            </div>
            </div>
       <table>
    <thead>
      <tr>
        <th>S/N</th>
        <th>NAME</th>
        <th>ROLE</th>
      </tr>
    </thead>
    <tbody>
      {ff.map((us,i)=>
          <tr>
     
     <td>{i+1}</td>
     <td>{us.email}</td>
     <td>{us.pws}</td>

          </tr>
        )}
    </tbody>

       </table>


    </>
  )
}
export default App;


    

