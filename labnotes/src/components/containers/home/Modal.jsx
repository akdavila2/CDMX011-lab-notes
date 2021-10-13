import React, { useState } from "react";
import ReactModal from 'react-modal';
import { db } from "../../../lib/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import '../../../scss/components/_modal.scss'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#7bcaff",
    border: "none",
    boxShadow: "5px 5px 10 px black",
    display: 'flex',
    flexDirection: "column"
  },
};
export const Modal = ({ note, mode, isVisible, hideModal}) => {
  const { id, title, description } = note;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [isOpen, setIsOpen] = useState(isVisible);

  const closeModal = () => {
    setIsOpen(false);
    hideModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "edit") {
      updateNote();
    } else {
      createNote();
    }
    closeModal();
  };

  const handleTitleChange = (e) => setNewTitle(e.target.value);
  const handleDescription = (e) => setNewDescription(e.target.value);

  const createNote = async () => {
    try {
      await addDoc(collection(db,"mynotes"),{
        title: newTitle,
        description: newDescription,
      })
    } catch (error) {
      console.error(error);
    }
  };

  const updateNote = async () => {
    try {
      await setDoc(doc(db, "mynotes", id),{
        title: newTitle,
        description: newDescription,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ReactModal isOpen={isOpen} appElement={document.getElementById('root')} style={customStyles} >
      <form className="modal" onSubmit={handleSubmit}>
        <button className="close-button" onClick={closeModal}>X</button>
        <input
          type="text"
          value={newTitle}
          placeholder="Title"
          onChange={handleTitleChange}
          className='title__modal'
        ></input>
        <textarea
          type="text"
          value={newDescription}
          placeholder="Description"
          onChange={handleDescription}
          className='description__modal'
        ></textarea>
        {mode === "edit" ? (
          <button type="submit" className="edit-button">
            {" "}
            Update{" "}
          </button>
        ) : (
          <button type="submit" className="create-button">
            {" "}
            Create
          </button>
        )}
      </form>
    </ReactModal>
  );
};
