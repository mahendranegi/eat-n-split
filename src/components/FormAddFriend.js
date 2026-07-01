import React, { useState } from 'react'

function FormAddFriend({setFriends,friends,handleClosed,forFormData,setForFormData}) {
    console.log(friends,'newdatanewdatanewdata')
    const[name,setName] = useState('');
     const[imgUrl,setImgUrl] = useState('https://i.pravatar.cc/48');
     const[addData,setAddData] = useState([]);
     const[error,setError] = useState('');
     const[showAddFriend,setShowAddFriend] = useState([]);
     const handleAddFriend = () =>{
        if(!name){
            setError("d");
            setName('')
            return
        }
        else{
            const id = crypto.randomUUID();
            const newFriend = {
                name, 
                image: `${imgUrl}?=${id}`,
                balance: 1,
                id,                
            };
            console.log(newFriend,'checking')
            console.log(friends,'bbbbbbbbbbbbb________________-')
            setFriends([...friends,newFriend])
            setName('');   
            handleClosed()   
        }        
     }

  return (
    <>

    {forFormData && (<section className='addForm'>
        <div>
            <form>
            <label>Add Friend Name</label>
            <input placeholder='enter name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </form>
            {error ? <p className='error'>Please Enter Name</p> : ''}
            <div>
            <label>Image url</label>
            <input placeholder='enter url here' value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)}/>
            </div>            
            <button className='btnPrimary' onClick={handleAddFriend}>Submit</button>
        </div>
    </section>)}
    </>
  )
}

export default FormAddFriend