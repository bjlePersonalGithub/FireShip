import Navbar from '../components/Navbar';
import '../styles/globals.css'
import {Toaster} from 'react-hot-toast'
import { UserContext } from '../lib/context';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../lib/firebase';


function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let unsuscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsuscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    return unsuscribe;
  }, [user]);

  return (
    <UserContext.Provider value={{ user, username}}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp
