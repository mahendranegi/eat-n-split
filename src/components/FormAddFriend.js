import React, { useState } from "react";

function FormAddFriend({ setFriends, handleClosed }) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");
  const [error, setError] = useState("");

  const handleAddFriend = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Please enter a friend name.");
      return;
    }

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${imgUrl}?u=${id}`,
      balance: 0,
    };

    setFriends((prevFriends) => [...prevFriends, newFriend]);

    setName("");
    setImgUrl("https://i.pravatar.cc/48");
    setError("");

    handleClosed();
  };

  return (
    <section className="addForm">
      <form onSubmit={handleAddFriend}>
        <div>
          <label>Friend Name</label>
          <input
            type="text"
            placeholder="Enter friend name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>

        <button type="submit" className="btnPrimary">
          Add Friend
        </button>
      </form>
    </section>
  );
}

export default FormAddFriend;