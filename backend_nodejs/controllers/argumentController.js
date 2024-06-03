// const argumentService = require('../services/argumentService');
// const { saveArgument } = require('../db/argument_db');

// // Function to handle creating a new argument
// exports.createArgument = (req, res) => {
//   // Extract text from request body
//   const { text } = req.body; 

//   // Validate the argument text
//   const validationResult = argumentService.validateArgument(text); 

//   if (validationResult.isValid) {

//     // Send success response
//     res.status(200).json({ message: 'Argument is valid' }); 
//   } else {

//     // Send error response
//     res.status(400).json({ message: 'Argument is invalid', errors: validationResult.errors }); 
//   }
// };
const argumentService = require('../services/argumentService');
const { saveArgument } = require('../db/argument_db');

// Function to handle creating a new argument
exports.createArgument = async (req, res) => {
  const { player, character, argument, value, agree } = req.body; // Extract fields from request body
  const validationResult = argumentService.validateArgument(argument); // Validate the argument text

  if (validationResult.isValid)
  {
    try {
      const savedArgument = await saveArgument(text); // Save the argument to the database
      res.status(200).json({ message: 'Argument is valid and saved', argument: savedArgument }); // Send success response
    } catch (error) {
      res.status(500).json({ message: 'Error saving argument to the database', error: error.message }); // Send error response
    }
  } else {
    res.status(400).json({ message: 'Argument is invalid', errors: validationResult.errors }); // Send error response
  }
};

