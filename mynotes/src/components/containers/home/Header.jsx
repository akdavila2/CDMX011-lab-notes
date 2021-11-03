import React from "react";
import {useAuth} from "../../../context/AuthContext";

export const Header = ({toggleModal}) => {

    const {currentUser} = useAuth();
    const userName= currentUser.displayName ?? currentUser.email;
    
    return (
        <header>
            <h5>Hello {userName}</h5>
            <button className="accent-button" onClick={toggleModal}>
                Add a Note
            </button>
        </header>
    )
}
