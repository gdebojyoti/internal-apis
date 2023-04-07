const { authorize, saveNewEmailId } = require('../utils/sheets.js')

module.exports = {
  saveEmail: async (email) => {
    try {
      // check if email is valid
      if (!isEmailValid(email)) {
        return {
          status: false,
          message: 'Invalid email'
        }
      }

      const auth = await authorize()
      await saveNewEmailId(auth, email)
      return {
        status: true
      }
    } catch (err) {
      console.log(err)
      return {
        status: false,
        message: err.message
      }
    }
  }
}

function isEmailValid (email) {
  if (!email || !email.includes('@')) {
    return false
  }
  return true
}