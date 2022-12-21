import React from "react";
import Header from "./Navbar";
import { useState, useEffect } from "react";
const userURL = "http://localhost:9000/api/users/";

export default function Forum(props) {
  const [userName, setUserName] = useState(props.currUser);
  const [users, setUsers] = useState(props.users);
  const [newC, setNewC] = useState(false)
  

  const postComment = (id, payload) => {
    return fetch(userURL + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const commentList = users.map((user, index) => {
    return user.comments ? (
      <>
        <li key={index}>
          <p>{user.name}</p>
          <p>{user.comments}</p>
        </li>
      </>
    ) : null;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComments = users[users.length-1].comments.push(event.target[0].value);
    const changedC = !newC
    const formData = {
      comments: newComments,
    };
    postComment(users[users.length - 1]._id, formData);
    setNewC(changedC)
  };

  return (
    <div>
      <Header currUser={userName} />
      <title>Forum</title>
      <h1>
        Welcome to the Forum {userName}. Here you can upload your own history of
        Scotland either through your own stories or pictures
      </h1>
      <>{commentList}</>
      <form
        className="flex flex-col z-30"
        onSubmit={handleSubmit}
        value="submit"
      >
        <input
          className="text-center"
          type="text"
          placeholder="Your Story Here"
          id="nameInput"
          name="nameInput"
          required
        />
        <button
          className="relative z-30 p-3 text-xl text-white bg-purple-300 bg-opacity-50 rounded m-5"
          type="submit"
          value="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
