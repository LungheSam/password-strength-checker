
function passwordStrengthCalculator(passcode){
      // Password length should be at least 8 characters
  const minLength = 8;
  
  // Regular expressions for checking character variety
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  const numbers = /[0-9]/;
  const specialChars = /[-!@#$%^&*(),.?":{}|<>]/;

  // Check the password strength criteria
  if (passcode.length < minLength) {
    return 'Weak'; // Too short, weak password
  }

  const hasLower = lowerCase.test(passcode);
  const hasUpper = upperCase.test(passcode);
  const hasNumbers = numbers.test(passcode);
  const hasSpecial = specialChars.test(passcode);

  // Checking the strength based on the variety of characters and length
  if ((hasLower || hasUpper) && hasNumbers && hasSpecial && passcode.length >= minLength) {
    return 'Strong'; // Meets criteria and has good length
  }

  if ( ((hasLower || hasUpper) && hasNumbers) || ((hasLower || hasUpper) && hasSpecial) || (hasNumbers && hasSpecial)) {
    return 'Medium'; // Meets some criteria, medium strength
  }

  return 'Weak'; // Otherwise, it's weak
}

export default passwordStrengthCalculator