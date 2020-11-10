import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addPost } from "../../../state/actions";

export default function NewPostForm({ postData }) {
  const { handleSubmit, register, errors } = useForm();
  //   const [newPost, setNewPost] = useState({
  //     title: "",
  //     content: "",
  //   });
  let dispatch = useDispatch();

  const onSubmit = (e) => {
    //setNewPost({ ...newPost, [e.target.name]: e.target.value });
    console.log(e);
    dispatch(addPost(e));
  };
  //   const submitPost = (e) => {
  //     e.preventDefault();
  //   };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Title"
          label="title"
          name="title"
          ref={register({ required: true })}
        />
        <input
          placeholder="Post Content"
          label="content"
          name="content"
          ref={register({ required: true })}
        />
        <button type="submit">Post!</button>
      </form>
    </div>
  );
}
