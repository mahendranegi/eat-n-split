import React, { useState } from 'react'

function FormAddFriend() {
    const[name,setName] = useState('');
     const[imgUrl,setImgUrl] = useState('');
     const[addData,setAddData] = useState([]);
     const[error,setError] = useState('');
     const handleAddFriend = () =>{
        if(name ===  '' && imgUrl === ''){
            setError('ff')
            setName('')
            setImgUrl('')
        }
        else{
            setName(name);
            setImgUrl(imgUrl);
            console.log(name,imgUrl)
            setError('')
       
        }
        
     }

     const addFriendData = {...setName,...imgUrl};
     console.log(addFriendData,'addFriendData')
  return (
    <section className='addForm'>
        <div>
            <form>
            <label>Add Friend Name</label>
            <input placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>
            </form>
            {error ? <p className='error'>Please Enter Name</p> : ''}

            <div>
            <label>Image url</label>
            <input placeholder='enter url here' value={imgUrl} onChange={(e)=>setImgUrl(e.target.value)}/>
            </div>
             {error ? <p className='error'>Please Add URL</p> : ''}
            <button className='btnPrimary' onClick={handleAddFriend}>Submit</button>
        </div>
    </section>
  )
}

export default FormAddFriend