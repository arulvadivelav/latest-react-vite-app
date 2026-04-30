// PrivacyPolicy.jsx
import React from "react";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-card">
        <div className="policy-header">
          <div className="header-content">
            <h1>Privacy Policy</h1>
            <p>Your privacy matters to us. Learn how we protect your information.</p>
          </div>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>Information We Collect</h2>
            <p>To help you find your perfect life partner, we collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, date of birth, gender, contact details, and address.</li>
              <li><strong>Profile Information:</strong> Religion, caste, occupation, education, income, and lifestyle preferences.</li>
              <li><strong>Photos:</strong> Profile pictures and gallery images you choose to upload.</li>
              <li><strong>Usage Data:</strong> How you interact with our platform and services.</li>
              <li><strong>Device Information:</strong> IP address, browser type, and device identifiers.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>How We Use Your Information</h2>
            <p>Your information helps us provide better matchmaking services:</p>
            <ul>
              <li>Create and manage your matrimony profile</li>
              <li>Suggest compatible matches based on your preferences</li>
              <li>Enable communication between interested parties</li>
              <li>Improve our matchmaking algorithms</li>
              <li>Send notifications about profile visits and interests</li>
              <li>Prevent fraud and ensure platform security</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Information Sharing</h2>
            <p>We respect your privacy and limit information sharing:</p>
            <ul>
              <li>Your profile information is visible to other registered members as per your privacy settings</li>
              <li>Contact information is shared only when you choose to reveal it</li>
              <li>We never sell your personal data to third parties</li>
              <li>Aggregated, anonymized data may be used for research and analytics</li>
              <li>We may share information when required by law or to protect legal rights</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Your Privacy Choices</h2>
            <p>You have control over your information:</p>
            <ul>
              <li><strong>Profile Visibility:</strong> Choose who can view your profile</li>
              <li><strong>Contact Privacy:</strong> Decide whether to show email and phone number</li>
              <li><strong>Photo Privacy:</strong> Control who can see your photos</li>
              <li><strong>Account Deletion:</strong> Permanently delete your account anytime</li>
              <li><strong>Data Download:</strong> Request a copy of your data</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Data Security</h2>
            <p>We implement robust security measures to protect your information:</p>
            <ul>
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure servers with firewalls</li>
              <li>Regular security audits</li>
              <li>Limited employee access to user data</li>
              <li>Automated monitoring for suspicious activities</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Cookies & Tracking</h2>
            <p>We use cookies to enhance your experience:</p>
            <ul>
              <li>Essential cookies for platform functionality</li>
              <li>Preference cookies to remember your settings</li>
              <li>Analytics cookies to improve our services</li>
              <li>You can manage cookie preferences in your browser</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Children's Privacy</h2>
            <p>Our services are intended for adults aged 18 and above. We do not knowingly collect information from children under 18. If you believe a child has provided us with personal information, please contact us immediately.</p>
          </section>

          <section className="policy-section">
            <h2>Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any material changes via email or platform notification. Please review this policy periodically.</p>
          </section>

          <section className="policy-section">
            <h2>Contact Us</h2>
            <p>If you have questions about this privacy policy or your data, please contact us:</p>
            <ul className="contact-list">
              <li>Email: privacy@matrimony.com</li>
              <li>Phone: +91 1800-123-4567</li>
              <li>Address: Matrimony Headquarters, Mumbai, India</li>
            </ul>
          </section>

          <div className="policy-footer">
            <p>Last Updated: April 15, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;