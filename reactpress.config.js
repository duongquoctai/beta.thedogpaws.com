module.exports = {
  // used by ./services/wpapi to create api url
  wordpressApiUrl: "https://thedogpaws.com/wp-json",
  siteInformations: {
    name: "ReactPress",
    slogan: "Create a SEO-friendly React front-end in minutes for your Wordpress API."
  },
  mainMenuLinks: [
    {
      title: "Home",
      href:  "/",
      route: "/"
    }
  ],
  subMenuLinks: [
    {
      title: "About Us",
      href:  "/page?slug=about-us",
      route: "/page/about-us"
    },
    {
      title: "Contact Us",
      href:  "/page?slug=contact-us",
      route: "/page/contact-us"
    },
    {
      title: "Privacy Policy",
      href:  "/page?slug=privacy-policy",
      route: "/page/privacy-policy"
    }
  ],
  ui: {
    breakpoints: {
      smallScreen: "@media (max-width: 1000px)"
    }
  }
}
