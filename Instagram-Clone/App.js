// import logo from './logo.svg';
import React ,{useState , useEffect} from 'react'
import './App.css';
import Header from './Instagram-clone/Header' 
import Post  from './Instagram-clone/Post' 

import {db , auth } from './firebase'
import  Modal  from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

import ImageUpload from './Instagram-clone/ImageUplaod'
import FlipMove from 'react-flip-move'

// import InstagrampostEmbed from './Instagram-clone/InstagrampostEmbed'

import InstagramEmbed from 'react-instagram-embed'
// import firebase from './firebase'

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle)
  const [posts, setposts] = useState([]);

  const [open, setopen] = useState(false)
  const [openSignin, setopenSigniin] = useState(false)

  const [email, setemail] = useState("")
  const [password, setpassword] = useState('')
  const [username, setusername] = useState('')

  const [user, setuser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser ) => {
      if (authUser) {
          console.log(authUser);
          setuser(authUser);

        if (authUser.displayName) {
          
        } else {
          return authUser.updateProfile({
            displayName : username,
          })
        }
    }
      else {
          setuser(null);
      }
    })
    return () => {
      unsubscribe();
    }
  },[user , username])

      useEffect (() => {
        db.collection('posts').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
          // new post is added here 
          setposts(snapshot.docs.map( doc => (
            {
              id : doc.id,
              post : doc.data(),
            }
          )))
        })
      } ,[]);

      const signUp = (event) => {
          event.preventDefault();
        
          // user Auth
          auth.createUserWithEmailAndPassword(email , password)
          .then((authUser) => {
            authUser.user.updateProfile({
                displayName : username,
            })
          })
          .catch((error) => {
            alert((error.message))
          })
      }


      // const handleClose = () => {
      //   setOpen(false);
      // };
// Sign in 

const signIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email , password)
    .catch((error) => 
      alert(error.message))

      setopenSigniin(false)
}

  return (
    <div className="app">

      {/* caption */}

      {/* file picker */}
      {/* post Button */}

     

      <Modal 
      open = {open}
      onClose = {() => setopen(false)}
      aria-labelledby = 'simple-modal-title'
      aria-describedby = 'simple-modal-description'
      >

      <div style={modalStyle} className={classes.paper}>
        <form className = 'app__signup'>

        <center>
          <img className = 'header__image' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png' width = '50'>
          </img>
          <br></br>
          <Input type = 'text' placeholder = 'Username' value = {username} 
          onChange = {(e) => setusername (e.target.value)}
          ></Input>
          
          <Input type = 'email' placeholder = 'Email' value = {email} 
          onChange = {(e) => setemail (e.target.value)}
          ></Input>
          <br></br>
          <Input type = 'password' placeholder = 'Password' value = {password} 
          onChange = {(e) => setpassword (e.target.value)}
          ></Input>
          <br></br>
          <Button type = 'submit' onClick = {signUp}> Sign Up</Button>
        </center>
        </form>
      </div>
      </Modal>
{/* ------------------------------------------ */}
      <Modal 
       open = {openSignin}
       onClose = {() => setopenSigniin(false)}
       aria-labelledby = 'simple-modal-title'
       aria-describedby = 'simple-modal-description'
       > 
        <div style={modalStyle} className={classes.paper} >
          <form> 

        <img className = 'header__image' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png' width = '50'>
          </img>
          <br></br>
        <Input type = 'email' placeholder = 'Email' value = {email} 
          onChange = {(e) => setemail (e.target.value)}
          ></Input>
          <br></br>
          <Input type = 'password' placeholder = 'Password' value = {password} 
          onChange = {(e) => setpassword (e.target.value)}
          ></Input>
          <br></br>
          <Button type = 'submit' onClick = {signIn}> Sign In</Button>
          </form>
        </div>
      </Modal>       
        
      {/* Header */}
      <div className="app_header">
        <Header></Header>
      {user ? (
        <Button onClick = {() => auth.signOut()}>Logout</Button>
      ):(

        <div className="app__logincontainer">
          <Button onClick = {() => setopen(true)}  > SignUp </Button>
          <Button onClick = {() => setopenSigniin(true)}  > SignIn </Button>
          
        </div>
      )}
      </div>

      <FlipMove>

        <div className="app_posts">
        <div className="app_postsLeft">

      {
        posts.map(({post , id }) => (
          <Post key = {id} postId = {id} user = {user} username = {post.username} caption = {post.caption} imageUrl = {post.imageUrl} avatar = {post.avatar}></Post>
  ))
      }
        </div>

        <div className="app_postsRight">

        <InstagramEmbed
  url='https://instagr.am/p/Zw9o4/'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>

        </div>

        </div>
      </FlipMove>

      {user?.displayName ? (

<ImageUpload username = {user.displayName}></ImageUpload>
):(
<h3> Sorry ! You need to Login To Upload !! </h3>
)}

{/* 
      <Post username = 'virat_Kolhi_' caption = 'Boom!!' imageUrl = 'https://pbs.twimg.com/media/DCMCo4OXoAADlQZ.jpg' ></Post>
      <Post username = 'Vijay' caption = 'Thapathy Here!!' imageUrl = 'https://i.pinimg.com/originals/5e/9b/4a/5e9b4ae6544647acbe95dd6eebb6efdd.jpg' avatar></Post>
      <Post username = 'Ronaldo' caption = 'Ronaldo Here!!' imageUrl = 'https://avatarfiles.alphacoders.com/114/114386.jpg'></Post> */}
      
    </div>
  );
}

export default App;
