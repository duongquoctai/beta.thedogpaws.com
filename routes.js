const routes = require( 'next-routes' )

module.exports = routes()
  .add( 'index',    '/' )
  .add( 'post',     '/:slug' )
  .add( 'category', '/category/:slug' )
  .add( 'page',     '/page/:slug' )