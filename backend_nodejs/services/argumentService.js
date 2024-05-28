
// Function to validate an argument
exports.validateArgument = (text) => {
  const errors = [];

  // Check if the text is between 25 and 150 words
  const wordCount = text.split(/\s+/).length;
  if (wordCount < 25 || wordCount > 150) {
    errors.push('Argument must be between 25 and 150 words');
  }

  // Check if the text contains any special characters
  if (/[^a-zA-Z0-9\s]/.test(text)) {
    errors.push('Argument must not contain special characters');
  }

  // If there are no errors, return that the validation passed
  if (errors.length === 0) {
    return { isValid: true, errors: [] };
  }

  // If there are errors, return them
  return { isValid: false, errors: errors };
};
