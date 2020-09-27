const mockPlugin = require("vite-plugin-mockit");
console.log(process.env.NODE_ENV);

module.exports = {
  plugins: [
    mockPlugin({
      entry: "./mock/index.js",
      //   watchFiles: [], // watch file or dir change refresh mock
      //   ignoreFiles: [], // ignore file or dir change
      debug: true // debug log
    })
  ]
};
