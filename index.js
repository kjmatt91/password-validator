// Returns true when passwoerd meets all requirements
function validatePassword(password) {
  if (password !== requirements) {
    return false
  }

  return true
}
// Must be a minimum of 8 characters
// Must contain at least one lower case letter
// Must contain at least one upper case letter
// Must contain at least one numeric value
// Must contain at least one special character

let requirements = // all required functions combined

module.exports = validatePassword
