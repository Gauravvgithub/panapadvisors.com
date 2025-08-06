<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leasegrid|| About</title>
    <link rel="shortcut icon" href="assets/images/favicon.svg" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Marcellus&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/vendors/slick/slick.css">
    <link rel="stylesheet" href="assets/vendors/animation/animate.min.css">
    <link rel="stylesheet" href="assets/vendors/font-awesome/css/all.min.css">
    <link rel="stylesheet" href="assets/vendors/youtube-popup/youtube-popup.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Marcellus&display=swap"
        rel="stylesheet" />

</head>

<body class="custom-cursor">
    <div class="custom-cursor-one"></div>
    <div class="custom-cursor-two"></div>

    <!-- header start -->
    <?php include('./includes/header.php'); ?>
    <!-- header end -->
    <!-- page header start -->
    <div class="page-header-section" style="background-image: url(assets/images/background/banner-one-image.jpg); background-size: cover; background-position: center; min-height: 350px; display: flex; align-items: center;">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-10 m-auto text-center">
                    <div class="page-header-heading animate fadeInUp wow" data-wow-duration="2000ms">
                        <h2 class="display-4" style="color: var(--uniqo-light); margin-bottom: 18px; font-weight: 700;">Contact Leasegrid</h2>
                        <p class="lead" style="color: var(--uniqo-light); font-size: 1.3rem;">We're here to help you with your business inquiries, partnerships, or support needs. Reach out and our team will respond promptly.</p>
                    </div>
                </div>
            </div>
            <ul class="breadcrumb justify-content-center">
                <li>
                    <a href="index.php">Home</a>
                </li>
                <li>
                    <span>Contact Us</span>
                </li>
            </ul>
        </div>
    </div>
    <!-- page header end -->
    <!-- contact start -->
    <div class="contact-section" style="background: rgba(250,250,250,0.95); padding: 80px 0 60px 0;">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-5 col-lg-6 mb-5 mb-lg-0">
                    <div class="contact-info animate fadeInLeft wow" data-wow-duration="1500ms" data-wow-delay="200ms">
                        <div class="heading-box mb-4">
                            <span class="sub-title animate fadeInUp wow" data-wow-duration="1500ms">Contact</span>
                            <h2 class="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">Let's Connect</h2>
                            <p class="text-muted">Get a free business consultation today or simply send us your query.</p>
                        </div>
                        <ul class="list-unstyled">
                            <li class="d-flex align-items-start mb-4">
                                <img src="assets/images/svg/addres-icon-2.svg" alt="icon" class="me-3" style="width: 32px;">
                                <div>
                                    <h6 class="mb-1">Address</h6>
                                    <p class="mb-0">CS-42, 4th floor, Ansal Plaza Mall, Vaishali, Ghaziabad-201010</p>
                                </div>
                            </li>
                            <li class="d-flex align-items-start mb-4">
                                <img src="assets/images/svg/mail-icon-2.svg" alt="icon" class="me-3" style="width: 32px;">
                                <div>
                                    <h6 class="mb-1">Mail address</h6>
                                    <a href="mailto:contact@panapadvisors.com">contact@panapadvisors.com</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-start mb-4">
                                <img src="assets/images/svg/call-icon-2.svg" alt="icon" class="me-3" style="width: 32px;">
                                <div>
                                    <h6 class="mb-1">Phone</h6>
                                    <a href="tel:+919971645151">+91-9971645151</a>
                                </div>
                            </li>
                            <li class="d-flex align-items-start mb-4">
                                <i class="fab fa-linkedin me-3" style="width: 32px; font-size: 32px; color: #0077B5;"></i>
                                <div>
                                    <h6 class="mb-1">LinkedIn</h6>
                                    <a href="https://www.linkedin.com/company/leasegrid/">Leasegrid</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-6">
                    <div class="contact-form animate fadeInRight wow p-4 p-md-5 shadow-lg rounded-4 bg-white" data-wow-duration="1500ms" data-wow-delay="200ms" style="border: 1px solid #eaeaea; box-shadow: 0 10px 40px rgba(0,0,0,0.08) !important;">
                        <div class="section-title mb-4">
                            <h3 class="text-dark" style="font-weight: 600;">Get in Touch</h3>
                            <p class="text-muted mb-0">Fill out the form below and we'll get back to you shortly.</p>
                        </div>
                        <form id="contactForm" class="contact-form-wrapper">
                            <div id="formMessages"></div>
                            <div class="row gy-4">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" id="name" name="name" class="form-control" placeholder="Your Name" 
                                            style="height: 55px; border-radius: 8px; border: 2px solid #e0e0e0; transition: all 0.3s ease;
                                            box-shadow: 0 2px 5px rgba(0,0,0,0.02);" required>
                                        <label for="name" style="padding-left: 16px;">Your Name *</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" id="email" name="email" class="form-control" placeholder="Email Address" 
                                            style="height: 55px; border-radius: 8px; border: 2px solid #e0e0e0; transition: all 0.3s ease;
                                            box-shadow: 0 2px 5px rgba(0,0,0,0.02);" required>
                                        <label for="email" style="padding-left: 16px;">Email Address *</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="tel" id="phone" name="number" class="form-control" placeholder="Phone Number" 
                                            style="height: 55px; border-radius: 8px; border: 2px solid #e0e0e0; transition: all 0.3s ease;
                                            box-shadow: 0 2px 5px rgba(0,0,0,0.02);" required>
                                        <label for="phone" style="padding-left: 16px;">Phone Number *</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select" id="need" name="need" 
                                            style="height: 55px; border-radius: 8px; border: 2px solid #e0e0e0; transition: all 0.3s ease;
                                            box-shadow: 0 2px 5px rgba(0,0,0,0.02);" required>
                                            <option value="" selected disabled>Select a service</option>
                                            <option value="IT Hardware">IT Hardware</option>
                                            <option value="Plant and Machinery">Plant and Machinery</option>
                                            <option value="Medical Equipment">Medical Equipment</option>
                                            <option value="Retail Store Assets">Retail Store Assets</option>
                                            <option value="Security Assets">Security Assets</option>
                                            <option value="Construction Assets">Construction Assets</option>
                                            <option value="Transportation Assets">Transportation Assets</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <label for="need" style="padding-left: 16px;">Service Required *</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea id="message" name="message" class="form-control" placeholder="Your Message" 
                                            style="height: 120px; border-radius: 8px; border: 2px solid #e0e0e0; transition: all 0.3s ease;
                                            box-shadow: 0 2px 5px rgba(0,0,0,0.02);" required></textarea>
                                        <label for="message" style="padding-left: 16px;">Your Message *</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" id="submitBtn" class="btn btn-primary btn-theme" 
                                        style="width: 100%; padding: 12px; border-radius: 8px; font-weight: 500; font-size: 16px; 
                                        text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
                                        transition: all 0.3s ease;">
                                        <i class="fas fa-paper-plane me-2"></i>Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                        <style>
                            .form-control:focus, .form-select:focus {
                                border-color: #0d6efd !important;
                                box-shadow: 0 0 0 0.2rem rgba(13,110,253,.15) !important;
                            }
                            .btn-primary:hover {
                                transform: translateY(-2px);
                                box-shadow: 0 6px 20px rgba(0,0,0,0.15) !important;
                            }
                        </style>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- contact end -->
    <!-- cta  two start -->
    <div class="cta-section-three">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-10 m-auto">
                    <div class="heading-box text-center">
                        <h2 class="heading-title animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="200ms">Sharing ideas and building brands that truly matter</h2>
                    </div>
                    <a href="contact.php" class="btn btn-primary btn-theme animate fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">Get Started +</a>
                </div>
            </div>
        </div>
    </div>
    <!-- footer one start -->
    <?php include('./includes/footer.php'); ?>
    <!-- top to bottom end  -->
    <script src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendors/jquery/jquery-3.7.1.min.js"></script>
    <script src="assets/vendors/jquery/jquery.appear.min.js"></script>
    <script src="assets/vendors/slick/slick.min.js"></script>
    <script src="assets/vendors/wow/wow.js"></script>
    <script src="assets/vendors/youtube-popup/youtube-popup.jquery.js"></script>
    <script src="assets/vendors/jquery-circleType/jquery.circleType.js"></script>
    <script src="assets/vendors/jquery-lettering/jquery.lettering.min.js"></script>
    <script src="assets/vendors/odometer/odometer.min.js"></script>
    <script src="assets/vendors/owl/owl.carousel.min.js"></script>
    <script src="assets/vendors/circleGraph/jquery.circleGraph.js"></script>
    <script src="assets/js/custom.js"></script>
    
    <!-- Contact Form JavaScript -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        const formMessages = document.getElementById('formMessages');
        const submitBtn = document.getElementById('submitBtn');
        
        // Create toast container
        const toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';
        toastContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            max-width: 350px;
        `;
        document.body.appendChild(toastContainer);
        
        // Function to show toast
        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `alert alert-${type} alert-dismissible fade show`;
            toast.style.cssText = `
                margin-bottom: 10px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                border: none;
                border-radius: 8px;
            `;
            
            const icon = type === 'success' ? 'check-circle' : 'exclamation-circle';
            const iconColor = type === 'success' ? '#198754' : '#dc3545';
            
            toast.innerHTML = `
                <div class="d-flex align-items-center">
                    <i class="fas fa-${icon} me-2" style="color: ${iconColor}; font-size: 18px;"></i>
                    <div class="flex-grow-1">
                        <strong>${type === 'success' ? 'Success!' : 'Error!'}</strong><br>
                        ${message}
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
            `;
            
            toastContainer.appendChild(toast);
            
            // Auto remove toast after 5 seconds
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 5000);
            
            // Auto remove toast container if empty
            setTimeout(() => {
                if (toastContainer.children.length === 0) {
                    toastContainer.remove();
                }
            }, 6000);
        }
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            
            // Clear previous messages
            formMessages.innerHTML = '';
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Send AJAX request
            fetch('process-contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';
                
                if (data.success) {
                    // Show success toast
                    showToast('Your message has been sent successfully! We\'ll get back to you within 24 hours.', 'success');
                    
                    // Clear form
                    contactForm.reset();
                    
                    // Redirect to home page after 2 seconds
                    setTimeout(() => {
                        window.location.href = 'index.php';
                    }, 2000);
                    
                } else {
                    // Show error toast
                    showToast(data.message, 'danger');
                    
                    // Also show detailed errors in form area
                    let errorHtml = `
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <i class="fas fa-exclamation-circle me-2"></i>
                            ${data.message}
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                        </div>
                    `;
                    
                    // Add field-specific errors if any
                    if (data.errors && Object.keys(data.errors).length > 0) {
                        errorHtml += '<div class="mt-3"><ul class="list-unstyled mb-0">';
                        for (const [field, error] of Object.entries(data.errors)) {
                            errorHtml += `<li class="text-danger"><i class="fas fa-times me-1"></i>${error}</li>`;
                        }
                        errorHtml += '</ul></div>';
                    }
                    
                    formMessages.innerHTML = errorHtml;
                    
                    // Scroll to message
                    formMessages.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            })
            .catch(error => {
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';
                
                // Show error toast
                showToast('An error occurred while sending your message. Please try again later.', 'danger');
                
                // Also show error message in form area
                formMessages.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <i class="fas fa-exclamation-triangle me-2"></i>
                        An error occurred while sending your message. Please try again later.
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                `;
                
                console.error('Error:', error);
            });
        });
        
        // Auto-hide alerts after 5 seconds
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn-close')) {
                const alert = e.target.closest('.alert');
                if (alert) {
                    alert.remove();
                }
            }
        });
    });
    </script>
</body>

</html>