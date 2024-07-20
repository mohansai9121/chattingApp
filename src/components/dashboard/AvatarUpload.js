import React, { useState, useRef, useEffect } from "react";
import { Avatar, Button, Modal } from "rsuite";
import AvatarEditor from "react-avatar-editor";
import { useModalState } from "../../misc/customHooks";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../misc/firebase";
import { useProfile } from "../../context/profile.context";
import { useURLToDataBase } from "../../misc/urlUpload";
//import { set } from "firebase/database";

const fileAcceptTypes = ".png, .jpg, .jpeg, .HEIC, .svg";

const AvatarUpload = () => {
  const [image, setImage] = useState(null);
  const { isOpen, open, close } = useModalState();
  const [imageURL, setImageURL] = useState("");
  const avatarRef = useRef();

  const { profile } = useProfile();
  console.log(profile.avatar);

  const getBlob = (canvas) => {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("File processing error"));
        }
      });
    });
  };

  const uploadAvatar = async () => {
    const canva = avatarRef.current.getImageScaledToCanvas();

    try {
      const blob = await getBlob(canva);
      const avatarStorageRef = ref(storage, `profile/${profile.uid}/avatar`);
      const uploadImage = uploadBytesResumable(avatarStorageRef, blob, {
        cacheControl: `public, max-age=${3600 * 24 * 3}`,
      });
      console.log(uploadImage);
      alert("avatar uploaded");
      const downloadURL = await getDownloadURL(avatarStorageRef);
      console.log(downloadURL);
      setImageURL(downloadURL);
    } catch (error) {
      alert(error.message);
    }
    close();
  };

  useEffect(() => {
    if (!imageURL) {
      setImageURL(profile.avatar);
    }
  }, [imageURL, profile.avatar]);

  useURLToDataBase(imageURL);
  const fileChange = (ev) => {
    let image1 = ev.target.files[0];
    setImage(image1);
    open();
  };

  return (
    <div>
      <center>
        <div>
          {profile.avatar ? (
            <img src={profile.avatar} alt={profile.nickName} />
          ) : (
            <Avatar style={{ background: "#000" }} circle size="xxl">
              {profile.name[0]}
            </Avatar>
          )}
          <br />
          <label htmlFor="avatar" style={{ cursor: "pointer" }}>
            Select new Avatar
            <input
              id="avatar"
              type="file"
              style={{ display: "none" }}
              accept={fileAcceptTypes}
              onChange={fileChange}
            />
          </label>
          <Modal open={isOpen} onClose={close}>
            <Modal.Header>
              <Modal.Title>Resize and Upload Avatar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {image && (
                  <AvatarEditor
                    ref={avatarRef}
                    image={image}
                    width={200}
                    height={200}
                    border={10}
                    borderRadius={100}
                    rotate={0}
                  />
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button appearance="ghost" block onClick={uploadAvatar}>
                Upload Avatar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </center>
    </div>
  );
};

export default AvatarUpload;
