import React, { useState } from 'react'
import { data } from '../components/Data'
import '../components/common.css'
import FormAddFriend from './FormAddFriend';
function List({onSelect}) {
    const[val,seVal] = useState(data);
    const[show,setShow] = useState(false);
    const handleAdd = () =>{
        setShow(true)
    }
    const handleClosed = () =>{
        setShow(false)
    }
   
  return (
    <article className= 'cardSec'> 
    <ul>
        {val.map((elem,id)=>{
            return <li>
                <div className='innerSec'>
                    <img src={elem.image} alt={elem.name}/>
                    <div>
                    <h5>{elem.name}</h5>
                    {
                        elem.balance < 0 && (
                        <span className='red'>You owes {elem.name} {elem.balance}</span>
                        )
                    }

                     {
                        elem.balance > 0 && (
                        <span className='green'>{elem.name} owes you {elem.balance}</span>
                        )
                    }
                   
                    {
                        elem.balance === 0 && (
                        <span>You and {elem.name} are even</span>
                        )
                    }
                    </div>
                </div>
                <button className='btnPrimary' onClick={()=> onSelect(elem)}>Select</button>

            </li>
        })}
        
    </ul>
   {show ? <FormAddFriend />: null}
    <div style={{display:'flex',justifyContent:'end'}}>
        {!show ?  <button className='btnPrimary mt16' onClick={handleAdd}>Add Friends</button> : <button className='btnPrimary mt16' onClick={handleClosed}>Closed</button>}
        
        
    </div> 
    
    
    </article>
  )
}

export default List