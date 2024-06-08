import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy px-12 py-16">
      <h1 className='text-3xl font-bold'>Privacy Policy</h1>
      <p>We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose personal information when you use our website or services.</p>
      <h2 className={'mt-4 font-medium text-xl'}>Information We Collect</h2>
      <p>We collect two types of information: personal information and non-personal information.</p>
      <h3 className={'mt-4 font-medium text-xl'}>Personal Information</h3>
      <ul>
        <li>Your name and contact information (such as email address, phone number, and mailing address)</li>
        <li>Your login credentials (such as username and password)</li>
        <li>Your payment information (such as credit card number and expiration date)</li>
        <li>Your health information (such as medical history and treatment plans)</li>
      </ul>
      <h3 className={'mt-4 font-medium text-xl'}>Non-Personal Information</h3>
      <ul>
        <li>Your IP address and device type</li>
        <li>Your browser type and version</li>
        <li>Your operating system and device platform</li>
        <li>Your location and language preferences</li>
        <li>Your search queries and browsing history</li>
      </ul>
      <h2 className={'mt-4 font-medium text-xl'}>How We Use Your Information</h2>
      <p>We use your personal information to:</p>
      <ul>
        <li>Provide and improve our services</li>
        <li>Communicate with you about our services and promotions</li>
        <li>Process your payments and transactions</li>
        <li>Protect your account and personal information</li>
        <li>Comply with legal obligations and regulations</li>
      </ul>
      <p>We use your non-personal information to:</p>
      <ul>
        <li>Analyze and improve our services</li>
        <li>Personalize your experience on our website and services</li>
        <li>Display targeted advertising and promotions</li>
        <li>Comply with legal obligations and regulations</li>
      </ul>
      <h2 className={'mt-4 font-medium text-xl'}>How We Share Your Information</h2>
      <p>We share your personal information with:</p>
      <ul>
        <li>Our affiliates and partners</li>
        <li>Our service providers and contractors</li>
        <li>Our payment processors and financial institutions</li>
        <li>Law enforcement and regulatory agencies (as required by law)</li>
      </ul>
      <p>We share your non-personal information with:</p>
      <ul>
        <li>Our affiliates and partners</li>
        <li>Our service providers and contractors</li>
        <li>Our advertising and analytics partners</li>
      </ul>
      <h2 className={'mt-4 font-medium text-xl'}>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access and correct your personal information</li>
        <li>Request deletion of your personal information</li>
        <li>Object to processing of your personal information</li>
        <li>Request restriction of processing of your personal information</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>
      <h2 className={'mt-4 font-medium text-xl'}>Data Security</h2>
      <p>We take reasonable precautions to protect your personal information from unauthorized access, use, and disclosure. Our security measures include:</p>
      <ul>
        <li>Encryption of personal information in transit and at rest</li>
        <li>Firewalls and intrusion detection systems</li>
        <li>Secure authentication and access controls</li>
        <li>Regular security audits and testing</li>
      </ul>
      <h2 className={'mt-4 font-medium text-xl'}>Changes to This Privacy Policy</h2>
      <p>We may update this privacy policy from time to time. We will notify you of any significant changes by posting a notice on our website or by sending you an email.</p>
      <h2 className={'mt-4 font-medium text-xl'}>Contact Us</h2>
      <p>If you have any questions or concerns about this privacy policy, please contact us at:</p>
      <ul>
        <li><Link href="mailto:privacy@trexiti.com">privacy@example.com</Link></li>
        <li><Link href="tel:+1-876-478-3893">+1-876-478-3893</Link></li>
        <li><Link href="/">Our website</Link></li>
      </ul>
      <h2 className={'mt-4 font-medium text-xl'}>Effective Date</h2>
      <p>This privacy policy is effective as of March 1, 2023.</p>
    </div>
  );
};

export default PrivacyPolicy;