import React from "react";
import Header from "./Navbar";
import { useState, useEffect } from "react";
const userURL = "http://localhost:9000/api/users";

export default function Forum(props) {
  const [userName, setUserName] = useState("");

  const postComment = (payload) => {
    return fetch(userURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const commentList = props.users.map((item, index) => {
    return item.comment ? (
      <>
        <li key={index}>
          {item.name}
          {item.comment}
        </li>
      </>
    ) : null;
  });

  useEffect(() => {
    if (props.users.length === 0) return;
    //   if (userName == props.users[props.users.length-1].name) return
    else {
      setUserName(props.users[props.users.length - 1].name);
      console.log(props.users);
    }
  }, [commentList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUsers([
      ...props.users,
      {
        name: props.users[props.users.length - 1].name,
        comment: event.target[0].value,
      },
      // console.log(props.users)
    ]);
    const formData = {
      name: props.users[props.users.length - 1].name,
      comment: event.target[0].value,
    };
    postComment(formData);
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
