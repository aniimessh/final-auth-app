const { User } = require("../models/user-model");

const getUserById = async (req, res) => {
  try {
    const id = req.query.userId;
    const currentUser = await User.findOne({
      where: { id },
      attributes: { exclude: ["updatedAt", "password"] },
    });

    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      currentUser,
    });
  } catch (error) {
    console.log("error in getUserById controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const updateUserDetails = async (req, res) => {
  try {
    const id = req.query.userId;
    const { name, profilePic, gender, primaryMobileNo, secondaryMobileNo } =
      req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          profilePic,
          gender,
          primaryMobileNo,
          secondaryMobileNo,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User details updated successfully",
    });
  } catch (error) {
    console.log("error in updateUserDetails controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserById,
  updateUserDetails,
};
