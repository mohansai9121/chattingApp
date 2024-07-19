import React, { useCallback, useState } from "react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IconButton, Input, InputGroup } from "rsuite";

const EditableInput = ({
  initialValue,
  onSave,
  label = null,
  placeholder = "Write your value",
  emptyMsg = "Input is empty..",
  ...inputProps
}) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [isEditable, setIsEditable] = useState(false);

  const inputChange = useCallback((val) => {
    setInputValue(val);
  }, []);

  const onEditClick = useCallback(() => {
    setIsEditable((p) => !p);
    setInputValue(initialValue);
  }, [initialValue]);

  const onSaveClick = async () => {
    let trimmed = inputValue.trim();
    if (trimmed === "") {
      alert(emptyMsg);
    }
    if (trimmed !== initialValue) {
      await onSave(trimmed);
    }
    setIsEditable(false);
  };

  return (
    <div>
      {label}
      <InputGroup>
        <Input
          {...inputProps}
          disabled={!isEditable}
          placeholder={placeholder}
          value={inputValue}
          onChange={inputChange}
        />
        <IconButton
          icon={isEditable ? <MdClose /> : <FaEdit />}
          onClick={onEditClick}
        />
        {isEditable && <IconButton icon={<FaCheck />} onClick={onSaveClick} />}
      </InputGroup>
    </div>
  );
};

export default EditableInput;
