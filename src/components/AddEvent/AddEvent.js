import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddEvent = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      eventName: data.eventName,
      imageURL: imageURL,
    };
    axios
      .post("http://localhost:5000/addEvent", eventData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const imageData = new FormData();
    imageData.set("key", "b321aa392073ad18bf89a195efb05d27");
    imageData.append("image", image);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        const imageLink = response.data.data.display_url;
        setImageURL(imageLink);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>This is Event</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name='eventName' placeholder='Event Name' ref={register({ required: true })} />
        <br />
        <input name='image' type='file' onChange={handleImageUpload} />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default AddEvent;
