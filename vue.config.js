const path = require('path')

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  devServer: {
    proxy: {
      '/rest': {
        target: 'http://localhost:5544',
        pathRewrite: { '^/rest': '' }
      },
      '/graphql': {
        target: 'http://localhost:5544'
      }
    },
  },
  chainWebpack: config => {
    const docs = config.module;

    config
      .plugin('html')
      .tap(args => {
        args[0].template = 'app/index.html'
        return args
      })

    config.resolve.alias.set("~", resolve("app"));

    docs
      .rule("docs")
      .resourceQuery(/blockType=docs/)
      .type('javascript/auto')
      .use("docs")
      .loader("./config/loaders/docs.js")
      .end();
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "app/base/stylesheet/main.scss";
        `
      }
    }
  }
}
