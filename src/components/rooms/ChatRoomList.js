import React from "react";
import { Loader, Nav } from "rsuite";
import RoomItem from "./RoomItem";
import { useRooms } from "../../context/room.context";
import { Link, useLocation } from "react-router-dom";

const ChatRoomList = ({ aboveEleHeight }) => {
  const rooms = useRooms();
  const location = useLocation();

  return (
    <div>
      <Nav
        vertical
        appearance="subtle"
        reversed
        style={{ overflow: "scroll", height: `calc(100%-${aboveEleHeight}px)` }}
        activeKey={location.pathname}
      >
        {!rooms && (
          <Loader vertical content="Loading" size="md" speed="slow" center />
        )}
        {rooms &&
          rooms.length > 0 &&
          rooms.map((room) => {
            return (
              <Nav.Item key={room.id} eventKey={`/chats/${room.id}`}>
                <Link
                  to={`/chats/${room.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <RoomItem room={room} />
                </Link>
              </Nav.Item>
            );
          })}
      </Nav>
    </div>
  );
};

export default ChatRoomList;
