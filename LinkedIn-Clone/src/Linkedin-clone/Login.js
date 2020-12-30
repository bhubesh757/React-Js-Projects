import React , {useState } from 'react'
import {useDispatch} from 'react-redux'
import './Login.css'
import firebase from './firebase'

import {auth} from './firebase'
import db from './firebase'

import {login} from '/home/bhubesh/react-clone-redux/src/features/userSlice.js'

function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    const [profilepic, setprofilepic] = useState("")

    const  dispatch = useDispatch()

    const loginButton = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email , password)
            .then((userAuth) => {
                dispatch(login({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName : userAuth.user.displayName ,
                    photoUrl : userAuth.photoUrl,
                }))
            })
            .catch((error) => {
                alert((error))
              })
    };
    const register = () => {
        if(!name) {
            return alert ('Please Enter Your Full Name dude!!')
        }

        auth.createUserWithEmailAndPassword(email , password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName : name,
                profileUrl : profilepic
            })
            .then(() => {
                dispatch(login({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName : userAuth.user.displayName ,
                    photoUrl : userAuth.user.photoUrl,
                }))
            })
        })
        .catch((error) => {
            alert((error))
          })
    }

    return (
        <div className = 'login'>
            <img src = 'https://blog-assets.hootsuite.com/wp-content/uploads/2025/05/linkedin-for-business-9-620x151.png'></img>

            <form>
                <input value = {name} onChange = {e => setname(e.target.value)} type = 'text' placeholder = 'Full Name'></input>

                <input value = {profilepic} onChange = {e => setprofilepic(e.target.value)} type = 'text' placeholder = 'Profile Pic Image Url'></input>

                <input value = {email} onChange = {e => setemail(e.target.value)} type = 'email' placeholder = 'Email'></input>
                <input value = {password} onChange = {e => setpassword(e.target.value)} type = 'password' placeholder = 'Password'></input>

                <button type = 'submit' onClick = {loginButton}> Sign In</button>
            </form>

            <p> New to LinkeIn?

                <span className = 'login__register' onClick = {register}>Join Now</span>
            </p>
        </div>
    )
}

export default Login
