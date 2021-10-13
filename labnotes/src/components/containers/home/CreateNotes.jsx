import React, {useState} from "react";
//import {useAuth} from "../../../context/AuthContext";
import "../../../scss/components/_cards.scss";
import "../../../scss/components/_CreateNotes.scss";
import { db } from "../../../lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { Modal } from "./Modal";

export const CreateNotes = ({ note }) => {
  //const {currentUser} = useAuth();
  const { id, title, description, date } = note;

  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const deleteNote = async () => {
    try {
      await deleteDoc(doc(db, "mynotes", id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <article className="card">
      <section className="card-body">
        <h3> {title} </h3>
        <p className="card__content"> {description} </p>
        <span className="card__date"> {date} </span>
      </section>
      <section className="card__actions">
        <button className="card-button" onClick={showModal}>
          Edit
        </button>
        <button className="card-button" onClick={deleteNote}>
          Delete
        </button>
      </section>
      {isVisible && (
        <Modal
          note={note}
          mode="edit"
          isVisible={isVisible}
          hideModal={hideModal}
        />
      )}
    </article>
  );
};
