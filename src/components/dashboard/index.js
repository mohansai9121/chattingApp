import React, { useState } from "react";
import { Button, Divider, Drawer } from "rsuite";
import { useProfile } from "../../context/profile.context";
import EditableInput from "../EditableInput";
import { ref, set } from "firebase/database";
import { database } from "../../misc/firebase";

const DashBoard = ({ signedOut }) => {
  const { profile } = useProfile();
  const [nickname, setNickName] = useState(profile.nickName);

  const onSave = async (newData) => {
    console.log(newData);
    setNickName(newData);
    let nickNameRef = ref(database, `profile/${profile.uid}/nickName`);
    try {
      set(nickNameRef, newData);
      alert("Nick name updated");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>DashBoard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <Divider />
        <EditableInput
          name="NiceName"
          onSave={onSave}
          initialValue={nickname}
          label={<h6>Nice Name</h6>}
        />
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
