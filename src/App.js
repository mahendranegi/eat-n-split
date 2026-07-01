import { useState } from "react";
import Bill from "./components/Bill";
import FormAddFriend from "./components/FormAddFriend";
import List from "./components/List";
import './components/common.css'
import { data } from "./components/Data";
import logoImg from '../src/assets/images/logo.png'

function App() {
      const[selectBill,setSelectBill] = useState(false);
      const[selectedFriend,setSelectedFriend] = useState(null);
      const[datafriend,setDatafriend] = useState(data);
      const[forFormData,setForFormData] = useState(true)
      const handleSelect = (elem) =>{
        setSelectBill(true)        
        setSelectedFriend(elem)
        setForFormData(false);
      }
      const handleSelectClosed = (elem) =>{
         setSelectedFriend(null);
        setSelectBill(false)
         setForFormData(false);
      }
     const modalHide = () =>{
      alert('hello')
     }
    
  return (
    <section className="splitDashboard">
     
      <section className="GridSection">
        <img className="logo"  style={{borderRadius: '50%',width:'70px',margin:'0 0 16px'}} src={logoImg} alt={logoImg}/>
      <List forFormData={forFormData} setForFormData={setForFormData} modalHide={modalHide}   onSelect={handleSelect} handleSelectClosed= {handleSelectClosed} friends={datafriend} setFriends={setDatafriend} selectedFriend={selectedFriend}/>
      {selectBill ? <Bill friend={selectedFriend} friends={datafriend}/> : ''}
      </section>
    
     
    </section>
  );
}

export default App;
