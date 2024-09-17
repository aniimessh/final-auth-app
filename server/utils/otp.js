const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceToken = process.env.TWILIO_SERVICE_TOKEN;
const client = require("twilio")(accountSid, authToken);
const sendOtpViaMobile = async (mobileNo) => {
  try {
    console.log("mobile", mobileNo);
    const verification = await client.verify.v2
      .services(serviceToken)
      .verifications.create({ to: `+91${mobileNo}`, channel: "sms" });
    console.log("verification", verification);
    return verification.sid; // Return the verification SID instead of OTP
  } catch (error) {
    console.log("Error while sending OTP ", error.message);
    throw error;
  }
};
const verifyOtp = async (mobileNo, otp) => {
  try {
    const verificationCheck = await client.verify.v2
      .services(serviceToken)
      .verificationChecks.create({ to: `+91${mobileNo}`, code: otp });

    if (verificationCheck.valid) {
      console.log("OTP is valid");
      return true;
    } else {
      console.log("OTP is invalid");
      return false;
    }
  } catch (error) {
    console.log("Error while verifying OTP ", error.message);
    throw error;
  }
};
module.exports = { sendOtpViaMobile, verifyOtp };
