const Blog = () => {
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
                <li><a href="Events.html">Events</a></li>
                <li class="current-menu-item"><a href="/blog">Blog</a></li>
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
        <div class="page-banner__content container t-center c-white">
          <h1 class="headline headline--large">Blog</h1>
          <h2 class="headline headline--medium">Keep up with our latest news from our companies</h2>
        </div>
        </div>
          <div class="container-log">
            <div class="wrapper">
              <section class="post">
                <header>Create Post</header>
                <form action="#">
                  <div class="content">
                    <div class="details">
                      <p>Direct Connection</p>
                      </div>
                    </div>
                  <textarea placeholder="What's on your company's mind?" required></textarea>
                  <div class="options">
                    <p>Add to your Post</p>
                    <ul class="list">
                      <li>Photo</li>
                      <li>Video</li>
                      <li>Tag</li>
                      <li>Emoji</li>
                    </ul>
                  </div>
                  <button>Post</button>
                </form>
              </section>
            </div>
          </div>
        
          <h2>Latest Blogs</h2>
        </body>
    )
}

export default Blog