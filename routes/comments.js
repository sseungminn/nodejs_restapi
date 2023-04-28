const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// 댓글 생성
router.post('/', commentController.createComment);

// 댓글 수정
router.put('/:id', commentController.updateComment);

// 댓글 삭제
router.delete('/:id', commentController.deleteComment);

module.exports = router;