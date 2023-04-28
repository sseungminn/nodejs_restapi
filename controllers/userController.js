const User = require('../models/user');

// 유저 생성
exports.createUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
    });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 유저 조회
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 유저 삭제
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: '유저가 없습니다.' });
    }
    await user.remove();
    res.json({ message: '유저가 삭제되었습니다.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};