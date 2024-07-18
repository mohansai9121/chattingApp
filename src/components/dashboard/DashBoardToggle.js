import React from "react";
import { MdDashboard } from "react-icons/md";
import { Drawer, IconButton } from "rsuite";
import { useModalState } from "../../misc/customHooks";
import DashBoard from ".";

const DashBoardToggle = () => {
  const { isOpen, open, close } = useModalState();

  return (
    <>
      <IconButton
        block
        appearance="primary"
        color="blue"
        icon={<MdDashboard />}
        onClick={open}
      >
        DashBoard
      </IconButton>
      <Drawer open={isOpen} onClose={close} placement="left">
        <DashBoard />
      </Drawer>
    </>
  );
};

export default DashBoardToggle;
