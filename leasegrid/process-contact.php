<?php
// Contact Form Processing Script
// This file handles the contact form submission from contact.php

// Set content type to JSON for AJAX requests
header('Content-Type: application/json');

// Initialize response array
$response = array(
    'success' => false,
    'message' => '',
    'errors' => array()
);

// Check if it's a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get and sanitize form data
    $name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : '';
    $phone = isset($_POST['number']) ? trim(strip_tags($_POST['number'])) : '';
    $service = isset($_POST['need']) ? trim(strip_tags($_POST['need'])) : '';
    $message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';
    
    // Validation
    $errors = array();
    
    // Name validation
    if (empty($name)) {
        $errors['name'] = 'Name is required';
    } elseif (strlen($name) < 2) {
        $errors['name'] = 'Name must be at least 2 characters long';
    }
    
    // Email validation
    if (empty($email)) {
        $errors['email'] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (empty($phone)) {
        $errors['phone'] = 'Phone number is required';
    } elseif (!preg_match('/^[\+]?[1-9][\d]{0,15}$/', $phone)) {
        $errors['phone'] = 'Please enter a valid phone number';
    }
    
    // Service validation
    if (empty($service) || $service == 'Select a service') {
        $errors['service'] = 'Please select a service';
    }
    
    // Message validation
    if (empty($message)) {
        $errors['message'] = 'Message is required';
    } elseif (strlen($message) < 10) {
        $errors['message'] = 'Message must be at least 10 characters long';
    }
    
    // If no validation errors, proceed with email sending
    if (empty($errors)) {
        
        // Email configuration
        $to = "contact@panapadvisors.com";
        $subject = "New Contact Form Submission - Leasegrid";
        
        // Create HTML email content
        $email_content = "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <title>New Contact Form Submission</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #0d6efd, #0b5ed7); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
                .form-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                .form-table th, .form-table td { padding: 12px; border: 1px solid #dee2e6; text-align: left; }
                .form-table th { background-color: #e9ecef; font-weight: bold; }
                .footer { margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 14px; color: #6c757d; }
                .highlight { color: #0d6efd; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2 style='margin: 0;'>📧 New Contact Form Submission</h2>
                    <p style='margin: 5px 0 0 0; opacity: 0.9;'>Leasegrid Website Contact Form</p>
                </div>
                
                <div class='content'>
                    <p>You have received a new contact form submission from the Leasegrid website.</p>
                    
                    <table class='form-table'>
                        <tr>
                            <th>👤 Name:</th>
                            <td>" . htmlspecialchars($name) . "</td>
                        </tr>
                        <tr>
                            <th>📧 Email:</th>
                            <td><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td>
                        </tr>
                        <tr>
                            <th>📞 Phone:</th>
                            <td><a href='tel:" . htmlspecialchars($phone) . "'>" . htmlspecialchars($phone) . "</a></td>
                        </tr>
                        <tr>
                            <th>🔧 Service Required:</th>
                            <td><span class='highlight'>" . htmlspecialchars($service) . "</span></td>
                        </tr>
                        <tr>
                            <th>💬 Message:</th>
                            <td>" . nl2br(htmlspecialchars($message)) . "</td>
                        </tr>
                    </table>
                    
                    <div class='footer'>
                        <p><strong>📅 Submission Details:</strong></p>
                        <p>Date: " . date('F j, Y, g:i a') . "<br>
                        IP Address: " . $_SERVER['REMOTE_ADDR'] . "<br>
                        User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        ";
        
        // Email headers
        $headers = array(
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=UTF-8',
            'From: Leasegrid Contact Form <noreply@leasegrid.com>',
            'Reply-To: ' . $email,
            'X-Mailer: PHP/' . phpversion(),
            'X-Priority: 1',
            'X-MSMail-Priority: High'
        );
        
        // Attempt to send email
        $mail_sent = mail($to, $subject, $email_content, implode("\r\n", $headers));
        
        if ($mail_sent) {
            $response['success'] = true;
            $response['message'] = "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.";
            
            // Optional: Log successful submission
            $log_entry = date('Y-m-d H:i:s') . " - Contact form submitted by: " . $email . " - Service: " . $service . "\n";
            file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
            
        } else {
            $response['message'] = "Sorry, there was an error sending your message. Please try again later or contact us directly.";
        }
        
    } else {
        // Validation errors occurred
        $response['errors'] = $errors;
        $response['message'] = "Please correct the errors below and try again.";
    }
    
} else {
    // Not a POST request
    $response['message'] = "Invalid request method.";
}

// Return JSON response
echo json_encode($response);
exit;
?> 