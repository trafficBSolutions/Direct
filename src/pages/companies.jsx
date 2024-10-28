const Company = () => {
    return (
        <body>
        <header class="site-header">
        <div class="container">
          <h1 class="school-logo-text float-left">
            <a href="/dashboard"><strong>Direct</strong> Connection</a>
          </h1>
          <div class="site-header__menu group">
            <nav class="main-navigation">
              <ul>
                <li><a href="/events">Events</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </nav>
            <div class="site-header__util">
            <a href="" class="btn--small btn--dark-orange float-left push-right">View Profile</a>
              <a href="" class="btn--small btn--orange float-left push-right btn--with-photo">
              <span class="site-header__avatar"><img alt="" src="http://2.gravatar.com/avatar/200ce0715dd57ac294e64211e03dab28?s=60&amp;d=mm&amp;r=g" srcset="http://2.gravatar.com/avatar/200ce0715dd57ac294e64211e03dab28?s=120&amp;d=mm&amp;r=g 2x" class="avatar avatar-60 photo" height="60" width="60" loading="lazy" decoding="async"></img></span>
              <span class="btn__text">Log Out</span>
            </a>
                                   <span href="" class="search-trigger js-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></span>
            </div>
          </div>
        </div>
   </header>

   <div class="page-banner">
   <div class="page-banner__bg-image" style={ { backgroundImage: "url('connection.jpg')" } }></div>
      <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">All Companies</h1>
        <div class="page-banner__intro">
            <p>See all of our companies who joined us</p>
        </div>
      </div>
    </div>

    <div class="container container--narrow page-section">
    <ul class="link-list min-list">
        <li><a href="/company-page">Bartow Paving</a></li>
        <li><a href="/company-page">Southern Company</a></li>
        <li><a href="/company-page">Traffic &amp; Barrier Solutions</a></li>
        </ul>
        </div>

        <footer class="site-footer">
      <div class="site-footer__inner container container--narrow">
        <div class="group">
          <div class="site-footer__col-one">
            <h1 class="school-logo-text school-logo-text--alt-color">
              <a href=""><strong>Direct</strong> Connection</a>
            </h1>
            <p><a class="site-footer__link" href="">706-263-0175</a></p>
          </div>
        </div>
      </div>
</footer>

        </body>
    )
}

export default Company