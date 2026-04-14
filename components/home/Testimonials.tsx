import React from "react";

const TestimonialCard = ({ quote, name, role, imgAlt, imgSrc }: { quote: string, name: string, role: string, imgAlt: string, imgSrc: string }) => (
  <div className="glass-panel p-8 rounded-xl space-y-6">
    <div className="flex gap-1 text-secondary">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="material-symbols-outlined text-sm !fill-1">star</span>
      ))}
    </div>
    <p className="text-on-surface-variant italic leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
      <img className="w-10 h-10 rounded-full object-cover" alt={imgAlt} src={imgSrc} />
      <div>
        <div className="font-bold text-sm">{name}</div>
        <div className="text-xs text-on-surface-variant">{role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The attention to detail in our new booking platform is incredible. dulcoon.dev delivered ahead of schedule and beyond expectation.",
      name: "Alex Rivers",
      role: "CEO, LuxStay Bali",
      imgAlt: "Alex Rivers",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOvlB3sFG-nkJI6E6jlSbXHSMLADg_lRO-lAzCCAkDLdMDs1HDX--0LeWC3Y0zWEp1hBlr16YE672P-FNM06jOFSv3DJPWFvUwB00WcZUuV8IJjuLBQb0gpN8R4nCHYZ-UIMtpUWcztMToAzpJhS746oqTpZ4MUIovBOuAHXoOfajVGSw0Lu2FWS9TFLjB1S9ljn_49wgrqfYKGYwbg91OS_Rh-9KeurczlGDxY_UJwBigsB5MVRzQBN9pQB8MDzUbfjGuGFjEJDa5",
    },
    {
      quote: "Their technical depth in API integration solved problems three other agencies couldn't fix. Truly professional and innovative.",
      name: "Sarah Jenkins",
      role: "CTO, CloudScale",
      imgAlt: "Sarah Jenkins",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQsHnvYxOpPBI0RbEYIuG--92Szi5Ked61d1q56S673xIuvekxITDYP_QLgPk3_vwsz7vvu3DLvuIWksPZF4p6GGTNYH7mIawDV5T929u_rQ5aSDCHnNl0XiLzAiuS-CEmx74y0boWsUxR5vIURfTObo9LHYvKSfCyXzY2fN0IVwDMGHzHmDRUoe9tetMKP2-opjkOTsFA3XNGnxkQkqXPodk-qMgh7nTLpwBW46ZkWCWaOejBBgfQWYAbjz1TICIcXYxNfSrx7P3j",
    },
    {
      quote: "The UI design feels so futuristic yet intuitive. Our user engagement tripled within the first month of launching the mobile app.",
      name: "Marco Rossi",
      role: "Founder, ArtDirect",
      imgAlt: "Marco Rossi",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy2_n_OuDFSoq-Uo3VVEguCuAijy7XS9U6f3jHag7kvW4tr7fKMoCa329jY4nqoQrLXJLubfuKyznw9V6Y4tvuQJvZY_Np22LYWbIL6P6TN7v1ZmDG8EruLHfZ8Snely8sqXnTZmbqOAk4d_OL_WclXcHP4mta3FmgV2rD8UwuFEutpn7Vo-TyefTjvk96kfU3GIdX3g_uFghjwYanRwO7lNmPY--PrnSLG4HjkNYSyhKV515kkDyK3v8XbIv1Vyh6xHPdbTTHiSoR",
    },
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold tracking-tight text-center">What Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
