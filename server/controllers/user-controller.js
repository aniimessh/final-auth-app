// const address = require("../db/models/address");
// const user = require("../db/models/user");

const getUserById = async (req, res) => {
  try {
    const id = req.query.userId;
    const currentUser = await user.findOne({
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

module.exports = { getUserById };
