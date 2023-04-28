const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const boardController = require('../controllers/boardController');

// 유저 관련 라우트
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// 게시판 관련 라우트
router.post('/boards', boardController.createBoard);
router.get('/boards/:id', boardController.getBoardById);
router.get('/boards', boardController.getAllBoards);
router.put('/boards/:id', boardController.updateBoard);
router.delete('/boards/:id', boardController.deleteBoard);

// 게시글 관련 라우트
router.post('/boards/:boardId/posts', postController.createPost);
router.get('/boards/:boardId/posts/:postId', postController.getPostById);
router.get('/boards/:boardId/posts', postController.getAllPosts);
router.put('/boards/:boardId/posts/:postId', postController.updatePost);
router.delete('/boards/:boardId/posts/:postId', postController.deletePost);

// 댓글 관련 라우트
router.post('/posts/:postId/comments', commentController.createComment);
router.get('/posts/:postId/comments/:commentId', commentController.getCommentById);
router.get('/posts/:postId/comments', commentController.getAllComments);
router.put('/posts/:postId/comments/:commentId', commentController.updateComment);
router.delete('/posts/:postId/comments/:commentId', commentController.deleteComment);

module.exports = router;