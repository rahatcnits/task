const User = require("../model/user");
const bcrypt = require("bcryptjs");

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
    const user = await User.findById(req.params.id);
    const keys = Object.keys(req.body);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    for (let key of keys) {
      user[key] = req.body[key];
    }

    await user.save();

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

exports.login = async (req, res) => {
  // email password
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email/Password",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email/Password",
    });
  }

  return res.status(200).json({
    success: true,
    user,
  });
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
