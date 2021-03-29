import React from "react";

const Event = ({ event }) => {
  return (
    <div>
      <img src={event.imageURL} alt='' />
      <h2>{event.eventName}</h2>
    </div>
  );
};

export default Event;
