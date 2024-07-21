import React, { useEffect, useRef, useState } from "react";
import DashBoardToggle from "./dashboard/DashBoardToggle";
import CreateRoomButton from "./CreateRoomButton";
import { Divider } from "rsuite";
import ChatRoomList from "./rooms/ChatRoomList";

const Sidebar = () => {
  const topSideBarRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (topSideBarRef.current) {
      setHeight(topSideBarRef.current.scrollHeight);
    }
  }, [topSideBarRef]);

  return (
    <div>
      <div ref={topSideBarRef} id="topref">
        <DashBoardToggle />
        <CreateRoomButton />
        <Divider>Join Conversation</Divider>
      </div>
      <ChatRoomList aboveEleHeight={height} />
      bottom
    </div>
  );
};

export default Sidebar;
