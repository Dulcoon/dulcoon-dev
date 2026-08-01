"use client";

import React from "react";

const CheckIcon = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const Pricing = () => {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Transparent packages.</h2>
          <p className="section-sub">
            No hidden fees — pick the scope that matches where you are.
          </p>
        </div>

        <div className="price-grid" data-reveal>
          {/* BASIC */}
          <div className="price-card">
            <div className="price-name">Basic</div>
            <div className="price-old">Rp 2.9jt</div>
            <div className="price-new">
              <span
                className="count-up"
                data-target="1.85"
                data-prefix="Rp "
                data-suffix="jt"
              >
                Rp 1.85jt
              </span>
            </div>
            <ul className="price-feats">
              <li><CheckIcon />1–3 Pages</li>
              <li><CheckIcon />Fully Responsive</li>
              <li><CheckIcon />WhatsApp Contact Form</li>
              <li><CheckIcon />Basic SEO Setup</li>
              <li><CheckIcon />14 Days Support</li>
            </ul>
            <a
              href="https://wa.me/6282253400079?text=Saya%20tertarik%20dengan%20paket%20Basic%20Rp1.85m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Choose Basic
            </a>
          </div>

          {/* STANDARD */}
          <div className="price-card popular">
            <span className="popular-tag">Most Popular</span>
            <div className="price-name">Standard</div>
            <div className="price-old">Rp 5.9jt</div>
            <div className="price-new">
              <span
                className="count-up"
                data-target="3.85"
                data-prefix="Rp "
                data-suffix="jt"
              >
                Rp 3.85jt
              </span>
            </div>
            <ul className="price-feats">
              <li><CheckIcon />Up to 5 Pages</li>
              <li><CheckIcon />Custom UI Design</li>
              <li><CheckIcon />Dynamic Content / CMS</li>
              <li><CheckIcon />Advanced SEO</li>
              <li><CheckIcon />Premium Animations</li>
              <li><CheckIcon />30 Days Support</li>
            </ul>
            <a
              href="https://wa.me/6282253400079?text=Saya%20tertarik%20dengan%20paket%20Standard%20Rp3.85m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Choose Standard
            </a>
          </div>

          {/* PREMIUM */}
          <div className="price-card">
            <div className="price-name">Premium</div>
            <div className="price-old">From Rp 9.9jt</div>
            <div className="price-new">
              <span
                className="count-up"
                data-target="7.9"
                data-prefix="Rp "
                data-suffix="jt"
              >
                Rp 7.90jt
              </span>
            </div>
            <ul className="price-feats">
              <li><CheckIcon />E-commerce / Booking / Dashboard</li>
              <li><CheckIcon />API &amp; Payment Integration</li>
              <li><CheckIcon />Admin Panel Included</li>
              <li><CheckIcon />Deep Feature Customization</li>
              <li><CheckIcon />Priority Support</li>
            </ul>
            <a
              href="https://wa.me/6282253400079?text=Saya%20tertarik%20dengan%20paket%20Premium%20Rp7.9m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Choose Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
