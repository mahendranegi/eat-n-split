import React, { useState } from "react";
import FormAddFriend from "./FormAddFriend";

function List({
  friends,
  setFriends,
  selectedFriend,
  onSelect,
  handleSelectClosed,
  forFormData,
  setForFormData,
}) {
  const [show, setShow] = useState(false);

  function handleAdd() {
    setShow(true);
    setForFormData(true);
  }

  function handleClosed() {
    setShow(false);
    setForFormData(false);
  }

  return (
    <article className="cardSec">
      <div>
        <ul>
          {friends.map((friend) => (
            <li key={friend.id}>
              <div className="innerSec">
                <img src={friend.image} alt={friend.name} />

                <div>
                  <h5>{friend.name}</h5>

                  {friend.balance < 0 && (
                    <span className="red">
                      You owe {friend.name} {Math.abs(friend.balance)}
                    </span>
                  )}

                  {friend.balance > 0 && (
                    <span className="green">
                      {friend.name} owes you {Math.abs(friend.balance)}
                    </span>
                  )}

                  {friend.balance === 0 && (
                    <span>
                      You and {friend.name} are even
                    </span>
                  )}
                </div>
              </div>

              {selectedFriend?.id === friend.id ? (
                <button
                  className="btnPrimary"
                  onClick={handleSelectClosed}
                >
                  Close
                </button>
              ) : (
                <button
                  className="btnPrimary"
                  onClick={() => onSelect(friend)}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>

        {show && forFormData && (
          <FormAddFriend
            friends={friends}
            setFriends={setFriends}
            handleClosed={handleClosed}
          />
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {!show ? (
            <button
              className="btnPrimary mt16"
              onClick={handleAdd}
            >
              Add Friend
            </button>
          ) : (
            <button
              className="btnPrimary mt16"
              onClick={handleClosed}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default List;