import React, { useCallback } from "react";
import { MdDashboard } from "react-icons/md";
import { Drawer, IconButton } from "rsuite";
import { useModalState } from "../../misc/customHooks";
import DashBoard from ".";
import { auth } from "../../misc/firebase";

const DashBoardToggle = () => {
  const { isOpen, open, close } = useModalState();

  const signOut = useCallback(() => {
    auth.signOut();
    alert("SignedOut...!");
    close();
  }, [close]);

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
        <DashBoard signedOut={signOut} />
      </Drawer>
    </>
  );
};

export default DashBoardToggle;
