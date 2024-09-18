const nodemailer = require("nodemailer");
const { Otp } = require("../models/otp-model");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: "masconstech@gmail.com",
    pass: "uggunqmndceowags",
  },
});

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendOtpViaMail = async (email, OTP) => {
  const mailOptions = {
    from: "masconstech@gmail.com",
    to: email,
    subject: "OTP for Verification",
    text: `Your OTP is: ${OTP}`,
  };
  try {
    await transporter.sendMail(mailOptions);

    const otpDoc = await Otp.findOne({ email });
    if (otpDoc) {
      otpDoc.otp = OTP;
      await otpDoc.save();
    } else {
      const otp = new Otp({ email, otp: OTP });
      await otp.save();
    }

    console.log("OTP sent successfully!");
    return true;
  } catch (error) {
    console.log("Error while sending OTP:", error.message);
    return false;
  }
};

const verifyOtp = async (email, otp) => {
  try {
    const dbOTP = await Otp.findOne({ email });

    if (!dbOTP || !dbOTP.otp) {
      return res
        .status(400)
        .json({ message: "Something went wrong with email" });
    }
    // Verify the OTP
    if (dbOTP.otp !== otp) {
      throw new Error("Invalid OTP");
    }
    console.log("OTP verified successfully!");
    return true;
  } catch (error) {
    console.log("Error while verifying OTP ", error.message);
    throw error;
  }
};
module.exports = { sendOtpViaMail, verifyOtp, generateOtp };
