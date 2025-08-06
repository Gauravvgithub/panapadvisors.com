<!-- Header -->

<script>
  document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector(".header.style-1");

    window.addEventListener("scroll", function () {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop && currentScroll > 100) {
        // Scrolling down
        header.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up or stopped
        header.style.transform = "translateY(0)";
      }

      lastScrollTop = currentScroll;
    });
  });
</script>
<style>
    /* Ensure the offcanvas stretches full screen */
.offcanvas.mobile-nav-wrap {
  width: 100% !important;
  max-width: 100%;
  height: 100vh;
  z-index: 1050; /* Bootstrap's default z-index for modals/offcanvas */
  background-color: #fff; /* Or your preferred bg */
  padding: 20px;
  overflow-y: auto;
}

/* Optional: stretch inner content */
.inner-mobile-nav {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Optional: fix close button */
.mobile-nav-close {
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
}

/* Ensure spans look like hamburger icon */
.mobile-button a  {
  display: block;
  height: 3px;
  width: 25px;
  /*background: black;*/
  margin: 5px 0;
  border-radius: 2px;
    position: relative;
}

    
</style>


<header class="header sticky-top style-1  " id="header">

    <div class="tf-container w-1870">
        <div class="row">
            <div class="col-12">
                <div class="header-content">
                    <div class="header-left">
                        <div class="logo">
                            <a href="../impactnest">
                                <img
                                    src="../impactnest/image/logo/logo.png"
                                    alt="Logo"
                                    class="img-fluid"
                                    style="width: 170px;">
                            </a>

                        </div>
                        <nav class="main-menu">
                            <ul class="menu-primary-menu">
                                <li class="menu-item  current-menu-item">
                                    <a href="../impactnest" style="color:var(--on-suface-container) !important" class="item-link">Home </a>

                                </li>
                                <li class="menu-item position-relative">
                                    <a style="color:var(--on-suface-container) !important" href="../impactnest/about-us.php" class="item-link">About</a>

                                </li>
                                <li class="menu-item menu-item-has-children position-relative">
                                    <a href="#" class="item-link" style="color:var(--on-suface-container) !important">Services</a>
                                    <ul class="sub-menu">
                                        <li class="sub-menu-item"><a href="../impactnest/our-services-1.php" class="item-link-2"> Fund Raising</a></li>
                                        <li class="sub-menu-item"><a href="../impactnest/tailored-strategies.php" class="item-link-2">Tailored Strategies</a></li>
                                        <li class="sub-menu-item"><a href="../impactnest/financial-modelling.php" class="item-link-2">Financial Modelling</a></li>
                                        <li class="sub-menu-item"><a href="../impactnest/Investor-pitch-desck-design.php" class="item-link-2">Deck Design</a></li>
                                    </ul>
                                </li>
                                <!-- <li class="sub-menu-item"><a href="/our-teams-industry.php" class="item-link-2"></a></li> -->
                                <li class="menu-item position-relative">
                                    <a style="color:var(--on-suface-container) !important" href="../impactnest/our-teams-industry.php" class="item-link">Team</a>
                                </li>
                                <li class="menu-item position-relative">
                                    <a style="color:var(--on-suface-container) !important" href="../impactnest/our-expert.php" class="item-link">Our Experts</a>

                                </li>

                                <!-- <li class="menu-item position-relative">
                                            <a href="/about-us.php" class="item-link">Use Of Funds and Cap Table Guidence</a>
                                          
                                        </li> -->




                                <li class="menu-item">
                                    <a href="../impactnest/contact-us.php" class="item-link" style="color:var(--on-suface-container) !important">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right">
                        <div class="nav-btn d-none d-md-block">
                            <a href="../impactnest/contact-us.php" class="tf-btn bg-white style-1">
                                <span>Get in Touch</span>
                            </a>
                        </div>
                        <div class="nav-icon">


                            <div class="canvas-btn">
                                 <!--<a href="#canvnasMegamenu" data-bs-toggle="offcanvas">-->
                                 <!--           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">-->
                                 <!--               <path d="M4 6H20.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />-->
                                 <!--               <path d="M4 12H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />-->
                                 <!--               <path d="M4 18L17.9647 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />-->
                                 <!--           </svg>-->
                                 <!--       </a>-->
                            </div>
                            <div class="mobile-button ">
  <a href="#canvasMobile" data-bs-toggle="offcanvas">
    <!--<a href="#canvnasMegamenu" data-bs-toggle="offcanvas">-->
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M4 6H20.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4 12H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4 18L17.9647 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        <!--</a>-->
  </a>
</div>
                            <div class="offcanvas offcanvas-start mobile-nav-wrap" tabindex="-1" id="canvasMobile">
  <div class="inner-mobile-nav">
    <div class="top-header-mobi">
      <div class="logo-mobile">
        <a href="index.php">
          <img src="../impactnest/image/logo/logo.png" alt="Logo">
        </a>
      </div>
      <button class="mobile-nav-close" data-bs-dismiss="offcanvas" aria-label="Close">
        <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="20px" height="20px" viewBox="0 0 122.878 122.88">
          <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127
          c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886
          c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0
          c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Links -->
    <nav class="mobile-main-nav">
      <ul id="menu-mobile" class="menu">
        <li><a href="../impactnest/#">Home</a></li>
        <li><a href="../impactnest/about-us.php">About</a></li>
        <li class="menu-item menu-item-has-children-mobile">
          <a href="#dropdown-menu-3" data-bs-toggle="collapse" class="collapsed">Services</a>
          <div id="dropdown-menu-3" class="collapse" data-bs-parent="#menu-mobile">
            <ul class="sub-menu-mobile">
              <li><a href="../impactnest/our-services-1.php">Fund Raising</a></li>
              <li><a href="../impactnest/tailored-strategies.php">Tailored Strategies</a></li>
              <li><a href="../impactnest/financial-modelling.php">Financial Modelling</a></li>
              <li><a href="../impactnest/Investor-pitch-desck-design.php">Desk Design</a></li>
            </ul>
          </div>
        </li>
        <li><a href="../impactnest/our-teams-industry.php">Team</a></li>
        <li><a href="../impactnest/our-expert.php">Our Experts</a></li>
        <li><a href="../impactnest/contact-us.php">Contact</a></li>
      </ul>

      <!-- Contact Info in Mobile Menu -->
      <div class="contact-mobile">
        <h6 class="title-contact-mobile">Contact Info</h6>
        <div class="content-contact-moblile">
          <a href="#"><i class="icon-MapPin"></i>CS-42, 4th floor, Ansal Plaza Mall, Vaishali, Ghaziabad-201010</a>
        </div>
        <div class="content-contact-moblile">
          <a href="#"><i class="icon-Envelope"></i> contact@panapadvisors.com</a>
        </div>
        <div class="content-contact-moblile">
          <a href="#"><i class="icon-PhoneCall"></i> +91-9971645151</a>
        </div>
      </div>
    </nav>
  </div>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header><!-- /.header -->