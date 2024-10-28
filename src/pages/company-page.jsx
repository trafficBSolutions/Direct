const CP = () => {
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
              <a href="login.html" class="btn btn--small btn--orange float-left push-right">Logout</a>
              <a href="login.html" class="btn btn--small btn--dark-orange float-left push-right">View Profile</a>
              <form class="" action="front-page.html" method="post"></form>
              <input type="text" name="value" value="" placeholder="Search DC"></input>
              <input type="submit" name=""></input>
            </div>
          </div>
        </div>
   </header>

   <div class="page-banner">
   <div class="page-banner__bg-image" style={ { backgroundImage: "url('connection.jpg')" } }></div>
      <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">Bartow Paving</h1>
        <div class="page-banner__intro">
            <p></p>
        </div>
      </div>
    </div>

    <div class="container container--narrow page-section">
    <div class="metabox metabox--position-up metabox--with-home-link">
        <p><a class="metabox__blog-home-link" href="/companies"><i class="fa fa-home" aria-hidden="true"></i> All Companies</a> 
          <span class="metabox__main">Bartow Paving</span></p>
          </div>

          <div class="generic_content">
            <p>Bartow Paving is a total paving services company that specializes in crushed stone base and asphalt paving on municipal and commercial development projects in North Georgia and the surrounding areas.&nbsp;</p>
                </div>
            <hr class="section-break"></hr>
            <h2 class="headline headline--medium">Bartow Paving Portfolio</h2>

            <ul class="professor-cards">  <li class="professor-card__list-item">
    <a class="professor-card" href="">Bartow Paving    <img class="professor-card__image" src=""></img>
    <span class="professor-card__name">Bartow Paving</span>
  </a>
  </li>
</ul>
<hr class="section-break"></hr>
<h2 class="headline headline--medium">Map</h2>
<hr class="section-break"></hr>

<h2 class="headline headline--medium">Upcoming Bartow Paving Events</h2>

<div class="event-summary">
            <a class="event-summary__date t-center" href="#">
              <span class="event-summary__month">Mar</span>
              <span class="event-summary__day">16</span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny">
                <a href="">
                Portfolio Sharing</a></h5>
              <p>Join us for a portfolio sharing session. You can get your company out there to get good business…</p>
            </div>
          </div>


          <div class="event-summary">
            <a class="event-summary__date t-center" href="#">
              <span class="event-summary__month">Mar</span>
              <span class="event-summary__day">16</span>
            </a>
            <div class="event-summary__content">
              <h5 class="event-summary__title headline headline--tiny">
                <a href="">
                Traffic Control Items</a></h5>
              <p>In this event, we will be attending an online webinar to discuss any traffic control items any company…</p>
            </div>
          </div>

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

export default CP