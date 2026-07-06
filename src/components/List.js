import React, { useState } from 'react'
import { data } from '../components/Data'
import '../components/common.css'
import FormAddFriend from './FormAddFriend';
function List({onSelect,friends,setFriends,modalHide,selectedFriend,handleSelectClosed,forFormData,setForFormData}) {
    const[show,setShow] = useState(false);
    const handleAdd = () =>{
        setShow(true)
        setForFormData(true);
    }
    const handleClosed = () =>{
        setShow(false);
        setForFormData(false);
    }
   
  return (
    <article className= 'cardSec'> 
    <div>
    <ul>
        {friends.map((elem,id)=>{
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
                {/* <button className='btnPrimary' onClick={()=> onSelect(elem)}>{selectedFriend?.id === elem.id ? 'Closed' : 'Select'}</button> */}
                {selectedFriend?.id === elem.id ?<button className='btnPrimary closed' onClick={()=> handleSelectClosed(elem)}>Closed</button> : <button className='btnPrimary' onClick={()=> onSelect(elem)}>Select</button> }
            <em></em>
            </li>
        })}
        
    </ul>
   {show && forFormData &&
   (<FormAddFriend 
        setForFormData={setForFormData} 
        forFormData={forFormData} 
        handleClosed={handleClosed} 
        modalHide={modalHide} 
        friends={friends} 
        setFriends={setFriends} 
    />)}
    <div style={{display:'flex',justifyContent:'end'}}>
        {!show ?  <button className='btnPrimary mt16' onClick={handleAdd}>Add Friends</button> : <button className='btnPrimary mt16' onClick={handleClosed}>Closed</button>}
        
        
    </div> 
    </div>
    
    </article>
  )
}

export default List