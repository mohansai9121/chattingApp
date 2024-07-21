import React, { useRef, useState } from "react";
import { CiChat1 } from "react-icons/ci";
import { Form, IconButton, Modal, Schema } from "rsuite";
import { useModalState } from "../misc/customHooks";
import ModalHeader from "rsuite/esm/Modal/ModalHeader";
import ModalTitle from "rsuite/esm/Modal/ModalTitle";
import ModalBody from "rsuite/esm/Modal/ModalBody";
import ModalFooter from "rsuite/esm/Modal/ModalFooter";
import { IoSend } from "react-icons/io5";
import { push, ref, set } from "firebase/database";
import { database } from "../misc/firebase";
//import { Input } from "rsuite";
//import FormControlLabel from "rsuite/esm/FormControlLabel";

const initialFromValue = {
  room: "",
  description: "",
};

const { StringType } = Schema.Types;

const model = Schema.Model({
  room: StringType("Chat Room Name Required !"),
  description: StringType("Description required !"),
});

const CreateRoomButton = () => {
  const { isOpen, open, close } = useModalState();
  const [formValue, setFormValue] = useState(initialFromValue);
  const formRef = useRef();

  const formChange = (value) => {
    setFormValue(value);
    console.log(value);
  };

  const onSubmit = () => {
    if (!formRef.current.check()) {
      return;
    }
    if (!formValue.room) {
      alert("Please enter the room name");
    }
    if (!formValue.description) {
      alert("please enter the descriptioin of room");
    }
    if (formValue.description && formValue.room) {
      try {
        const roomRef = push(ref(database, "rooms"));
        set(roomRef, formValue);
        alert("Room created");
        close();
        setFormValue(initialFromValue);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  /*const Textarea = React.forwardRef((props, ref) => (
    <Input {...props} as="textarea" ref={ref} />
  ));*/
  return (
    <div>
      <br />
      <IconButton
        icon={<CiChat1 />}
        block
        appearance="primary"
        color="green"
        onClick={open}
      >
        Create new Room
      </IconButton>

      <Modal open={isOpen} onClose={close}>
        <ModalHeader>
          <ModalTitle>New Chat Room</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form
            fluid
            onChange={formChange}
            formValue={formValue}
            model={model}
            ref={formRef}
          >
            <Form.Group controlId="room">
              <Form.ControlLabel>Chat Room Name</Form.ControlLabel>
              <Form.Control
                name="room"
                placeholder="Enter chat room name..."
                required
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.ControlLabel>Description</Form.ControlLabel>
              <Form.Control
                required
                name="description"
                type="textarea"
                rows={5}
                placeholder="Enter the Room description...."
              />
            </Form.Group>
          </Form>
        </ModalBody>
        <ModalFooter>
          <IconButton
            icon={<IoSend />}
            block
            appearance="primary"
            onClick={onSubmit}
          >
            Create New Room
          </IconButton>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateRoomButton;
