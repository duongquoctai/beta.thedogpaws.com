// const isProd = process.env.NODE_ENV === "production"
// assetPrefix: isProd ? "https://alinguyen.r.worldssl.net" : "",

module.exports = {
  // used by ./services/wpapi to create api url
  assetPrefix: "",
  wordpressApiUrl: "https://thedogpaws.com/wp-json",
  site: {
    name: "TheDogPaws.com",
    homePageTitle: "Homepage",
    searchPageTitle: "SearchBox",
    domainName: "https://beta.thedogpaws.com",
    description: "TheDogPaws.com aims to be one of the only dedicated dog news sources (news about dogs–not necessarily for dogs). This includes dogs in the media, news-worthy events, product recalls, celebrity dogs, and anything else in the news that involves dogs. We deploy a team of contributors with a wide array of backgrounds to provide expert insight (and a dose of fun) on current, in-depth content. Their backgrounds include veterinary science, dog training, pop culture journalism, journalistic research, essay writing, and biology. If you’d like to learn more about our team, please complete the form below."
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
