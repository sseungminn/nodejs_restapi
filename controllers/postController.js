const Post = require('../models/post');

// 게시글 목록 조회
exports.getPostList = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시글 상세 조회
exports.getPostDetail = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: '게시글이 존재하지 않습니다.' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시글 생성
exports.createPost = async (req, res, next) => {
  const { title, content } = req.body;

  try {
    const post = await Post.create({ title, content });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시글 수정
exports.updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!post) {
      return res.status(404).json({ message: '게시글이 존재하지 않습니다.' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// 게시글 삭제
exports.deletePost = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: '게시글이 존재하지 않습니다.' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
};