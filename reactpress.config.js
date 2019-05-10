const isProd = process.env.NODE_ENV === "production"

module.exports = {
  // used by ./services/wpapi to create api url
  assetPrefix: isProd ? "https://alinguyen.r.worldssl.net" : "",
  wordpressApiUrl: "https://thedogpaws.com/wp-json",
  siteInformations: {
    name: "TheDogPaws.com",
    homePageTitle: "Homepage",
    searchPageTitle: "SearchBox"
  },
  postsPerPage: {
    homePage: 6,
    searchPage: 9,
    categoryPage: 9,
    recentPosts: 3
  },
  mainMenuLinks: [
    {
      title: "Home",
      slug:  "",
      route: "/"
    },
    {
      title: "Nutrition",
      slug:  "nutrition",
      route: "/category/nutrition"
    },
    {
      title: "Tips & Care",
      slug:  "tips-and-care",
      route: "/category/tips-and-care"
    },
    {
      title: "Reviews",
      slug:  "review",
      route: "/category/reviews"
    }
  ],
  subMenuLinks: [
    {
      title: "About",
      slug:  "about-us",
      route: "/page/about-us"
    },
    {
      title: "Contact",
      slug:  "contact-us",
      route: "/page/contact-us"
    },
    {
      title: "Privacy Policy",
      slug:  "privacy-policy",
      route: "/page/privacy-policy"
    }
  ]
}
