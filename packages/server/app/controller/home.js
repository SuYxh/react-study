const { Controller } = require('egg');

const delay = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await delay(3000);

    // ctx.status = 500;

    ctx.body = {
      code: 0,
      data: 'hi, egg',
      msg: '',
    };

    // ctx.body = {
    //   code: -2,
    //   data: '',
    //   msg: '未登录',
    // };
  }

  async handle1() {
    const { ctx } = this;
    await delay(1300);

    ctx.body = {
      code: 0,
      data: 'post',
      msg: '',
    };

    // ctx.body = {
    //   code: -2,
    //   data: '',
    //   msg: '未登录',
    // };
  }
}

module.exports = HomeController;
