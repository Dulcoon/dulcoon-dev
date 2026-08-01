"use client";

import React from "react";

const trustedClients = [
  "HomeLiving",
  "Holiday Bali Villa",
  "PaulusConnect",
  "StriveToHigh",
  "LuxStay Bali",
  "CloudScale",
];

const TrustedBy = () => {
  return (
    <div className="marquee-wrap">
      <p className="marquee-label">Trusted by businesses across industries</p>
      <div className="marquee-track">
        {trustedClients.map((client, i) => (
          <span key={`a-${i}`}>{client}</span>
        ))}
        {trustedClients.map((client, i) => (
          <span key={`b-${i}`}>{client}</span>
        ))}
        {trustedClients.map((client, i) => (
          <span key={`c-${i}`}>{client}</span>
        ))}
        {trustedClients.map((client, i) => (
          <span key={`d-${i}`}>{client}</span>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
