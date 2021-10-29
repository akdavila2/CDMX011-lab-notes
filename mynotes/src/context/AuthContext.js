import React, {createContext, useState, useEffect, useContext} from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({children, ...restProps}) => {

    const [currentUser, setCurrentUser] = useState({});
    const [currentUid, setCurrentUid] = useState({});
   
    useEffect(() => {

        restProps.onAuthStateChanged(restProps.auth, (user) => {
            setCurrentUser(user);
            setCurrentUid(user?.uid);
            // if (!user && window.location.pathname !== '/') {
            //     history.push('/')
            //     console.log("check uid", user?.uid);
            //     setCurrentUid(user?.uid);
            //     return
            // }

            // if (user && window.location.pathname === '/') {
            //     history.push('/Home')
            //     console.log('Si hay Session');
            //     return;
            // }
    });
}, [restProps]);

    const register = (email, password) => {
        return restProps.createUserWithEmailAndPassword(restProps.auth, email, password);
    }
    const login = (email, password) => {
        return restProps.signInWithEmailAndPassword(restProps.auth, email, password);
    }
    const logout = () => restProps.signOut(restProps.auth);

    const loginGoogle = () => {
        const provider = new restProps.GoogleAuthProvider();
        return restProps.signInWithPopup(restProps.auth, provider);
    }

    const value = {register, login, logout, loginGoogle, currentUser, currentUid};
  
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
