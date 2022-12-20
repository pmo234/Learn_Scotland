import React from 'react'
import Header from '../components/Header'
const baseURL = "http://localhost:9000/api/forum/"

export default function Forum(props) {
    const commentList = props.users.map((item, index) => {
        return (
            <>
            <li key={index}>
                {item.name}
                {item.comment}
            </li>
            </>)
                
    })
    console.log(props.users)
  return (
    <div>
        <Header></Header>
        <title>Forum</title>
        <h1>Welcome to the Forum. Here you can upload your own history of 
            Scotland either through your own stories or pictures
        </h1>
        <>{commentList}</>
        <form>
            <input type="text" value = "Insert your story here"/>
        </form>
    </div>
  )
}
