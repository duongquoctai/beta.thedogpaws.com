const routes = require( 'next-routes' );

module.exports = routes()
  .add( 'index',            '/' )
  .add( 'about',            '/about-us' )
  .add( 'contact',          '/contact-us' )
  .add( 'privacy_policy',   '/privacy-policy' )
  .add( 'category',         '/category/:slug' )
  .add( 'single',           '/:slug' )
