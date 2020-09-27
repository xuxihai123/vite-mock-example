module.exports = {
  login: (ctx, next) => {
    ctx.body = {
      status: "ok",
      code: 2000
    };
  }
};
