import React from "react";
import {useAuth} from "../../../context/AuthContext";

export const Header = ({toggleModal}) => {

    const {currentUser} = useAuth();

    return (
        <header>
            <h5>Hello {currentUser.email}</h5>
            <button className="accent-button" onClick={toggleModal}>
                Add a Note
            </button>
        </header>
    )
}
