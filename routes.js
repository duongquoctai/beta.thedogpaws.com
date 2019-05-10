const routes = require( "next-routes" )

module.exports = routes()
  .add( "index",    "/" )
  .add( "search",   "/search" )
  .add( "category", "/category/:slug" )
  .add( "page",     "/page/:slug" )
  .add( "post",     "/:slug" )