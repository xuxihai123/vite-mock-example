const mockPlugin = require("vite-plugin-mockit");

const vue = require("@vitejs/plugin-vue");

console.log(process.env.NODE_ENV);

module.exports = {
  plugins: [
    vue(),
    mockPlugin({
      entry: "./mock/index.js",
      //   watchFiles: [], // watch file or dir change refresh mock
      //   ignoreFiles: [], // ignore file or dir change
      debug: true, // debug log
    }),
  ],
};
