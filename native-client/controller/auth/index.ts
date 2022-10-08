import User from '../../model/user'
import { UserType } from '../../lib/enum'

const auth = {
  signUp: async (type: UserType, email?: string, password?: string) => {
    switch (type) {
      case UserType.EmailPassword:
        return await User.createUserWithEmailAndPassword(email!, password!)
      case UserType.Google:
        break
      default:
        break
    }
  },

  signIn: async (type: UserType, email?: string, password?: string) => {
    switch (type) {
      case UserType.EmailPassword:
        return await User.createUserWithEmailAndPassword(email!, password!)
      case UserType.Google:
        break
      default:
        break
    }
  },
}

export default auth
