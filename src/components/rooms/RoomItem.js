import React from "react";
import TimeAgo from "timeago-react";

const RoomItem = ({ room }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>{room.room}</h3>
        <span style={{ marginLeft: "250px" }}>
          <TimeAgo
            datetime={new Date()}
            style={{ color: "black", opacity: "45%" }}
          />
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "black",
          opacity: "70%",
        }}
      >
        <span>{room.description}</span>
      </div>
    </div>
  );
};

export default RoomItem;
