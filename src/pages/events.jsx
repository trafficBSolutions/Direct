import '../css/event.css'
import '../css/header.css'
import '../css/footer.css'
const Event = () => {
    return (
        <div>
        <header className="site-header">
        <div className="container">
          <h1 className="school-logo-text float-left">
            <a><strong>Direct</strong> Connection</a>
          </h1>
          <div className="site-header__menu group">
            <nav className="main-navigation">
              <ul>
                <li className="current-menu-item"><a href="">Events</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </nav>
            <div className="site-header__util">
            
              <button href="" className="btn btn--small view-profile-button">View Profile</button>
              <button href="" className="btn btn--small float-left push-right btn--with-photo logout-button">
              <span className="site-header__avatar"><img alt="" src="http://2.gravatar.com/avatar/200ce0715dd57ac294e64211e03dab28?s=60&amp;d=mm&amp;r=g" srcSet="http://2.gravatar.com/avatar/200ce0715dd57ac294e64211e03dab28?s=120&amp;d=mm&amp;r=g 2x" className="avatar avatar-60 photo" height="60" width="60" loading="lazy" decoding="async"></img></span>
              <span className="btn__text">Log Out</span>
            </button>
                                   <span href="" className="search-trigger js-search-trigger"><i className="fa fa-search" aria-hidden="true"></i></span>
                     </div>
                     </div>
                     </div>
   </header>
   <div class="page-event-banner">
   <div class="page-event-banner__bg-image" style={ { backgroundImage: "url('connection.jpg')" } }></div>
      <div class="page-event-banner__content container event-container--narrow">
        <h1 class="page-event-banner__title">All Events</h1>
        <div class="page-event-banner__intro ">
            <p>See all of our events we have to offer</p>
        </div>
      </div>
    </div>

    <div class="container container--narrow page-section">
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
    <hr class="section-break"></hr>
    <a href="" class="btn btn--large btn--blue">Add Event</a>
    <a href="/past-events" class="btn btn--large btn--blue">Past Events</a>
    </div>

    <footer class="site-footer">
      <div class="site-footer__inner container container--narrow">
        <div class="group">
          <div class="site-footer__col-one">
            <h1 class="school-logo-text school-logo-text--alt-color">
              <a href="/"><strong>Direct</strong> Connection</a>
            </h1>
            <p><a class="site-footer__link" href="/">706-263-0175</a></p>
          </div>
        </div>
      </div>
</footer>
   </div>
    )
}

export default Event