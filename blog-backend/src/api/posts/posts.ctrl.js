const Post = require('models/post');

exports.write = async (ctx) => {
  const { title, body, tags } = ctx.request.body;

  const post = new Post({
    title, body, tags
  });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

// GET /api/posts
exports.list = async (ctx) => {
  try {
    // find() 함수를 호출한 후에는 exec()를 붙여 주어야 서버에 쿼리를 요청
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

// GET /api/posts/:id
exports.read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

// remove: 특정 조건을 만족하는 데이터들을 모두 지웁니다.
// findByIdAndRemove: id를 찾아서 지웁니다.
// findOneAndRemove: 특정 조건을 만족하는 데이터 하나를 찾아서 제거합니다.
exports.remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.update = async (ctx) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};