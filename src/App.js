import { useState } from "react";
import Bill from "./components/Bill";
import FormAddFriend from "./components/FormAddFriend";
import List from "./components/List";
import './components/common.css'
import { data } from "./components/Data";

function App() {
      const[selectBill,setSelectBill] = useState(false);
      const[selectedFriend,setSelectedFriend] = useState(null);
      const[datafriend,setDatafriend] = useState(data)
      console.log(datafriend,'kkkkkkkk')
      const handleSelect = (elem) =>{
        console.log(elem,'total')
        setSelectBill(elem)
        setSelectedFriend(elem)
        console.log(elem,'hhhh')
      }
     
  return (
    <div className="App">
      <section className="GridSection">
      <List onSelect={handleSelect}/>
      {selectBill ? <Bill friend={selectedFriend} friends={datafriend}/> : null}
      </section>
    
     
    </div>
  );
}

export default App;
