import React, {useContext} from "react";
import ContainerNotes from "./ContainerNotes";
import NavBar from "../NavBar";
import Footer from "../Footer";
import {NoteForm} from "./NoteForm";
import {Header} from './header';
import { ExtendedNote } from "../ExtendedNote";

export const HomeContext = React.createContext();
export const useHomeContext = () => useContext(HomeContext);
const Home = () => {

    const [state, setState] = React.useState({});
    const toggleModal = () => setState({showModal: !state.showModal});
    const closeModal = () => setState({...state, showModal: false, noteToUpdate: undefined});
    
    const includeModal = () => setState({...state, noteToShow: undefined});

    const setNote = (note) => setState({
        ...state,
        noteToUpdate: note,
        showModal: true

    });
    const modalProps = {mode: 'create'};
    if (state.noteToUpdate && state.showModal) {
        modalProps.mode = 'update';
        modalProps.note = state.noteToUpdate
    }
    return (
        <>
            <HomeContext.Provider value={{
                setNote: setNote,
                setOnView: note => {
                    setState({noteToShow: note})
                }
            }}>
                <div>
                    <NavBar/>
                    <div className="home__page">
                        <Header toggleModal={toggleModal}/>
                        <ContainerNotes/>
                    </div>
                    <Footer/>
                </div>
            </HomeContext.Provider>
            {state.showModal && <NoteForm {...modalProps} hideModal={closeModal}/>}
            {state.noteToShow && <ExtendedNote note ={state.noteToShow} hideModal= {includeModal} />}
        </>
    );
};
export default Home;
