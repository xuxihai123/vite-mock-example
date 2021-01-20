const user = require("./user");

module.exports = {
  "POST /api/login": user.login,
  "GET /api/users": function (req, res) {
    let query = req.query || {};
    return res.json({
      limit: query.limit,
      offset: query.offset,
      list: [
        {
          username: "admin1",
          sex: 1,
        },
        {
          username: "admin2",
          sex: 0,
        },
      ],
    });
  },
  "GET /api/users/:id": (req, res) => {
    return res.json({
      id: req.params.id,
      username: "kenny",
    });
  },
  "POST /api/users": (req, res) => {
    res.send({ status: "ok", message: "创建成功！", body: req.body });
  },
  "DELETE /api/users/:id": (req, res) => {
    // console.log(req.params.id);
    res.send({ status: "ok", message: "删除成功！", d: req.params.id });
  },
  "PUT /api/users/:id": (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    res.send({ status: "ok", message: "修改成功！", id: req.params.id });
  },
};
