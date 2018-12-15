const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

// 라우트 처리 함수만 모아 놓은 파일을 컨트롤러
// 컨트롤러에서는 백엔드 기능을 구현
posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.put('/:id', postsCtrl.replace);
posts.patch('/:id', postsCtrl.update);

module.exports = posts;