const admin = require('firebase-admin');

module.exports = function(req, res) {
  // Verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }
  // Format phone number to remove dashes and parens
  const phone = String(req.body.phone);
  // create a new user account using the phone number

  // Respond to the user request, saying the account was made
}