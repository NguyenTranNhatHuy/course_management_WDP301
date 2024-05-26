import React from 'react'

function Home() {
    return (
        <div>
            <>
                {/* The social media icon bar */}
                <div className="icon-bar-sticky">
                    <a
                        href="#"
                        className="waves-effect waves-light btn btn-social-icon btn-facebook"
                    >
                        <i className="fa fa-facebook" />
                    </a>
                    <a
                        href="#"
                        className="waves-effect waves-light btn btn-social-icon btn-twitter"
                    >
                        <i className="fa fa-twitter" />
                    </a>
                    <a
                        href="#"
                        className="waves-effect waves-light btn btn-social-icon btn-linkedin"
                    >
                        <i className="fa fa-linkedin" />
                    </a>
                    <a
                        href="#"
                        className="waves-effect waves-light btn btn-social-icon btn-youtube"
                    >
                        <i className="fa fa-youtube-play" />
                    </a>
                </div>
                <header className="top-bar text-dark">
                    <div className="topbar">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-lg-6 col-12 d-lg-block d-none">
                                    <div className="topbar-social text-center text-md-start topbar-left">
                                        <ul className="list-inline d-md-flex d-inline-block">
                                            <li className="pe-10">
                                                <a href="#">
                                                    <i className="fa fa-question-circle" /> Ask a Question
                                                </a>
                                            </li>
                                            <li className="ms-10 pe-10">
                                                <a href="#">
                                                    <i className="fa fa-envelope" /> info@EduLearn.com
                                                </a>
                                            </li>
                                            <li className="ms-10 pe-10">
                                                <a href="#">
                                                    <i className="fa fa-phone" /> +(1) 123-878-1649
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 xs-mb-10">
                                    <div className="topbar-call text-center text-lg-end topbar-right">
                                        <ul className="list-inline d-lg-flex justify-content-end">
                                            <li className="me-10 ps-10 lng-drop">
                                                <select className="header-lang-bx selectpicker">
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                    <option>GBP</option>
                                                    <option>INR</option>
                                                </select>
                                            </li>
                                            <li className="me-10 ps-10 lng-drop">
                                                <select className="header-lang-bx selectpicker">
                                                    <option data-icon="flag-icon flag-icon-us">Eng USA</option>
                                                    <option data-icon="flag-icon flag-icon-gb">Eng UK</option>
                                                </select>
                                            </li>
                                            <li className="me-10 ps-10">
                                                <a href="#">
                                                    <i className="fa fa-user d-md-inline-block d-none" />{" "}
                                                    Register
                                                </a>
                                            </li>
                                            <li className="me-10 ps-10">
                                                <a href="#">
                                                    <i className="fa fa-sign-in d-md-inline-block d-none" />{" "}
                                                    Login
                                                </a>
                                            </li>
                                            <li className="me-10 ps-10">
                                                <a href="#">
                                                    <i className="fa fa-dashboard d-md-inline-block d-none" />{" "}
                                                    My Account
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav hidden="" className="nav-dark nav-transparent">
                        <div className="nav-header">
                            <a href="index.html" className="brand">
                                <img src="../../images/logo-light-text5.png" alt="" />
                            </a>
                            <button className="toggle-bar">
                                <span className="ti-menu" />
                            </button>
                        </div>
                        <ul className="menu">
                            <li className="dropdown">
                                <a href="#">Home</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="index.html">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="index2.html">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="index3.html">Home 3</a>
                                    </li>
                                    <li>
                                        <a href="index4.html">Home 4</a>
                                    </li>
                                    <li>
                                        <a href="index5.html">Home 5</a>
                                    </li>
                                    <li>
                                        <a href="index6.html">Home 6</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li className="dropdown">
                                <a href="#">Courses</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="courses_list.html">Courses List</a>
                                    </li>
                                    <li>
                                        <a href="courses_list_right_sidebar.html">
                                            Courses List Right Sidebar
                                        </a>
                                    </li>
                                    <li>
                                        <a href="courses_list-map.html">Courses with Map</a>
                                    </li>
                                    <li>
                                        <a href="courses_categories.html">Courses Categories</a>
                                    </li>
                                    <li>
                                        <a href="courses_details.html">Courses Details</a>
                                    </li>
                                    <li>
                                        <a href="courses_details_right_sidebar.html">
                                            Courses Details right sidebar
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="megamenu">
                                <a href="#">Pages</a>
                                <div className="megamenu-content">
                                    <div className="row">
                                        <div className="col-lg-3 col-12">
                                            <ul className="list-group">
                                                <li>
                                                    <h4 className="menu-title">User Pages</h4>
                                                </li>
                                                <li>
                                                    <a href="faqs.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        FAQs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="inovice.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Invoice
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="membership.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Membership
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="mydashboard.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        My Dashboard
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="staff.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Staff
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="testimonial.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Testimonial
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="typography.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Typography
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="user_list.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        User List
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="userprofile.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        User Profile
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="about.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        About
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact_us.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-12">
                                            <ul className="list-group">
                                                <li>
                                                    <h4 className="menu-title">Widgets</h4>
                                                </li>
                                                <li>
                                                    <a href="widgets.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Widgets
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="courses_list.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Courses List
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="courses_details.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Courses Details
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="register.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Register
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="login.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Login
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="register_login.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Register &amp; Login
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="forgot_pass.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Forgot Password
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="lockscreen.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Lock Screen
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="maintenance.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Under Constructions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="404.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        404
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="500.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        500
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-12">
                                            <ul className="list-group">
                                                <li>
                                                    <h4 className="menu-title">Features</h4>
                                                </li>
                                                <li>
                                                    <a href="header_default.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Header One
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="header_style2.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Header Two
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="header_style3.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Header Three
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="header_style4.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Header Four
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="header_style5.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Header Five
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="footer_style1.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Footer One
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="footer_style2.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Footer Two
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="footer_style3.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Footer Three
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="footer_style4.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Footer Four
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="footer_style5.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Footer Five
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="footer_style6.html">
                                                        <i className="ti-arrow-circle-right me-10" />
                                                        Footer Six
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-12 d-none d-lg-block">
                                            <img
                                                src="../../images/front-end-img/adv.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="#">Blog</a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown">
                                        <a href="#">Grid Blog</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="blog_grid_2.html">Grid 2 colunm</a>
                                            </li>
                                            <li>
                                                <a href="blog_grid_3.html">Grid 3 colunm</a>
                                            </li>
                                            <li>
                                                <a href="blog_grid_left_sidebar.html">blog left sidebar</a>
                                            </li>
                                            <li>
                                                <a href="blog_grid_right_sidebar.html">blog right sidebar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">List Blog</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="blog_list.html">Blog List</a>
                                            </li>
                                            <li>
                                                <a href="blog_list_left_sidebar.html">
                                                    Blog List Left Sidebar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog_list_right_sidebar.html">
                                                    Blog List right Sidebar
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Single Blog Post</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="blog_single_grid_post.html">Single Grid Post</a>
                                            </li>
                                            <li>
                                                <a href="blog_single_html5video_post.html">
                                                    Single html5 Video-post
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog_single_image_post.html">Single Image Post</a>
                                            </li>
                                            <li>
                                                <a href="blog_single_slider_post.html">Single Slider Post</a>
                                            </li>
                                            <li>
                                                <a href="blog_single_soundcloud_post.html">
                                                    Single SoundCloud Post
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog_single_vimeo_post.html">Single Vimeo Post</a>
                                            </li>
                                            <li>
                                                <a href="blog_single_post.html">Single without image post</a>
                                            </li>
                                            <li>
                                                <a href="blog_single_youtube_post.html">
                                                    Single Youtube Post
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#">Shop</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="shop.html">Shop Grid</a>
                                    </li>
                                    <li>
                                        <a href="shop-cart.html">Shop Cart</a>
                                    </li>
                                    <li>
                                        <a href="shop-checkout.html">Shop Checkout</a>
                                    </li>
                                    <li>
                                        <a href="shop-details.html">Shop Details</a>
                                    </li>
                                    <li>
                                        <a href="shop-orders.html">Shop Orders</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact_us.html">Contact</a>
                            </li>
                        </ul>
                        <ul className="attributes">
                            <li className="d-md-block d-none">
                                <a href="#" className="px-10 pt-15 pb-10">
                                    <div className="btn btn-primary py-5">Enroll Now</div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="toggle-search-fullscreen">
                                    <span className="ti-search" />
                                </a>
                            </li>
                            <li className="megamenu" data-width={270}>
                                <a href="#">
                                    <span className="ti-shopping-cart" />
                                </a>
                                <div className="megamenu-content megamenu-cart">
                                    {/* Start Shopping Cart */}
                                    <div className="cart-header">
                                        <div className="total-price">
                                            Total: <span>$2,432.93</span>
                                        </div>
                                        <i className="ti-shopping-cart" />
                                        <span className="badge">3</span>
                                    </div>
                                    <div className="cart-body">
                                        <ul>
                                            <li>
                                                <img
                                                    src="../../images/front-end-img/product/product-1.png"
                                                    alt=""
                                                />
                                                <h5 className="title">Lorem ipsum dolor</h5>
                                                <span className="qty">Quantity: 02</span>
                                                <span className="price-st">$843,12</span>
                                                <a href="#" className="link" />
                                            </li>
                                            <li>
                                                <img
                                                    src="../../images/front-end-img/product/product-2.png"
                                                    alt=""
                                                />
                                                <h5 className="title">Lorem ipsum dolor</h5>
                                                <span className="qty">Quantity: 02</span>
                                                <span className="price-st">$843,12</span>
                                                <a href="#" className="link" />
                                            </li>
                                            <li>
                                                <img
                                                    src="../../images/front-end-img/product/product-3.png"
                                                    alt=""
                                                />
                                                <h5 className="title">Lorem ipsum dolor</h5>
                                                <span className="qty">Quantity: 02</span>
                                                <span className="price-st">$843,12</span>
                                                <a href="#" className="link" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cart-footer">
                                        <a href="#">Checkout</a>
                                    </div>
                                    {/* End Shopping Cart */}
                                </div>
                            </li>
                        </ul>
                        <div className="wrap-search-fullscreen">
                            <div className="container">
                                <button className="close-search">
                                    <span className="ti-close" />
                                </button>
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>
                    </nav>
                </header>
                <section
                    className="bg-img pt-200 pb-150"
                    data-overlay-light={2}
                    style={{
                        backgroundImage: "url(../../images/front-end-img/banners/banner-1.jpg)",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center mt-80">
                                    <h1 className="box-title mb-30">Find Your Online Course</h1>
                                </div>
                                <form className="cours-search mb-30">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="What do you want to learn today?"
                                        />
                                        <button className="btn btn-primary" type="submit">
                                            Search
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center">
                                    <a href="courses_list.html" className="btn btn-primary-light">
                                        Browse Courses List
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-transparent">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="uni_box ovr_top">
                                    <div className="row align-items-center m-0">
                                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
                                            <div className="uni_tags">
                                                <h4>Over 70+ University Cources in one place</h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12">
                                            <div
                                                className="owl-carousel owl-theme"
                                                data-nav-arrow="false"
                                                data-nav-dots="false"
                                                data-items={5}
                                                data-md-items={4}
                                                data-sm-items={3}
                                                data-xs-items={2}
                                                data-xx-items={2}
                                            >
                                                <div className="item">
                                                    <img
                                                        src="../../images/front-end-img/unilogo/uni-1.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="item">
                                                    <img
                                                        src="../../images/front-end-img/unilogo/uni-2.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="item">
                                                    <img
                                                        src="../../images/front-end-img/unilogo/uni-3.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="item">
                                                    <img
                                                        src="../../images/front-end-img/unilogo/uni-4.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="item">
                                                    <img
                                                        src="../../images/front-end-img/unilogo/uni-5.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="item">
                                                    <img
                                                        src="../../images/front-end-img/unilogo/uni-6.jpg"
                                                        className="img-fluid"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-50" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-md-0 mb-30 p-30 bg-primary-light rounded">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="badge badge-danger">Free</span>
                                            <h3 className="my-20">
                                                <a href="courses_details.html">
                                                    Business Manegement <br /> Document
                                                </a>
                                            </h3>
                                            <a href="courses_list.html" className="btn btn-primary">
                                                View Courses
                                            </a>
                                        </div>
                                        <div>
                                            <img
                                                src="../../images/front-end-img/about/banner-img-1.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="p-30 bg-info-light rounded">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="badge badge-danger">new</span>
                                            <h3 className="my-20">
                                                <a href="courses_details.html">
                                                    Online Courses <br />
                                                    From Edulearn University
                                                </a>
                                            </h3>
                                            <a href="courses_list.html" className="btn btn-primary">
                                                Find Out More
                                            </a>
                                        </div>
                                        <div>
                                            <img
                                                src="../../images/front-end-img/about/banner-img-2.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-50 bg-white" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-12 text-center">
                                <h1 className="mb-15">Featured Categories</h1>
                                <hr className="w-100 bg-primary" />
                            </div>
                        </div>
                        <div className="row mt-30 justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="courses_wrap style_2">
                                    <a href="courses_list.html" className="courses_box">
                                        <div className="courses_icon">
                                            <i className="fa fa-code" />
                                        </div>
                                        <div className="courses_caption">
                                            <span>Development</span>
                                        </div>
                                        <div className="courses_count">
                                            <span>22 Course</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="courses_wrap style_2">
                                    <a href="courses_list.html" className="courses_box">
                                        <div className="courses_icon">
                                            <i className="fa fa-window-restore" />
                                        </div>
                                        <div className="courses_caption">
                                            <span>Web Designing</span>
                                        </div>
                                        <div className="courses_count">
                                            <span>22 Course</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="courses_wrap style_2">
                                    <a href="courses_list.html" className="courses_box">
                                        <div className="courses_icon">
                                            <i className="fa fa-leaf" />
                                        </div>
                                        <div className="courses_caption">
                                            <span>Lifestyle</span>
                                        </div>
                                        <div className="courses_count">
                                            <span>22 Course</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="courses_wrap style_2">
                                    <a href="courses_list.html" className="courses_box">
                                        <div className="courses_icon">
                                            <i className="fa fa-heartbeat" />
                                        </div>
                                        <div className="courses_caption">
                                            <span>Health &amp; Fitness</span>
                                        </div>
                                        <div className="courses_count">
                                            <span>22 Course</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="courses_wrap style_2">
                                    <a href="courses_list.html" className="courses_box">
                                        <div className="courses_icon">
                                            <i className="fa fa-map-marker" />
                                        </div>
                                        <div className="courses_caption">
                                            <span>Gov. Exams</span>
                                        </div>
                                        <div className="courses_count">
                                            <span>22 Course</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="courses_wrap style_2">
                                    <a href="courses_list.html" className="courses_box">
                                        <div className="courses_icon">
                                            <i className="fa fa-photo" />
                                        </div>
                                        <div className="courses_caption">
                                            <span>Photography</span>
                                        </div>
                                        <div className="courses_count">
                                            <span>22 Course</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="courses_wrap style_2">
                                    <a href="courses_list.html" className="courses_box">
                                        <div className="courses_icon">
                                            <i className="fa fa-server" />
                                        </div>
                                        <div className="courses_caption">
                                            <span>Finance &amp; Accounting</span>
                                        </div>
                                        <div className="courses_count">
                                            <span>22 Course</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                <div className="courses_wrap style_2">
                                    <a href="courses_list.html" className="courses_box">
                                        <div className="courses_icon">
                                            <i className="fa fa-scissors" />
                                        </div>
                                        <div className="courses_caption">
                                            <span>Office Productivity</span>
                                        </div>
                                        <div className="courses_count">
                                            <span>22 Course</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-50" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-12 text-center">
                                <h1 className="mb-15">Explore our Courses</h1>
                                <hr className="w-100 bg-primary" />
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-12">
                                <ul
                                    className="nav nav-tabs justify-content-center bb-0 mb-10"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            href="#all"
                                            role="tab"
                                        >
                                            All
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab1"
                                            role="tab"
                                        >
                                            Finance
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab2"
                                            role="tab"
                                        >
                                            Operations
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab3"
                                            role="tab"
                                        >
                                            Strategy &amp; Leadership
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab4"
                                            role="tab"
                                        >
                                            Marketing
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab5"
                                            role="tab"
                                        >
                                            Analytics
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab6"
                                            role="tab"
                                        >
                                            HR
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab7"
                                            role="tab"
                                        >
                                            Management
                                        </a>{" "}
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="all" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/4.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">General</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/6.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">IT &amp; Software</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/5.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Photography</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/2.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Programming Language</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Business Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">UI Design</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/10.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Computer Basic</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab1" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/5.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Photography</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/2.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Programming Language</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Business Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">UI Design</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab2" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Business Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">UI Design</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/10.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Computer Basic</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab3" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/5.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Photography</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/2.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Programming Language</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Business Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">UI Design</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab4" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Business Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">UI Design</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/10.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Computer Basic</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab5" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/5.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Photography</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/2.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Programming Language</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Business Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">UI Design</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab6" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Business Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">UI Design</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/10.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Computer Basic</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab7" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/4.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">General</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/6.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">IT &amp; Software</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Manegement</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="box">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/10.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="box-body">
                                                            <div className="text-start">
                                                                <h4 className="box-title">Computer Basic</h4>
                                                                <p className="mb-10 text-light fs-12">
                                                                    <i className="fa fa-calendar me-5" /> Sept 16th,
                                                                    2020
                                                                </p>
                                                                <p className="box-text">
                                                                    Some quick example text to build on the card title
                                                                    and make up the bulk of the card's content.
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    className="btn btn-outline btn-primary btn-sm"
                                                                >
                                                                    Read more
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-50" data-aos="fade-up">
                    <div className="container">
                        <div className="row align-items-center justify-content-between mb-5">
                            <div className="col-md-5 col-sm-12" data-aos="fade-up">
                                <div className="cpt-tx">
                                    <h2 className="mb-3">
                                        We Have The Best Online Education in The City
                                    </h2>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate non
                                        provident, similique
                                    </p>
                                    <div className="mb-3 me-4 ms-lg-0 me-lg-4">
                                        <div className="d-flex align-items-center">
                                            <div className="rounded-circle bg-primary-light p-2 small d-flex align-items-center justify-content-center">
                                                <i className="fa fa-check" />
                                            </div>
                                            <h6 className="mb-0 ms-3">Full lifetime access</h6>
                                        </div>
                                    </div>
                                    <div className="mb-3 me-4 ms-lg-0 me-lg-4">
                                        <div className="d-flex align-items-center">
                                            <div className="rounded-circle bg-primary-light p-2 small d-flex align-items-center justify-content-center">
                                                <i className="fa fa-check" />
                                            </div>
                                            <h6 className="mb-0 ms-3">20+ downloadable resources</h6>
                                        </div>
                                    </div>
                                    <div className="mb-3 me-4 ms-lg-0 me-lg-4">
                                        <div className="d-flex align-items-center">
                                            <div className="rounded-circle bg-primary-light p-2 small d-flex align-items-center justify-content-center">
                                                <i className="fa fa-check" />
                                            </div>
                                            <h6 className="mb-0 ms-3">Certificate of completion</h6>
                                        </div>
                                    </div>
                                    <div className="mb-3 me-4 ms-lg-0 me-lg-4">
                                        <div className="d-flex align-items-center">
                                            <div className="rounded-circle bg-primary-light p-2 small d-flex align-items-center justify-content-center">
                                                <i className="fa fa-check" />
                                            </div>
                                            <h6 className="mb-0 ms-3">Free Trial 7 Days</h6>
                                        </div>
                                    </div>
                                    <div className="text-start mt-4">
                                        <a href="#" className="btn btn-primary">
                                            Enrolled Today
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12" data-aos="fade-up">
                                <div className="mt-30 mt-md-0">
                                    <img
                                        src="../../images/front-end-img/about/about-img.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-50 row align-items-center justify-content-between">
                            <div
                                className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                                data-aos="fade-up"
                            >
                                <div className="mb-30 mb-md-0">
                                    <img
                                        src="../../images/front-end-img/about/4f.png"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div
                                className="col-xl-5 col-lg-5 col-md-6 col-sm-12"
                                data-aos="fade-up"
                            >
                                <div className="cpt-tx">
                                    <ol className="list-unstyled p-0">
                                        <li className="d-flex align-items-start my-3 my-md-4">
                                            <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-primary">
                                                <div className="position-absolute text-white h5 mb-0">1</div>
                                            </div>
                                            <div className="ms-3 ms-md-4">
                                                <h4>Create account</h4>
                                                <p>
                                                    Oluptatem accusantium doloremque laudantium, totam rem
                                                    aperiam, eaque ipsa.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start my-3 my-md-4">
                                            <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-primary">
                                                <div className="position-absolute text-white h5 mb-0">3</div>
                                            </div>
                                            <div className="ms-3 ms-md-4">
                                                <h4>Join Membership</h4>
                                                <p>
                                                    Error sit voluptatem actium doloremque laudantium, totam rem
                                                    aperiam, eaque ipsa.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start my-3 my-md-4">
                                            <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-primary">
                                                <div className="position-absolute text-white h5 mb-0">3</div>
                                            </div>
                                            <div className="ms-3 ms-md-4">
                                                <h4>Start Learning</h4>
                                                <p>
                                                    Error sit voluptatem actium doloremque laudantium, totam rem
                                                    aperiam, eaque ipsa.
                                                </p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-start my-3 my-md-4">
                                            <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-primary">
                                                <div className="position-absolute text-white h5 mb-0">4</div>
                                            </div>
                                            <div className="ms-3 ms-md-4">
                                                <h4>Get Certificate</h4>
                                                <p>
                                                    Unde omnis iste natus error sit voluptatem accusantium
                                                    doloremque laudantium, totam rem aperiam, eaque ipsa.
                                                </p>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-50 bg-white" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-12 text-center">
                                <h1 className="mb-15">Upcoming Courses</h1>
                                <hr className="w-100 bg-primary" />
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-12">
                                <ul
                                    className="nav nav-tabs justify-content-center bb-0 mb-10"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            href="#tab8"
                                            role="tab"
                                        >
                                            MBA
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab9"
                                            role="tab"
                                        >
                                            Machine Learning
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab10"
                                            role="tab"
                                        >
                                            Software &amp; Technology
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab11"
                                            role="tab"
                                        >
                                            Marketing
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab12"
                                            role="tab"
                                        >
                                            Law
                                        </a>{" "}
                                    </li>
                                    <li className="nav-item">
                                        {" "}
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            href="#tab13"
                                            role="tab"
                                        >
                                            Management
                                        </a>{" "}
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tab8" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/1.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Manegement</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Networking</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Security</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">IT &amp; Software</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab9" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">IT &amp; Software</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/1.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Manegement</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Networking</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Security</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab10" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Security</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">IT &amp; Software</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Networking</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/1.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Manegement</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab11" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/1.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Manegement</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">IT &amp; Software</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Networking</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Security</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab12" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Security</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">IT &amp; Software</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/1.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Manegement</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Networking</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab13" role="tabpanel">
                                        <div className="px-15 pt-15">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/9.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Networking</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/8.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Security</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/1.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">Manegement</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-12">
                                                    <div className="card">
                                                        <a href="#">
                                                            <img
                                                                className="card-img-top"
                                                                src="../../images/front-end-img/courses/7.jpg"
                                                                alt="Card image cap"
                                                            />
                                                        </a>
                                                        <div className="position-absolute r-10 t-10">
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-heart-o" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                                            >
                                                                <i className="fa fa-share-alt" />
                                                            </button>
                                                        </div>
                                                        <div className="card-body">
                                                            <span className="badge badge-success mb-10">
                                                                Online
                                                            </span>
                                                            <h4 className="card-title">IT &amp; Software</h4>
                                                            <div className="d-flex justify-content-between">
                                                                <a href="#">
                                                                    <span className="fw-bold">Duration:</span> 6 Months
                                                                </a>
                                                                <a href="#">
                                                                    <span className="fw-bold">Daily:</span> 2 Hours
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-50" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-12 text-center">
                                <h1 className="mb-15">Reviews &amp; Ratings</h1>
                                <hr className="w-100 bg-primary" />
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-12">
                                <div
                                    className="owl-carousel owl-theme"
                                    data-nav-arrow="true"
                                    data-nav-dots="true"
                                    data-items={2}
                                    data-md-items={2}
                                    data-sm-items={2}
                                    data-xs-items={1}
                                    data-xx-items={1}
                                >
                                    <div className="item">
                                        <div className="testimonial-bx">
                                            <div className="testimonial-thumb">
                                                <img src="../../images/front-end-img/avatar/5.jpg" alt="" />
                                            </div>
                                            <div className="testimonial-info">
                                                <h4 className="name">Peter Packer</h4>
                                                <p>-Art Director</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p className="fs-16">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece of classical Latin literature
                                                    from 45 BC, making it over 2000 years old. Richard
                                                    McClintock, a Latin professor at Hampden-Sydney College in
                                                    Virginia, looked up one of the more obscure Latin words,
                                                    consectetur, from a Lorem Ipsum passage, and going through
                                                    the cites of the word...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-bx">
                                            <div className="testimonial-thumb">
                                                <img src="../../images/front-end-img/avatar/2.jpg" alt="" />
                                            </div>
                                            <div className="testimonial-info">
                                                <h4 className="name">Peter Packer</h4>
                                                <p>-Art Director</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p className="fs-16">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece of classical Latin literature
                                                    from 45 BC, making it over 2000 years old. Richard
                                                    McClintock, a Latin professor at Hampden-Sydney College in
                                                    Virginia, looked up one of the more obscure Latin words,
                                                    consectetur, from a Lorem Ipsum passage, and going through
                                                    the cites of the word...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-bx">
                                            <div className="testimonial-thumb">
                                                <img src="../../images/front-end-img/avatar/8.jpg" alt="" />
                                            </div>
                                            <div className="testimonial-info">
                                                <h4 className="name">Peter Packer</h4>
                                                <p>-Art Director</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p className="fs-16">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece of classical Latin literature
                                                    from 45 BC, making it over 2000 years old. Richard
                                                    McClintock, a Latin professor at Hampden-Sydney College in
                                                    Virginia, looked up one of the more obscure Latin words,
                                                    consectetur, from a Lorem Ipsum passage, and going through
                                                    the cites of the word...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="testimonial-bx">
                                            <div className="testimonial-thumb">
                                                <img src="../../images/front-end-img/avatar/6.jpg" alt="" />
                                            </div>
                                            <div className="testimonial-info">
                                                <h4 className="name">Peter Packer</h4>
                                                <p>-Art Director</p>
                                            </div>
                                            <div className="testimonial-content">
                                                <p className="fs-16">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                    text. It has roots in a piece of classical Latin literature
                                                    from 45 BC, making it over 2000 years old. Richard
                                                    McClintock, a Latin professor at Hampden-Sydney College in
                                                    Virginia, looked up one of the more obscure Latin words,
                                                    consectetur, from a Lorem Ipsum passage, and going through
                                                    the cites of the word...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-50 bg-white" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-12 text-center">
                                <h1 className="mb-15">Try FREE courses to learn fundamentals</h1>
                                <hr className="w-100 bg-primary" />
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card">
                                    <a href="#">
                                        <img
                                            className="card-img-top"
                                            src="../../images/front-end-img/courses/1.jpg"
                                            alt="Card image cap"
                                        />
                                    </a>
                                    <div className="position-absolute r-10 t-10">
                                        <button
                                            type="button"
                                            className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                        >
                                            <i className="fa fa-heart-o" />
                                        </button>
                                        <button
                                            type="button"
                                            className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                        >
                                            <i className="fa fa-share-alt" />
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Data</h4>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content.
                                        </p>
                                        <a href="#" className="btn btn-primary btn-outline btn-sm">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card">
                                    <a href="#">
                                        <img
                                            className="card-img-top"
                                            src="../../images/front-end-img/courses/2.jpg"
                                            alt="Card image cap"
                                        />
                                    </a>
                                    <div className="position-absolute r-10 t-10">
                                        <button
                                            type="button"
                                            className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                        >
                                            <i className="fa fa-heart-o" />
                                        </button>
                                        <button
                                            type="button"
                                            className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                        >
                                            <i className="fa fa-share-alt" />
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Management &amp; Marketing</h4>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content.
                                        </p>
                                        <a href="#" className="btn btn-primary btn-outline btn-sm">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card">
                                    <a href="#">
                                        <img
                                            className="card-img-top"
                                            src="../../images/front-end-img/courses/3.jpg"
                                            alt="Card image cap"
                                        />
                                    </a>
                                    <div className="position-absolute r-10 t-10">
                                        <button
                                            type="button"
                                            className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                        >
                                            <i className="fa fa-heart-o" />
                                        </button>
                                        <button
                                            type="button"
                                            className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                        >
                                            <i className="fa fa-share-alt" />
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Technology</h4>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content.
                                        </p>
                                        <a href="#" className="btn btn-primary btn-outline btn-sm">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="card">
                                    <a href="#">
                                        <img
                                            className="card-img-top"
                                            src="../../images/front-end-img/courses/4.jpg"
                                            alt="Card image cap"
                                        />
                                    </a>
                                    <div className="position-absolute r-10 t-10">
                                        <button
                                            type="button"
                                            className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                        >
                                            <i className="fa fa-heart-o" />
                                        </button>
                                        <button
                                            type="button"
                                            className="waves-effect waves-circle btn btn-circle btn-dark btn-xs me-5"
                                        >
                                            <i className="fa fa-share-alt" />
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Digital Marketing</h4>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a natural
                                            lead-in to additional content.
                                        </p>
                                        <a href="#" className="btn btn-primary btn-outline btn-sm">
                                            Know More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <a href="#" className="btn btn-primary mx-auto">
                                    View All Free Courses
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="py-50 bg-img countnm-bx"
                    style={{
                        backgroundImage: "url(../../images/front-end-img/background/bg-3.jpg)"
                    }}
                    data-overlay={5}
                    data-aos="fade-up"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="text-center">
                                    <div className="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center mx-auto">
                                        <span className="text-white fs-40 icon-User">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </span>
                                    </div>
                                    <h1 className="countnm my-10 text-white fw-300">5428</h1>
                                    <div className="text-uppercase text-white">Teachers</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="text-center">
                                    <div className="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center mx-auto">
                                        <span className="text-white fs-40 icon-Book" />
                                    </div>
                                    <h1 className="countnm my-10 text-white fw-300">120</h1>
                                    <div className="text-uppercase text-white">Courses</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="text-center">
                                    <div className="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center mx-auto">
                                        <span className="text-white fs-40 icon-Group">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </span>
                                    </div>
                                    <h1 className="countnm my-10 text-white fw-300">7485</h1>
                                    <div className="text-uppercase text-white">Student</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="text-center">
                                    <div className="w-80 h-80 l-h-100 rounded-circle b-1 border-white text-center mx-auto">
                                        <span className="text-white fs-40 icon-Globe">
                                            <span className="path1" />
                                            <span className="path2" />
                                        </span>
                                    </div>
                                    <h1 className="countnm my-10 text-white fw-300">100</h1>
                                    <div className="text-uppercase text-white">Country</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-50" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 col-12 text-center">
                                <h1 className="mb-15">Latest Blog</h1>
                                <hr className="w-100 bg-primary" />
                            </div>
                        </div>
                        <div className="row mt-30">
                            <div className="col-xl-4 col-md-4 col-12">
                                <div className="blog-post">
                                    <div className="entry-image clearfix">
                                        <img
                                            className="img-fluid"
                                            src="../../images/front-end-img/courses/1f.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="blog-detail">
                                        <div className="entry-title mb-10">
                                            <a href="#">Blog Post With Image</a>
                                        </div>
                                        <div className="entry-meta mb-10">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-folder-open-o" /> Design
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-comment-o" /> 5
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-calendar-o" /> 12 Aug 2020
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Possimus fuga laborum totam itaque architecto! Laudantium sed
                                                delectus assumenda, doloribus non.
                                            </p>
                                        </div>
                                        <div className="entry-share d-flex justify-content-between align-items-center">
                                            <div className="entry-button">
                                                <a href="#" className="btn btn-primary btn-sm">
                                                    Read more
                                                </a>
                                            </div>
                                            <div className="social">
                                                <strong>Share : </strong>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-facebook" />{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-twitter" />{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-pinterest-p" />{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-dribbble" />{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-12">
                                <div className="blog-post">
                                    <div className="entry-image clearfix">
                                        <div
                                            className="owl-carousel bottom-dots-center owl-theme"
                                            data-nav-dots="true"
                                            data-autoplay="true"
                                            data-items={1}
                                            data-md-items={1}
                                            data-sm-items={1}
                                            data-xs-items={1}
                                            data-xx-items={1}
                                        >
                                            <div className="item">
                                                <img src="../../images/front-end-img/courses/2f.jpg" alt="" />
                                            </div>
                                            <div className="item">
                                                <img src="../../images/front-end-img/courses/3f.jpg" alt="" />
                                            </div>
                                            <div className="item">
                                                <img src="../../images/front-end-img/courses/4f.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-detail">
                                        <div className="entry-title mb-10">
                                            <a href="#">Blog Post With Image Slider</a>
                                        </div>
                                        <div className="entry-meta mb-10">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-folder-open-o" /> Design
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-comment-o" /> 5
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-calendar-o" /> 12 Aug 2020
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Possimus fuga laborum totam itaque architecto! Laudantium sed
                                                delectus assumenda, doloribus non.
                                            </p>
                                        </div>
                                        <div className="entry-share d-flex justify-content-between align-items-center">
                                            <div className="entry-button">
                                                <a href="#" className="btn btn-primary btn-sm">
                                                    Read more
                                                </a>
                                            </div>
                                            <div className="social">
                                                <strong>Share : </strong>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-facebook" />{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-twitter" />{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-pinterest-p" />{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-dribbble" />{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-12">
                                <div className="blog-post">
                                    <div className="entry-image clearfix">
                                        <ul className="grid-post list-unstyled">
                                            <li>
                                                <img
                                                    className="img-fluid"
                                                    src="../../images/front-end-img/courses/5f.jpg"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    className="img-fluid"
                                                    src="../../images/front-end-img/courses/6f.jpg"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    className="img-fluid"
                                                    src="../../images/front-end-img/courses/7f.jpg"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    className="img-fluid"
                                                    src="../../images/front-end-img/courses/8f.jpg"
                                                    alt=""
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="blog-detail">
                                        <div className="entry-title mb-10">
                                            <a href="#">Blogpost With Image Grid Gallery</a>
                                        </div>
                                        <div className="entry-meta mb-10">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-folder-open-o" /> Design
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-comment-o" /> 5
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-calendar-o" /> 12 Aug 2020
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="entry-content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Possimus fuga laborum totam itaque architecto! Laudantium sed
                                                delectus assumenda, doloribus non.
                                            </p>
                                        </div>
                                        <div className="entry-share d-flex justify-content-between align-items-center">
                                            <div className="entry-button">
                                                <a href="#" className="btn btn-primary btn-sm">
                                                    Read more
                                                </a>
                                            </div>
                                            <div className="social">
                                                <strong>Share : </strong>
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-facebook" />{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-twitter" />{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-pinterest-p" />{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            {" "}
                                                            <i className="fa fa-dribbble" />{" "}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer_three">
                    <div className="footer-top bg-dark3 pt-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-12">
                                    <div className="widget">
                                        <h4 className="footer-title">About</h4>
                                        <hr className="bg-primary mb-10 mt-0 d-inline-block mx-auto w-60" />
                                        <p className="text-capitalize mb-20">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis exercitation ullamco laboris
                                            <br />
                                            <br />
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <div className="widget">
                                        <h4 className="footer-title">Contact Info</h4>
                                        <hr className="bg-primary mb-10 mt-0 d-inline-block mx-auto w-60" />
                                        <ul className="list list-unstyled mb-30">
                                            <li>
                                                {" "}
                                                <i className="fa fa-map-marker" /> 123, Lorem Ipsum, Dummy
                                                City,
                                                <br />
                                                FL-12345 USA
                                            </li>
                                            <li>
                                                {" "}
                                                <i className="fa fa-phone" /> <span>+(1) 123-878-1649 </span>
                                                <br />
                                                <span>+(1) 123-878-1649 </span>
                                            </li>
                                            <li>
                                                {" "}
                                                <i className="fa fa-envelope" />{" "}
                                                <span>info@EduLearn.com </span>
                                                <br />
                                                <span>support@EduLearn.com </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3">
                                    <div className="widget widget_gallery clearfix">
                                        <h4 className="footer-title">Our Gallery</h4>
                                        <hr className="bg-primary mb-10 mt-0 d-inline-block mx-auto w-60" />
                                        <ul className="list-unstyled">
                                            <li>
                                                <img src="../../images/gallery/thumb/1.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/2.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/3.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/4.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/5.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/6.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/7.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/8.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/9.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/10.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/11.jpg" alt="" />
                                            </li>
                                            <li>
                                                <img src="../../images/gallery/thumb/12.jpg" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <div className="widget">
                                        <h4 className="footer-title">Accept Card Payments</h4>
                                        <hr className="bg-primary mb-10 mt-0 d-inline-block mx-auto w-60" />
                                        <ul className="payment-icon list-unstyled d-flex gap-items-1">
                                            <li className="ps-0">
                                                <a href="javascript:;">
                                                    <i className="fa fa-cc-amex" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <i className="fa fa-cc-visa" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <i className="fa fa-credit-card-alt" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <i className="fa fa-cc-mastercard" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <i className="fa fa-cc-paypal" aria-hidden="true" />
                                                </a>
                                            </li>
                                        </ul>
                                        <h4 className="footer-title mt-20">Newsletter</h4>
                                        <hr className="bg-primary mb-4 mt-0 d-inline-block mx-auto w-60" />
                                        <div className="mb-20">
                                            <form className="" action="#" method="post">
                                                <div className="input-group">
                                                    <input
                                                        name="email"
                                                        required="required"
                                                        className="form-control"
                                                        placeholder="Your Email Address"
                                                        type="email"
                                                    />
                                                    <button
                                                        name="submit"
                                                        value="Submit"
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        {" "}
                                                        <i className="fa fa-envelope" />{" "}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="by-1 bg-dark3 py-10 border-dark">
                        <div className="container">
                            <div className="text-center footer-links">
                                <a href="#" className="btn btn-link">
                                    Home
                                </a>
                                <a href="#" className="btn btn-link">
                                    About Us
                                </a>
                                <a href="#" className="btn btn-link">
                                    Pricing
                                </a>
                                <a href="#" className="btn btn-link">
                                    Courses
                                </a>
                                <a href="#" className="btn btn-link">
                                    Blog
                                </a>
                                <a href="#" className="btn btn-link">
                                    Contact Us
                                </a>
                                <a href="#" className="btn btn-link">
                                    Privacy Policy
                                </a>
                                <a href="#" className="btn btn-link">
                                    Terms Of Conditions
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom bg-dark3">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-12 text-md-start text-center">
                                    {" "}
                                    © <span className="text-white">EduLearn</span> All Rights Reserved.
                                </div>
                                <div className="col-md-6 mt-md-0 mt-20">
                                    <div className="social-icons">
                                        <ul className="list-unstyled d-flex gap-items-1 justify-content-md-end justify-content-center">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook"
                                                >
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="waves-effect waves-circle btn btn-social-icon btn-circle btn-twitter"
                                                >
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="waves-effect waves-circle btn btn-social-icon btn-circle btn-linkedin"
                                                >
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="waves-effect waves-circle btn btn-social-icon btn-circle btn-youtube"
                                                >
                                                    <i className="fa fa-youtube" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Vendor JS */}
                {/* Corenav Master JavaScript */}
                {/* EduLearn front end */}
            </>

        </div>
    )
}

export default Home