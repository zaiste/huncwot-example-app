module.exports = function (source, map) {
  this.callback(null,
    `module.exports = function(Component) {
      console.log(Component);
      Component.options.$router.addRoutes([
        {
          path: '/counter',
          name: 'Counter',
          component: Counter
        }
      ])
    }`,
    map)
}
