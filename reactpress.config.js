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
      title: "About Us",
      slug:  "about-us",
      route: "/page/about-us"
    },
    {
      title: "Contact Us",
      slug:  "contact-us",
      route: "/page/contact-us"
    },
    {
      title: "Privacy Policy",
      slug:  "privacy-policy",
      route: "/page/privacy-policy"
    }
  ],
  ui: {
    breakpoints: {
      smallScreen: "@media (max-width: 1000px)"
    }
  }
}
