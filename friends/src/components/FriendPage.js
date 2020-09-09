import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axios/axiosWithAuth";
import Friend from "./Friend";
import Friends from "./Friends";

function FriendPage() {
    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then((res) => {
                setFriends(res.data);
            })
            .catch((error) => {
                console.error("Server Error", error);
            });
    }, []);

    const [friends, setFriends] = useState([
        {
            id: "",
            name: "",
            age: "",
            email: "",
        },
    ]);

    console.log(friends);

    const addNewFriend = (friend) => {
        const newFriend = {
            id: Date.now(),
            name: friend.name,
            age: friend.age,
            email: friend.email,
        };
        setFriends([...friends, newFriend]);
    };
   // const editFriend = (freind) => {
   //    
  // } 
   //const deleteFriend = (friend) => {
   //     
    //}

    return (
        <div className='App'>
            <h1>My Friends</h1>

            <Friends addNewFriend={addNewFriend} />
            <Friend friends={friends} />
        </div>
    );
}

export default FriendPage;