const twilio = require('twilio');

const accountSid = 'ACe94dbe7ab3f19e20d0fe5f0cc8d54183';
const authToken = '2cecadcd38997d36a4e4b7b6c3ce2938';

module.exports = new twilio.Twilio(accountSid, authToken);

