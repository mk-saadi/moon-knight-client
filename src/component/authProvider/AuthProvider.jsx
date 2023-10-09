import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const gitProvider = new GithubAuthProvider();

    const GoogleProvider = new GoogleAuthProvider();

    GoogleProvider.setCustomParameters({
        prompt: "login",
    });

    const signInWithGoogleRedirect = () => {
        signInWithRedirect(auth, GoogleProvider);
    };

    const newUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const gitHubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setLoading(false);
    //         setUser(currentUser);
    //         if (currentUser) {
    //             localStorage.setItem("user", JSON.stringify(currentUser));
    //         } else {
    //             localStorage.removeItem("user");
    //         }
    //     });
    //     return () => {
    //         return unsubscribe;
    //     };
    // }, []);

    // useEffect(() => {
    //     const storedUser = localStorage.getItem("user");
    //     if (storedUser) {
    //         setUser(JSON.parse(storedUser));
    //     }
    // }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                axios
                    .post("http://localhost:9000/jwt", {
                        email: currentUser.email,
                    })
                    .then((data) => {
                        localStorage.setItem("access-token", data.data.token);
                        setLoading(false);
                    });
            } else {
                localStorage.removeItem("access-token");
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        newUser,
        signIn,
        signInWithGoogleRedirect,
        gitHubSignIn,
        logOut,
        auth,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
