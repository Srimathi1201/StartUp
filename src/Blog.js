const Blog = () => {
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
                  <a href="/about" className="nav-item nav-link">About</a>
                  <a href="/services" className="nav-item nav-link">Services</a>
                  <a href="/blog" className="nav-item nav-link active">Blog</a>
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
                  <h1 className="display-4 text-white animated zoomIn">Blog Grid</h1>
                  <a href className="h5 text-white">Home</a>
                  <i className="far fa-circle text-white px-2" />
                  <a href className="h5 text-white">Blog Grid</a>
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
          {/* Blog Start */}
          <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
              <div className="row g-5">
                {/* Blog list Start */}
                <div className="col-lg-8">
                  <div className="row g-5">
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.6s">
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>Web Design</a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2" />John Doe</small>
                            <small><i className="far fa-calendar-alt text-primary me-2" />01 Jan, 2045</small>
                          </div>
                          <h4 className="mb-3">How to build a website</h4>
                          <p>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet</p>
                          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 wow slideInUp" data-wow-delay="0.1s">
                      <nav aria-label="Page navigation">
                        <ul className="pagination pagination-lg m-0">
                          <li className="page-item disabled">
                            <a className="page-link rounded-0" href="#" aria-label="Previous">
                              <span aria-hidden="true"><i className="bi bi-arrow-left" /></span>
                            </a>
                          </li>
                          <li className="page-item active"><a className="page-link" href="#">1</a></li>
                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                          <li className="page-item">
                            <a className="page-link rounded-0" href="#" aria-label="Next">
                              <span aria-hidden="true"><i className="bi bi-arrow-right" /></span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/* Blog list End */}
                {/* Sidebar Start */}
                <div className="col-lg-4">
                  {/* Search Form Start */}
                  <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                    <div className="input-group">
                      <input type="text" className="form-control p-3" placeholder="Keyword" />
                      <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
                    </div>
                  </div>
                  {/* Search Form End */}
                  {/* Category Start */}
                  <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 className="mb-0">Categories</h3>
                    </div>
                    <div className="link-animated d-flex flex-column justify-content-start">
                      <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Web Design</a>
                      <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Web Development</a>
                      <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Web Development</a>
                      <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Keyword Research</a>
                      <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Email Marketing</a>
                    </div>
                  </div>
                  {/* Category End */}
                  {/* Recent Post Start */}
                  <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 className="mb-0">Recent Post</h3>
                    </div>
                    <div className="d-flex rounded overflow-hidden mb-3">
                      <img className="img-fluid" src="img/blog-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                      <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                      </a>
                    </div>
                    <div className="d-flex rounded overflow-hidden mb-3">
                      <img className="img-fluid" src="img/blog-2.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                      <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                      </a>
                    </div>
                    <div className="d-flex rounded overflow-hidden mb-3">
                      <img className="img-fluid" src="img/blog-3.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                      <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                      </a>
                    </div>
                    <div className="d-flex rounded overflow-hidden mb-3">
                      <img className="img-fluid" src="img/blog-1.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                      <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                      </a>
                    </div>
                    <div className="d-flex rounded overflow-hidden mb-3">
                      <img className="img-fluid" src="img/blog-2.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                      <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                      </a>
                    </div>
                    <div className="d-flex rounded overflow-hidden mb-3">
                      <img className="img-fluid" src="img/blog-3.jpg" style={{width: '100px', height: '100px', objectFit: 'cover'}} alt="" />
                      <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                      </a>
                    </div>
                  </div>
                  {/* Recent Post End */}
                  {/* Image Start */}
                  <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                    <img src="img/blog-1.jpg" alt="" className="img-fluid rounded" />
                  </div>
                  {/* Image End */}
                  {/* Tags Start */}
                  <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 className="mb-0">Tag Cloud</h3>
                    </div>
                    <div className="d-flex flex-wrap m-n1">
                      <a href className="btn btn-light m-1">Design</a>
                      <a href className="btn btn-light m-1">Development</a>
                      <a href className="btn btn-light m-1">Marketing</a>
                      <a href className="btn btn-light m-1">SEO</a>
                      <a href className="btn btn-light m-1">Writing</a>
                      <a href className="btn btn-light m-1">Consulting</a>
                      <a href className="btn btn-light m-1">Design</a>
                      <a href className="btn btn-light m-1">Development</a>
                      <a href className="btn btn-light m-1">Marketing</a>
                      <a href className="btn btn-light m-1">SEO</a>
                      <a href className="btn btn-light m-1">Writing</a>
                      <a href className="btn btn-light m-1">Consulting</a>
                    </div>
                  </div>
                  {/* Tags End */}
                  {/* Plain Text Start */}
                  <div className="wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                      <h3 className="mb-0">Plain Text</h3>
                    </div>
                    <div className="bg-light text-center" style={{padding: '30px'}}>
                      <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                      <a href className="btn btn-primary py-2 px-4">Read More</a>
                    </div>
                  </div>
                  {/* Plain Text End */}
                </div>
                {/* Sidebar End */}
              </div>
            </div>
          </div>
          {/* Blog End */}
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

export default Blog;