import React, { useState } from 'react'

function Bill({friend,friends}) {
    const[bill,setBill] = useState("");
    const[expenses,setExpenses] = useState("")
    const[whoIspaidBill,setWhoIspaidBill] = useState("user")
    const[totalexpenses,setTotalExpenses] = useState("")
    const paidByFriend = bill ? bill - expenses : '';
    const handleSubmit = (e)=>{
        e.preventdefault()
        console.log(e)
    }
  return (
    <section className='billSection'>
        <h2>Split a bill with {friend.name}</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Bill Value</label>
                <input placeholder='Enter bill value' type='number' value={bill} onChange={(e)=>setBill(Number(e.target.value))}/>
            </div>

            <div>
                <label>Your Expenses</label>
                <input placeholder='Enter expenses' type='number' value={expenses} onChange={(e)=> setExpenses(Number(e.target.value) > bill ? paidByFriend :  Number(e.target.value))}  />
            </div>
            <div>
                <label>{friend.name} Expenses</label>
                <input placeholder='Enter expenses' value={paidByFriend}  disabled/>
            </div>
            <div>
                <label>Who's paying bill</label>
                <select   value={whoIspaidBill} onChange={(e)=>setWhoIspaidBill(e.target.value)}>
                    <option value='Select'>Select</option>
                     <option value={friend.name}>{friend.name}</option>
                  
                    
                    
                </select>
            </div>

            <button className='btnPrimary' >Spit Bill</button>
        </form>
    </section>
  )
}

export default Bill