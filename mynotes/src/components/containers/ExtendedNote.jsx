import React from "react";
import { CustomModal } from "./home/modal/CustomModal";
export const ExtendedNote = ({note, hideModal}) => {
  const { title, description, date } = note;
  
  return (
    <CustomModal show onClose={hideModal}>
      <span>Modified {date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </CustomModal>
  );
};
