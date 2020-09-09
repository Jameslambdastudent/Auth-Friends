import React, { useState } from "react";
import axios from "axios";

const Friends = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        email: "",
    });

    const [post, setPost] = useState([]);

    const handleChanges = (e) => {
        console.log(formState);

        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewFriend(formState);
        axios
            .post("http://localhost:5000/api/friends", formState)
            .then((res) => {
                setPost(res.data);
                console.log("success", post);

                setFormState({ name: "", age: "", email: "" });
            })
            .catch((err) => console.log(err.response));
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                value={formState.name}
            />
            <label htmlFor='age'>Age</label>
            <input
                id='age'
                type='text'
                name='age'
                onChange={handleChanges}
                value={formState.age}
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='text'
                name='email'
                onChange={handleChanges}
                value={formState.email}
            />

            <button type='submit'>Add Friend</button>
        </form>
    );
};

export default Friends