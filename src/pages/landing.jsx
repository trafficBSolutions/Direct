import '../css/front-page.css'
import '../css/header.css'
import '../css/footer.css'
const Landing = () => {
    return (
        <div>
     <header className="site-header">
        <div className="container">
          <h1 className="school-logo-text float-left">
            <a><strong>Direct</strong> Connection</a>
          </h1>
          <div className="site-header__menu group">
            <div className="site-header__util">
              <a href="/login" className="btn btn--small btn--orange float-left push-right login-button">Login</a>
              <form className="" action="front-page.html" method="post"></form>
            </div>
          </div>
        </div>
   </header>

      <div className="page-banner">
        <div className="page-banner__bg-image" style={ { backgroundImage: "url('connection.jpg')" } }></div>
              <div className="page-banner__content container t-center c-white">
                <h1 className="land-heading">Direct Connection</h1>
                <a className="btn btn--large btn--blue add-company" href="/register">Add Your Company</a>
                          <div className="land-row">
                <div className="offer-container">
                  <h1 className="dc-offer">What DC has to offer</h1>
                      <p className="dc-descript">DC is a company that makes connecting faster, easier and more convenient. We can help you and your company to get your personal
                         or business name out there. We are the first Online Company convention center. 
                        You will find yourself traveling through a variety of companies that you can interact with online. You
                        can locate a company and immediately request open bids on projects, connect with different departments through the company, send payment and receive payment, 
                        find the next date that company will be interacting and do live meetings and marketing via zoom, webinars, skype and much more. Think as if you just saved yourself hours on
                         end locating your next company project and add a few members to your team along the way.    
                        Find what request application forms and highly qualified employees  connected to Companies that Qualified employees,  future investors, employees
                          with  other swap company information swap, quotes send quotes, futuristic, billing processing. DC connections can help get companies` portfolios easily available.</p>
                </div>
              </div>
              </div>
              </div>
              <div className="full-width-split group">
                <div className="full-width-split__one">
                  <div className="full-width-split__inner">
                    <h2 className="headline headline--small-plus t-center">Upcoming Events</h2>
                    
          
                    <div className="event-summary">
                      <a className="event-summary__date t-center">
                        <span className="event-summary__month">Mar</span>
                        <span className="event-summary__day">25</span>
                      </a>
                      <div className="event-summary__content">
                        <h5 className="event-summary__title headline headline--tiny"><a>Traffic Control Items</a></h5>
                        <p>We will have a discussion to discuss any traffic control items any company needs for improvement<a className="nu gray">Learn more</a></p>
                      </div>
                    </div>
                    <div className="event-summary">
                      <a className="event-summary__date t-center">
                        <span className="event-summary__month">Apr</span>
                        <span className="event-summary__day">02</span>
                      </a>
                      <div className="event-summary__content">
                        <h5 className="event-summary__title headline headline--tiny"><a>Chattanooga Traffic Plan</a></h5>
                        <p>In this event, we will discuss how we need to set up for lane closures. <a className="nu gray">Learn more</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="full-width-split__two">
                  <div className="full-width-split__inner">
                    <h2 className="headline headline--small-plus t-center">From Our Blogs</h2>
                                <div className="event-summary">
                          <a className="event-summary__date event-summary__date--beige t-center">
                            <span className="event-summary__month">Dec</span>
                            <span className="event-summary__day">29</span>  
                          </a>
                          <div className="event-summary__content">
                            <h5 className="event-summary__title headline headline--tiny"><a>Welcome Southern Company</a></h5>
                            <p>Southern Company has decided to join our community!</p>
                          </div>
                        </div>
                  </div>
                </div>
                </div>
                <footer className="site-footer">
                  <div className="site-footer__inner container container--narrow">
                    <div className="group">
                      <div className="site-footer__col-one">
                        <h1 className="school-logo-text school-logo-text--alt-color">
                          <a href="/"><strong>Direct</strong> Connection</a>
                        </h1>
                        <p><a className="site-footer__link" href="/">706-263-0175</a></p>
                      </div>
                    </div>
                  </div>
            </footer>
       </div>
    )
}

export default Landing