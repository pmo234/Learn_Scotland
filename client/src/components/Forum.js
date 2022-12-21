import React from "react";
import Header from "./Navbar";
import { useState, useEffect } from "react";
const userURL = "http://localhost:9000/api/users/";

export default function Forum(props) {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState()
  
  useEffect(() => {
    if (props.users)
    {setUser(props.users[props.users.length-1])}
  }, [props.users])
  
  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])
  
  
  console.log(user)
  
  const postComment = (id, payload) => {
    return fetch(userURL + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const commentList = props.users.map((item, index) => {
    return item.comments ? (
      <>
        <li key={index}>
          <p>{item.name}</p>
          <p>{item.comments}</p>
        </li>
      </>
    ) : null;
  });

  useEffect(() => {
    if (props.users.length === 0) return;
    //   if (userName == props.users[props.users.length-1].name) return
    else {
      setUserName(props.users[props.users.length - 1].name);
    }
  }, [commentList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComments = props.users[props.users.length - 1].comments;
    newComments.push(event.target[0].value);
    const formData = {
      comments: newComments,
    };
    postComment(props.users[props.users.length - 1]._id, formData);
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
