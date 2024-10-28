import '../css/dashboard.css'
import '../css/header.css'
import '../css/footer.css'
const Dashboard = () => {
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
                <li><a href="/events">Events</a></li>
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

      <div className="page-dashboard-banner">
      <img className="page-banner-img" src="connection.gif"></img>
              <div className="dashboard-page-banner-content">
                <h1 className="direct-dash-text">DIRECT CONNECTION</h1>
                <a className="btn btn--full company-button" href="/company-page">COMPANIES</a>
                          <div className="row">
                  <h2 className="dash-company-descript">See what all of our companies are up to with their latest news and events. Even connect with companies by viewing and sharing.</h2>
              </div>
              </div>
              </div>
              <div className="full-width-split group">
                <div className="full-width-split__one">
                  <div className="full-width-split__inner">
                    <h2 className="headline headline--small-plus t-center">Upcoming Events</h2>
                    
          
                    <div className="event-summary">
                      <a href="" className="event-summary__date t-center">
                        <span className="event-summary__month">Mar</span>
                        <span className="event-summary__day">25</span>
                      </a>
                      <div className="event-summary__content">
                        <h5 className="event-summary__title headline headline--tiny"><a href="">Traffic Control Items</a></h5>
                        <p>We will have a discussion to discuss any traffic control items any company needs for improvement<a className="nu gray">Learn more</a></p>
                      </div>
                    </div>
                    <div className="event-summary">
                      <a href="" className="event-summary__date t-center">
                        <span className="event-summary__month">Apr</span>
                        <span className="event-summary__day">02</span>
                      </a>
                      <div className="event-summary__content">
                        <h5 className="event-summary__title headline headline--tiny"><a href="">Chattanooga Traffic Plan</a></h5>
                        <p>In this event, we will discuss how we need to set up for lane closures. <a href="" className="nu gray">Learn more</a></p>
                      </div>
                    </div>
          
                    <p className="t-center no-margin"><a href="/events" className="btn events-dash-button">View All Events</a></p>
                  </div>
                </div>

                <div className="full-width-split__two">
                  <div className="full-width-split__inner">
                    <h2 className="headline headline--small-plus t-center">From Our Blogs</h2>
                                <div className="event-summary">
                          <a href="/blog" className="event-summary__date event-summary__date--beige t-center">
                            <span className="event-summary__month">Dec</span>
                            <span className="event-summary__day">29</span>  
                          </a>
                          <div className="event-summary__content">
                            <h5 className="event-summary__title headline headline--tiny"><a href="">Welcome Southern Company</a></h5>
                            <p>Southern Company has decided to join our community! <a href="" className="nu gray">Read more</a></p>
                          </div>
                        </div>
                    <p className="t-center no-margin"><a href="/blog" className="btn blog-posts-button">View All Blog Posts</a></p>
                  </div>
                </div>
                </div>
                <footer className="site-footer">
                  <div className="site-footer__inner container container--narrow">
                    <div className="group">
                      <div className="site-footer__col-one">
                        <h1 className="school-logo-text school-logo-text--alt-color">
                          <a href="index.html"><strong>Direct</strong> Connection</a>
                        </h1>
                        <p><a href="" className="site-footer__link">706-263-0175</a></p>
                      </div>
                    </div>
                  </div>
            </footer>
       </div>
    )
}

export default Dashboard