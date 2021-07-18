// Returns true when passwoerd meets all requirements
function validatePassword(password) {
  let length = password.length >= 8
  let lowerCase = false
  let upperCase = false
  let number = false
  let specialChar = false
  let specials = '`~!@#$%^&*()_-+={}[]|:;?/>.<,'
  let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lowers = 'abcdefghijklmnopqrstuvwxyz'


  for (let i = 0; i < password.length; i++) {
    let character = password[i]

    // Must contain at least one lower case letter
    if (lowers.indexOf(character) > -1) {
      lowerCase = true
    }
    // Must contain at least one upper case letter
    if (capitals.indexOf(character) > -1) {
      upperCase = true
    }
    // Must contain at least one numeric value
    if (character >= '0' && character <= '9') {
      number = true
    }
    // Must contain at least one special character
    if (specials.indexOf(character) > -1) {
      specialChar = true
    }
  }

  return lowerCase && upperCase && length && number && specialChar
}


module.exports = validatePassword
