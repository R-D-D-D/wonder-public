import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../lib/firebase'

const User = {
  createUserWithEmailAndPassword: async (email: string, password: string) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.log(e)
    }
  },

  signInWithEmailAndPassword: async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.log(e)
    }
  }
}

export default User