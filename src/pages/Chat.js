import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRooms } from "../context/room.context";
import { Loader } from "rsuite";
import ChatTop from "./chatsLayout/ChatTop";
import Messages from "./chatsLayout/Messages";
import ChatBottom from "./chatsLayout/ChatBottom";

const Chat = () => {
  const { chatID } = useParams();
  const rooms = useRooms();
  console.log("Rooms in chat:", rooms);
  if (!rooms) {
    return (
      <Loader size="md" vertical content="Loading..." center speed="slow" />
    );
  }
  const isRoomPresent = rooms.find((room) => room.id === chatID);
  console.log("room present or not:", isRoomPresent);
  console.log(chatID);

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <br />
      <div>
        <ChatTop />
      </div>
      <div>
        <Messages />
      </div>
      <div>
        <ChatBottom />
      </div>
    </div>
  );
};

export default Chat;
