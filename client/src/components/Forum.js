import React from "react";
import Header from "./Navbar";
import { useState, useEffect } from "react";
import styled from "styled-components";

const userURL = "http://localhost:9000/api/users/";

export default function Forum(props) {
  const [userName, setUserName] = useState([]);
  const [users, setUsers] = useState(props.users);
  const [newC, setNewC] = useState(false);

  const postComment = (id, payload) => {
    return fetch(userURL + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };
  
  const commentList = users.map((user, index) => {
    return user.comments.length > 0 ? (
      <div className="flex gap-4">
        <li className="bg-blue-700 list-none text-blue-50 mx-6 p-3 rounded" key={index}>
          <p className="font-mono">
            {user.name}:{" "}
            {user.comments[-1] ? user.comments[-1] : user.comments[0]}
          </p>
        </li>
      </div>
    ) : null;
  });
  
  const handleSubmit = (event) => {
    console.log("users",users)
    console.log("event",event.target[0].value);
    console.log("comments",users[users.length-1].comments)
    event.preventDefault();
     users[(users.length - 1)].comments.push(
      event.target[0].value
    );
   
    const formData = {
      comments: newComments,
      comments: users[(users.length - 1)].comments,
    };
    postComment(users[users.length - 1]._id, formData);
    const changedC = !newC;
    setNewC(changedC);
  };
  
  useEffect(()=>{
    setUsers(users)
    console.log(props.users)
  },[users])

  return (
    <div className="">
      <Header currUser={userName} />
      <Body className="h-screen flex flex-col items-center ">
        <h1 className="font-mono text-center py-7 font-bold text-blue-50 text-xl">
          Welcome to the Forum {userName}. Here you can upload your own history
          of Scotland either through your own stories or pictures
        </h1>
        <div className="flex flex-col space-y-3 gap-0 items-center min-w-96 max-w-96 justify-center">{commentList}</div>
        <div className="flex z-30 pt-6 justify-center">
          <form
            className="flex flex-col w-1/2 items-center"
            onSubmit={handleSubmit}
            value="submit"
          >
            <input
              className="text-center w-96 font-mono"
              type="text"
              placeholder="Your Story Here"
              id="nameInput"
              name="nameInput"
              required
            />
            <button
              className="relative z-30 p-3 text-xl text-white bg-blue-700 font-mono bg-opacity-50 rounded m-5 w-48"
              type="submit"
              value="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </Body>
    </div>
  );
}

const Body = styled.body`
  background: linear-gradient(to right top, hsl(200, 100%, 20%), #6cd);
`;
