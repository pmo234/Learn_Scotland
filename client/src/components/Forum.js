import React from "react";
import Header from "./Navbar";
import { useState, useEffect } from "react";
import styled from "styled-components";

const userURL = "http://localhost:9000/api/users/";

export default function Forum(props) {
  const [userName, setUserName] = useState([]);
  const [users, setUsers] = useState(props.users);
  const [newC, setNewC] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = () => {
    return fetch(userURL)
      .then((res) => res.json())
      .then((results) => setUsers(results));}
  
  useEffect(() => {
    setUser(props?.users[props.users.length-1])
    console.log(user)
  }, []);

  
  const postComment = (id, payload) => {
    return fetch(userURL + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };
  // console.log(users)
  const commentList = users.map((user, index) => {
    // console.log(user.name)
    // console.log(user.comments)
    return user.comments.length !==0 ? (
      <>
        <li key={index}>
          <p>{user.name}</p>
          <p>{user.comments}</p>
        </li>
      </>
    ) : null;
  });
  
  const handleSubmit = (event) => {
    console.log(event.target[0].value);
    console.log(users[users.length-1].comments)
    event.preventDefault();
    const newComments1 = users[users.length-1].comments;
    const newComments2 = newComments1.push(event.target[0].value);
    const changedC = !newC
    console.log(newComments1)
    console.log(newComments2)
    const formData = {
      comments: newComments1,
    };
    postComment(users[users.length - 1]._id, formData);
    setNewC(changedC)
  };
  
  useEffect(()=>{
    setUsers(users)
    console.log(props.users)
  },[users])

  return (
    <div>
      <Header currUser={userName} />
      <Body>
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
      </Body>
    </div>

  );
}


const Body = styled.body`
  background: linear-gradient(to right top, hsl(200, 100%, 20%), #6cd);
  height: 100vh;
`

