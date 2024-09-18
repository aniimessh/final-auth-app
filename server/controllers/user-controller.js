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

const updateAddress = async (req, res) => {
  try {
    const { userId } = req.params;
    const updateUser = await user.findByPk(userId);
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // // Find the address belonging to the user
    let updateAddress = await address.findOne({
      where: { userId: userId },
    });

    if (!updateAddress) {
      // If no address exists, create a new one
      updateAddress = await address.create({ userId: userId, ...req.body });
    } else {
      // If an address exists, update it
      updateAddress = await address.update(req.body, {
        where: { userId: userId },
      });
    }

    // res.status(200).json(address);
    res.status(200).json({ message: "Address updated successfully" });
  } catch (error) {
    console.log("error in updateAddress controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.log("error in updateUser controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getUserById, updateAddress };
