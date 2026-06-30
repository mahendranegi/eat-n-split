import React, { useState } from 'react'

function Bill({friend,friends}) {
    const[bill,setBill] = useState(0)
  return (
    <section className='billSection'>
        <h2>Split a bill with {friend.name}</h2>
        <form>
            <div>
                <label>Bill Value</label>
                <input placeholder='Enter bill value' type='number' value={bill} onChange={(e)=>setBill(e.target.value)}/>
            </div>

            <div>
                <label>Your Expenses</label>
                <input placeholder='Enter expenses' value={bill}  type='number' />
            </div>

            <div>
                <label>Who's paying bill</label>
                <select>
                    <option value='Select'>Select</option>
                    {friends.map((elem)=>{
                        return <option value={elem.name}>{elem.name}</option>
                    })}
                    
                    
                </select>
            </div>

            <button className='btnPrimary' >Spit Bill</button>
        </form>
    </section>
  )
}

export default Bill