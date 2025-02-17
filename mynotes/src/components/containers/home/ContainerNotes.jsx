import React, {useState, useEffect} from "react";
import "../../../scss/components/_CreateNotes.scss";
import "../../../scss/pages/_app.scss";
import {Note} from "./Note";
import {db} from "../../../lib/firebase";
import {useAuth} from "../../../context/AuthContext";
import {collection, orderBy, query, onSnapshot} from "firebase/firestore";
import '../../../scss/components/_notes.scss';
import PreLoad from "../PreLoad";

const ContainerNotes = () => {
    const {currentUser} = useAuth();
    const [mynotes, setMyNotes] = useState([]);
    const [fetching, setFetching] = useState(!mynotes.length);
    useEffect(() => {

        try {
            setFetching(true);
            
            const q = query(
                collection(db, "mynotes"),
                orderBy("date", "asc"),
                );
            onSnapshot(q, (querySnapshot) => {
                const documents = [];
                querySnapshot.forEach((doc) => {
                    documents.push({id: doc.id, ...doc.data()});
                });

                setMyNotes(documents);
                setFetching(false);
            })
        }
        catch (error) {
            console.log(error)
        }

    }, []);

    const output = []
    mynotes.forEach((note) => {
        if (currentUser.email !== note.user) return false;
        output.push(<Note key={note.id} note={note}/>);
    });

    if (fetching) {
        return <PreLoad/>
    }
    return (
        <div className='container__notes'>
            <ul className='my-notes'>
                {output}
            </ul>
        </div>
    );
};
export default ContainerNotes;
