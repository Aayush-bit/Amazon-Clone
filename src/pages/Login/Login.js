import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { addDoc, updateDoc, deleteDoc, collection, getDocs, doc } from 'firebase/firestore/lite';
// import { query, where, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../../firebase';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    // // get all the items from the database and put them into dbData
    // const getItems = async () => {
    //     const itemsCol = collection(db, 'items');
    //     const itemsSnapshot = await getDocs(itemsCol);
                
    //     setDbData(itemsSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
    //     setShowItems(true);
    // }

    // const deleteItem = async (e) => {
    //     let itemId = e.target.value;
    //     await deleteDoc(doc(db, "items", itemId));
    // }
    
    
    const signUpUser = () => {
        const user = createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            history.push('/');
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.error(error);
        });
    }

    const signInUser = () => {
        const user = signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            history.push('/');
        })
        .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            console.error(error);
        });
    }
    
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleSignInSubmit = (e) => {
        e.preventDefault();
        signInUser();
    }
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        signUpUser();
    }
    
    return (
        <div className="login">
            <div className="login__container">
                <Link to="/">
                    <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo" />
                </Link>
                <form 
                onSubmit={handleSignInSubmit}
                className="login__form">
                    <h5>Email</h5>
                    <input 
                    type="email" 
                    value={email}
                    onChange={handleEmailChange} />

                    <h5>Password</h5>
                    <input type="password"
                    value={password}
                    onChange={handlePasswordChange} />

                    <button 
                    className="login__signInButton" 
                    type="submit">
                        Sign In
                    </button>
                </form>
                <small className="login__termsAndConditions">By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</small>
                <button 
                onClick={handleSignUpSubmit}
                className="login__createAccount">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
