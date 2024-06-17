// const argumentService = require('../services/argumentService');
// const { saveArgument } = require('../db/argument_db');

// // Function to handle creating a new argument
// exports.createArgument = async (req, res) => {
//   const { player, character, argument, value, agree } = req.body; // Extract fields from request body
//   const validationResult = argumentService.validateArgument(argument); // Validate the argument text

//   if (validationResult.isValid) {
//     try {
//       const savedArgument = await saveArgument(player, character, argument, value, agree); // Save the argument to the database
//       res.status(200).json({ message: 'Argument is valid and saved', argument: savedArgument }); // Send success response
//     } catch (error) {
//       res.status(500).json({ message: 'Error saving argument to the database', error: error.message }); // Send error response
//     }
//   } else {
//     res.status(400).json({ message: 'Argument is invalid', errors: validationResult.errors }); // Send error response
//   }
// };



// Import the argument service which contains logic for validating arguments.
const argumentService = require('../services/argumentService');

// Import the saveArgument function from the argument_db module which handles saving arguments to the database.
const { saveArgument } = require('../db/argument_db');

// Function to handle creating a new argument. This function will be used as a route handler for POST requests to create new arguments.
exports.createArgument = async (req, res) => {

  // Extract fields from the request body. These fields are expected to be sent in the JSON body of the POST request.
  const { player, character, argument, value, agree } = req.body;

  // Validate the argument text using the validateArgument function from argumentService.
  const validationResult = argumentService.validateArgument(argument);

  // Check if the validation passed
  if (validationResult.isValid) {
    try {
      
      // Save the argument to the database using the saveArgument function. This function is asynchronous, so we use await.
      const savedArgument = await saveArgument(player, character, argument, value, agree);

      // If the argument is successfully saved, send a success response with status 200 and the saved argument data.
      res.status(200).json({ message: 'Argument is valid and saved', argument: savedArgument });
    } catch (error) {
      // If there is an error while saving the argument to the database, send an error response with status 500 and the error message.
      res.status(500).json({ message: 'Error saving argument to the database', error: error.message });
    }
  } else {
    // If the validation fails, send an error response with status 400 and the validation errors.
    res.status(400).json({ message: 'Argument is invalid', errors: validationResult.errors });
  }
};
