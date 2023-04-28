const Board = require('../models/board');

// 게시판 생성
exports.createBoard = async (req, res) => {
  try {
    const board = new Board({
      name: req.body.name,
    });
    const savedBoard = await board.save();
    res.status(201).json(savedBoard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 게시판 조회
exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 게시판 삭제
exports.deleteBoard = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) {
      return res.status(404).json({ message: '게시판이 없습니다.' });
    }
    await board.remove();
    res.json({ message: '게시판이 삭제되었습니다.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};