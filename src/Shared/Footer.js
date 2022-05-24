import React from "react";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">free shipping</a>
          <a class="link link-hover">Product Delivary</a>
          <a class="link link-hover">Product Tracking</a>
          <a class="link link-hover">Online Payment</a>
          <a class="link link-hover">Discount</a>
          <a class="link link-hover">Online Vendor</a>
        </div>
        <div>
          <span class="footer-title">Support</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Account</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;