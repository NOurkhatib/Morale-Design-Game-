
// controllers/argumentController.js

const argumentService = require('../services/argumentService');

// Function to handle creating a new argument
exports.createArgument = (req, res) => {
  const { text } = req.body; // Extract text from request body
  const validationResult = argumentService.validateArgument(text); // Validate the argument text

  if (validationResult.isValid) {
    res.status(200).json({ message: 'Argument is valid' }); // Send success response
  } else {
    res.status(400).json({ message: 'Argument is invalid', errors: validationResult.errors }); // Send error response
  }
};
