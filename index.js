// Returns true when passwoerd meets all requirements
function validatePassword(password) {
  // if (password !== requirements) {
  //   return false
  // } Do I need this if function?????

  for (let i = 0; i < password.length; i++) {
    let character = password[i]

    // Must be a minimum of 8 characters
    if (password.length < 8) {
      return false
    }
    // Must contain at least one lower case letter
    if (lowerCase < 1) {
      return false
    }
    // Must contain at least one upper case letter
    if (upperCase < 1) {
      return false
    }
    // Must contain at least one numeric value
    if (number < 1) {
      return false
    }
    // Must contain at least one special character
    if (specialChar < 1) {
      return false
    }
  }

  return true
}


// let requirements = lowerCase + upperCase + do i even need this???

module.exports = validatePassword
