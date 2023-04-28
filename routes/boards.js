const express = require('express');
const router = express.Router();
const boardController = require('../controllers/boardController');

// 게시판 생성
router.post('/', boardController.createBoard);

// 게시판 조회
router.get('/', boardController.getBoards);

// 게시판 상세 조회
router.get('/:id', boardController.getBoardDetail);

// 게시판 수정
router.put('/:id', boardController.updateBoard);

// 게시판 삭제
router.delete('/:id', boardController.deleteBoard);

module.exports = router;