const About = () => {
      return (
        <div>
          {/* Spinner Start */}
          <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner" />
          </div>
          {/* Spinner End */}
          {/* Topbar Start */}
          <div className="container-fluid bg-dark px-5 d-none d-lg-block">
            <div className="row gx-0">
              <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                  <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</small>
                  <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+012 345 6789</small>
                  <small className="text-light"><i className="fa fa-envelope-open me-2" />info@example.com</small>
                </div>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{height: '45px'}}>
                  <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                  <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                  <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                  <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                  <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}
          {/* Navbar Start */}
          <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
              <a href="/" className="navbar-brand p-0">
                <h1 className="m-0"><i className="fa fa-user-tie me-2" />Startup</h1>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                  <a href="/" className="nav-item nav-link">Home</a>
                  <a href="/about" className="nav-item nav-link active">About</a>
                  <a href="/services" className="nav-item nav-link">Services</a>
                  <a href="/blog" className="nav-item nav-link">Blog</a>
                  <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                      <a href="/price" className="dropdown-item">Pricing Plan</a>
                      <a href="/feature" className="dropdown-item">Our features</a>
                      <a href="/team" className="dropdown-item">Team Members</a>
                      <a href="/testimonial" className="dropdown-item">Testimonial</a>
                      <a href="/quote" className="dropdown-item">Free Quote</a>
                    </div>
                  </div>
                  <a href="/contact" className="nav-item nav-link">Contact</a>
                </div>
                <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search" /></butaton>
                <a href="https://htmlcodex.com/startup-company-website-template" className="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a>
              </div>
            </nav>
            <div className="container-fluid bg-primary py-5 bg-header" style={{marginBottom: '90px'}}>
              <div className="row py-5">
                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                  <h1 className="display-4 text-white animated zoomIn">About Us</h1>
                  <a href className="h5 text-white">Home</a>
                  <i className="far fa-circle text-white px-2" />
                  <a href className="h5 text-white">About</a>
                </div>
              </div>
            </div>
          </div>
          {/* Navbar End */}
          {/* Full Screen Search Start */}
          <div className="modal fade" id="searchModal" tabIndex={-1}>
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content" style={{background: 'rgba(9, 30, 62, .7)'}}>
                <div className="modal-header border-0">
                  <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                  <div className="input-group" style={{maxWidth: '600px'}}>
                    <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                    <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Full Screen Search End */}
          {/* About Start */}
          <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-7">
                  <div className="section-title position-relative pb-3 mb-5">
                    <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                    <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
                  </div>
                  <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                  <div className="row g-0 mb-3">
                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                      <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Award Winning</h5>
                      <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Professional Staff</h5>
                    </div>
                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                      <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />24/7 Support</h5>
                      <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />Fair Prices</h5>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                    <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{width: '60px', height: '60px'}}>
                      <i className="fa fa-phone-alt text-white" />
                    </div>
                    <div className="ps-4">
                      <h5 className="mb-2">Call to ask any question</h5>
                      <h4 className="text-primary mb-0">+012 345 6789</h4>
                    </div>
                  </div>
                  <a href="/quote" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a>
                </div>
                <div className="col-lg-5" style={{minHeight: '500px'}}>
                  <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" style={{objectFit: 'cover'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About End */}
          {/* Team Start */}
          {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
              <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: '600px'}}>
                <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
              </div>
              <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                  <div className="team-item bg-light rounded overflow-hidden">
                    <div className="team-img position-relative overflow-hidden">
                      <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                      <div className="team-social">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <h4 className="text-primary">Full Name</h4>
                      <p className="text-uppercase m-0">Designation</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="team-item bg-light rounded overflow-hidden">
                    <div className="team-img position-relative overflow-hidden">
                      <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                      <div className="team-social">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <h4 className="text-primary">Full Name</h4>
                      <p className="text-uppercase m-0">Designation</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                  <div className="team-item bg-light rounded overflow-hidden">
                    <div className="team-img position-relative overflow-hidden">
                      <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                      <div className="team-social">
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <h4 className="text-primary">Full Name</h4>
                      <p className="text-uppercase m-0">Designation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Team End */}
          {/* Vendor Start */}
          {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 mb-5">
              <div className="bg-white">
                <div className="owl-carousel vendor-carousel">
                  <img src="img/vendor-1.jpg" alt="" />
                  <img src="img/vendor-2.jpg" alt="" />
                  <img src="img/vendor-3.jpg" alt="" />
                  <img src="img/vendor-4.jpg" alt="" />
                  <img src="img/vendor-5.jpg" alt="" />
                  <img src="img/vendor-6.jpg" alt="" />
                  <img src="img/vendor-7.jpg" alt="" />
                  <img src="img/vendor-8.jpg" alt="" />
                  <img src="img/vendor-9.jpg" alt="" />
                </div>
              </div>
            </div>
          </div> */}
          {/* Vendor End */}
          {/* Footer Start */}
          <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-6 footer-about">
                  <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                    <a href="/" className="navbar-brand">
                      <h1 className="m-0 text-white"><i className="fa fa-user-tie me-2" />Startup</h1>
                    </a>
                    <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                    <form action>
                      <div className="input-group">
                        <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                        <button className="btn btn-dark">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6">
                  <div className="row gx-5">
                    <div className="col-lg-4 col-md-12 pt-5 mb-5">
                      <div className="section-title section-title-sm position-relative pb-3 mb-4">
                        <h3 className="text-light mb-0">Get In Touch</h3>
                      </div>
                      <div className="d-flex mb-2">
                        <i className="bi bi-geo-alt text-primary me-2" />
                        <p className="mb-0">123 Street, New York, USA</p>
                      </div>
                      <div className="d-flex mb-2">
                        <i className="bi bi-envelope-open text-primary me-2" />
                        <p className="mb-0">info@example.com</p>
                      </div>
                      <div className="d-flex mb-2">
                        <i className="bi bi-telephone text-primary me-2" />
                        <p className="mb-0">+012 345 67890</p>
                      </div>
                      <div className="d-flex mt-4">
                        <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal" /></a>
                        <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal" /></a>
                        <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal" /></a>
                        <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal" /></a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                      <div className="section-title section-title-sm position-relative pb-3 mb-4">
                        <h3 className="text-light mb-0">Quick Links</h3>
                      </div>
                      <div className="link-animated d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Home</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />About Us</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Our Services</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Meet The Team</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Latest Blog</a>
                        <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2" />Contact Us</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                      <div className="section-title section-title-sm position-relative pb-3 mb-4">
                        <h3 className="text-light mb-0">Popular Links</h3>
                      </div>
                      <div className="link-animated d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Home</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />About Us</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Our Services</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Meet The Team</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Latest Blog</a>
                        <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2" />Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid text-white" style={{background: '#061429'}}>
            <div className="container text-center">
              <div className="row justify-content-end">
                <div className="col-lg-8 col-md-6">
                  <div className="d-flex align-items-center justify-content-center" style={{height: '75px'}}>
                    <p className="mb-0">© <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved. 
                      {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                      Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End */}
          {/* Back to Top */}
          <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up" /></a>
          {/* JavaScript Libraries */}
          {/* Template Javascript */}
        </div>
      );
    }

export default About;