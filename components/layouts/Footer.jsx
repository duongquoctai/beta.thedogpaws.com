import React from "react"
import { Link } from "../../routes"
import config from "../../services/publicConfig"
import { LazyLoadImage } from "react-lazy-load-image-component"

export default function Footer() {
  return (
    <div>
      <footer className="page_footer ds parallax section_padding_top_100 section_padding_bottom_65 columns_padding_25">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 text-center" data-animation="fadeInUp">
              <div className="widget">
                <Link route="index">
                  <a className="logo bottommargin_20">
                    <LazyLoadImage alt="" src={ `${config.assetPrefix}/static/images/thedogpaws.net/logo.png` } />
                  </a>
                </Link>
                <p>
                  <font size="3">
                    Aims to be one of the only dedicated dog news sources. This includes dogs in the media, news-worthy events, product recalls, celebrity dogs, and anything else in the news that involves dogs.
                  </font>
                </p>
                <div className="grey topmargin_30">
                  <div className="media small-teaser inline-block margin_0">
                    <div className="media-left media-middle">
                      <i className="fa fa-map-marker highlight3" aria-hidden="true"></i>
                    </div>
                    <div className="media-body media-middle">
                      3501 Jack Northrop Ave, Suite #LV402
                    </div>
                  </div>
                  <br />
                  <div className="media small-teaser inline-block margin_0">
                    <div className="media-left media-middle">
                      <i className="fa fa-envelope highlight3" aria-hidden="true"></i>
                    </div>
                    <div className="media-body media-middle darklinks color3">
                      <a href="mailto:support@thedogpaws.com" target="_top">support@thedogpaws.com</a>
                    </div>
                  </div>
                  <div className="media small-teaser inline-block margin_0">
                    <div className="media-left media-middle">
                      <i className="fa fa-internet-explorer highlight3" aria-hidden="true"></i>
                    </div>
                    <div className="media-body media-middle darklinks color3">
                      <Link route="index">
                        <a>www.thedogpaws.com</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="darklinks topmargin_25">
                  <a href="#" className="social-icon border-icon rounded-icon soc-facebook"  target="_blank" href="https://www.facebook.com/thedogpawsdotcom/"></a>
                  <a href="#" className="social-icon border-icon rounded-icon soc-instagram" target="_blank" href="https://www.instagram.com/thedogpawsdotcom/"></a>
                  <a href="#" className="social-icon border-icon rounded-icon soc-pinterest" target="_blank" href="https://www.pinterest.com/thedogpawsdotcom/"></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center" data-animation="fadeInUp">
              <div className="widget topmargin_30">
                <h5>Amazon Associates Program</h5>
                <div className="widget_text scn">
                  <font size="2">
                    <a className="vglnk" href="http://TheDogPaws.com" rel="nofollow"><span>TheDogPaws</span><span>.</span><span>com</span></a> &amp; <a className="vglnk" href="http://Coupon.TheDogPaws.com" rel="nofollow"><span>Coupon</span><span>.</span><span>TheDogPaws</span><span>.</span><span>com</span></a> is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to <a className="vglnk" href="http://Amazon.com" rel="nofollow"><span>Amazon</span><span>.</span><span>com</span></a>. Amazon, the Amazon logo, AmazonSupply, and the AmazonSupply logo are trademarks of <a className="vglnk" href="http://Amazon.com" rel="nofollow"><span>Amazon</span><span>.</span><span>com</span></a>, Inc. or its affiliates. <br /> *Amazon and the Amazon logo are trademarks of <a className="vglnk" href="http://Amazon.com" rel="nofollow"><span>Amazon</span><span>.</span><span>com</span></a>, Inc., or its affiliates. Additionally, <a className="vglnk" href="http://TheDogPaws.com" rel="nofollow"><span>TheDogPaws</span><span>.</span><span>com</span></a> participates in various other affiliate programs, and we sometimes get a commission through purchases made through our links.
                  </font>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center" data-animation="fadeInUp">
              <div className="widget topmargin_30">
                <h5>Disclaimer</h5>
                <div className="widget_text scn">
                  <font size="2">
                    The website does not intend to provide veterinary advice. We go to great lengths to help users better understand their dogs; however, the content on this blog is not a substitute for veterinary guidance. For more information, please read our: <a href="https://thedogpaws.com/privacy-policy/">Privacy Policy &amp; Disclaimer</a>.
                  </font>
                </div>
              </div>
              <div className="widget topmargin_30">
                <h5>Privacy & Cookies</h5>
                <div className="widget_text scn">
                  <font size="2">
                    This site uses cookies. By continuing to use this website, you agree to their use. To find out more, including how to control cookies, see here: <a href="https://www.thedogpaws.com/privacy-policy/">Privacy Policy &amp; Disclaimer </a>
                  </font>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="ls page_copyright section_padding_15">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p>&copy; Copyright 2019 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}