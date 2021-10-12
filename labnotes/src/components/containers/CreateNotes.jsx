import React from "react";
import { useAuth } from "../../context/AuthContext";
import "../../Styles/CreateNotes.css";
import { db } from "../../lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export const CreateNotes = ({ note }) => {
  const { currentUser } = useAuth();
  const { id, title, description, date } = note;

  const deleteNote= async()=>{
    try{
      await deleteDoc(doc(db, 'mynotes', id))
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <blockquote className="card">
        <div className="card-body">
        <p>{currentUser.email}</p>
          <p> {title} </p>
          <p> {description} </p>
          <p> {date} </p>
        </div>
        <div className="card-actions">
          <button className="edit-button">Edit</button>
          <button className="delete-button" onClick= {deleteNote}>Delete</button>
        </div>
      </blockquote>
    </div>
  );
};
