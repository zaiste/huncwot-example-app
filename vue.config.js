const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

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
        args[0].template = 'app/base/index.html'
        return args
      })

    config.resolve.alias.set("app:", resolve("app"));
    config.resolve.alias.set("base:", resolve("app/base"));
    config.resolve.alias.set("features:", resolve("app/features"));

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
