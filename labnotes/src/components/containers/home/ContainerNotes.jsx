import React, {useState, useEffect} from "react";
import "../../../scss/components/_ContainerNotes.scss";
import "../../../scss/pages/_app.scss";
import {CreateNotes} from "./CreateNotes";
import {db} from "../../../lib/firebase";
import {useAuth} from "../../../context/AuthContext";
import {collection, query, onSnapshot} from "firebase/firestore";
import { Modal } from './Modal';

const ContainerNotes = () => {
    const {currentUser} = useAuth();
    const [mynotes, setNotes] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => setIsVisible(!isVisible);
    const newNote = {title: "", description: ""};

    useEffect(() => {
        const q = query(collection(db, "mynotes"));
        onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({id: doc.id, ...doc.data()});
            });
            setNotes(documents);
        });
    }, [mynotes]);

    return (
        <div className='container__notes'>
        <section> <h2>Hello {currentUser.email}</h2></section>
            <button className="btnNotes" onClick={toggleModal}>
                Add a Note
            </button>

            <div className="container__mynotes">
                {mynotes.map((note) => (
                    <CreateNotes key={note.id} note={note} />
                ))}

                {/* Export  component Modal  */}
                {isVisible && (
                    <Modal
                        mode="create"
                        isVisible={isVisible}
                        note={newNote}
                        hideModal={toggleModal}
                    />
                )}
            </div>
        </div>
    );
};
export default ContainerNotes;
