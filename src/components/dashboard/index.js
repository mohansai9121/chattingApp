import React from "react";
import { Button, Drawer } from "rsuite";
import { useProfile } from "../../context/profile.context";

const DashBoard = ({ signedOut }) => {
  const { profile } = useProfile();
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>DashBoard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        Hey, {profile.name}
        <Button block appearance="primary" color="red" onClick={signedOut}>
          Sign Out
        </Button>
      </Drawer.Body>
      <Drawer.Actions>
        <Button block appearance="primary" color="red" onClick={signedOut}>
          Sign Out
        </Button>
      </Drawer.Actions>
    </>
  );
};

export default DashBoard;
