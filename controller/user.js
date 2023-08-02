const User = require("../model/user");

exports.storeUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    return res.status(201).json({ success: true, user });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.getAllUser = async (req, res) => {
  const users = await User.find();
  return res.status(200).json({ success: true, users });
};

exports.getSpecificUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
  return res.status(200).json({ success: true, user });
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      user,
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "user not found",
    });
  }
  return res.json({ success: true, user });
};
