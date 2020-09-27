const user = require("./user");

module.exports = {
  "POST /api/login": user.login,
  "GET /api/users": function(ctx, next) {
    let query = req.query || {};
    ctx.body = {
      limit: query.limit,
      offset: query.offset,
      list: [
        {
          username: "admin1",
          sex: 1
        },
        {
          username: "admin2",
          sex: 0
        }
      ]
    };
  },
  "GET /api/users/:id": (ctx, next) => {
    ctx.body = {
      id: req.params.id,
      username: "kenny"
    };
  },
  "POST /api/users": (ctx, next) => {
    ctx.body = { status: "ok", message: "创建成功！" };
  },
  "DELETE /api/users/:id": (ctx, next) => {
    // console.log(req.params.id);
    ctx.body = { status: "ok", message: "删除成功！" };
  },
  "PUT /api/users/:id": (ctx, next) => {
    // console.log(req.params.id);
    // console.log(req.body);
    ctx.body = { status: "ok", message: "修改成功！" };
  }
};
