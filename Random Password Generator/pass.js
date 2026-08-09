function generatePassword(length, includeUppercase,includeLowercase, includeNumbers, includeSymbols) {

    let allowedChars = "";
    let password = "";

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return "Password length must be at least 1.";
    }
    if (allowedChars.length === 0) {
        return "One of the following options must be True."
    }

    for(i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
console.log("Generated Password: " + password);