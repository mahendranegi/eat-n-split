import { useState } from "react";
import Bill from "./components/Bill";
import List from "./components/List";
import "./components/common.css";
import { data } from "./components/Data";
import logoImg from "./assets/images/logo.png";

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState(data);
  const [forFormData, setForFormData] = useState(true);

  function handleSelect(friend) {
    setSelectedFriend(friend);
    setForFormData(false);
  }

  function handleClose() {
    setSelectedFriend(null);
    setForFormData(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <section className="splitDashboard">
      <section className="GridSection">
        <img
          className="logo"
          src={logoImg}
          alt="logo"
          style={{ width: "70px", borderRadius: "50%", marginBottom: "20px" }}
        />

        <List
          friends={friends}
          setFriends={setFriends}
          selectedFriend={selectedFriend}
          onSelect={handleSelect}
          handleSelectClosed={handleClose}
          forFormData={forFormData}
          setForFormData={setForFormData}
        />

        {selectedFriend && (
          <Bill
            friend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </section>
    </section>
  );
}

export default App;