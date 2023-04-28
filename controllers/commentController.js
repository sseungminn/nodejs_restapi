const Comment = require('../models/comment');

// 댓글 생성
exports.createComment = async (req, res) => {
  try {
    const comment = new Comment({
      post: req.params.postId,
      user: req.body.user,
      content: req.body.content,
    });
    const savedComment = await comment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 댓글 조회
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 댓글 삭제
exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: '댓글이 없습니다.' });
    }
    await comment.remove();
    res.json({ message: '댓글이 삭제되었습니다.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};