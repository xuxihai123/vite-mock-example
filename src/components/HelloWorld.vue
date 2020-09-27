<template>
  <div class="layout">
    <div class="left">
      <h5>mock example</h5>
      <div>
        <pre>
export default {
  "GET /api/users": function(req, res) {
    let query = req.query || {};
    return res.json({
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
    });
  },
  "GET /api/users/:id": (req, res) => {
    return res.json({
      id: req.params.id,
      username: "kenny"
    });
  },
  "POST /api/users": (req, res) => {
    res.send({ status: "ok", message: "创建成功！" });
  },
  "DELETE /api/users/:id": (req, res) => {
    // console.log(req.params.id);
    res.send({ status: "ok", message: "删除成功！" });
  },
  "PUT /api/users/:id": (req, res) => {
    // console.log(req.params.id);
    // console.log(req.body);
    res.send({ status: "ok", message: "修改成功！" });
  }
};
        </pre>
      </div>
    </div>
    <div class="right">
      <h1>test mock api</h1>
      <div class="line1">
        <div class="url">
          <span class="label">api call:</span>
          <select v-model="apicall" style="width:50px">
            <option value="post:/api/users">post /api/users</option>
            <option value="put:/api/users/188">put /api/users/188</option>
            <option value="get:/api/users/199">get /api/users/109</option>
            <option value="get:/api/users">get /api/users</option>
            <option value="delete:/api/users/199">delete /api/users/199</option>
          </select>
        </div>
        <div class="test">
          <button @click="send">request</button>
        </div>
      </div>
      <div class="line2">
        <pre id="result"></pre>
      </div>
    </div>
  </div>
</template>

<script>
import "./style.scss";
export default {
  name: "HelloWorld",
  data() {
    return {
      apicall: "post:/api/users",
      respData: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    send() {
      console.log(this.apicall);
      const args = this.apicall.split(":");
      let data;
      if (args[0] === "post" || args[0] === "put") {
        data = {
          username: "abc",
          password: "bbb"
        };
      }
      axios({
        method: args[0],
        url: args[1],
        data: data
      }).then(resp => {
        console.log(resp);
        const data = JSON.stringify(resp.data, null, 2);
        document.getElementById("result").innerHTML = data;
      });
    }
  }
};
</script>
