import React from "react";

const TestimonialCard = ({
  quote, name, role, imgSrc, imgAlt,
}: {
  quote: string; name: string; role: string; imgSrc: string; imgAlt: string;
}) => (
  <div
    className="card-dark p-8 rounded-xl flex flex-col gap-5 transition-all duration-200"
    style={{ borderRadius: "12px" }}
  >
    {/* Stars */}
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-sm"
          style={{
            color: "#f59e0b",
            fontVariationSettings: "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 20",
          }}
        >
          star
        </span>
      ))}
    </div>

    {/* Quote */}
    <p className="text-sm leading-relaxed flex-1" style={{ color: "#9aaa9a", fontStyle: "italic" }}>
      &ldquo;{quote}&rdquo;
    </p>

    {/* Author */}
    <div
      className="flex items-center gap-4 pt-4"
      style={{ borderTop: "1px solid #222822" }}
    >
      <img
        className="rounded-full object-cover"
        style={{ width: "40px", height: "40px", border: "2px solid #222822" }}
        src={imgSrc}
        alt={imgAlt}
      />
      <div>
        <div className="font-syne text-sm font-bold" style={{ color: "#f5f5f5" }}>{name}</div>
        <div className="text-xs" style={{ color: "#6a7a6a" }}>{role}</div>
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
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQsHnvYxOpPBI0RbEYIuG--92Szi5Ked61d1q56S673xIuvekxITDYP_QLgPk3_vwsz7vvu3DLvuIWksPZF4p6GGTNYH7mIawDV5T929u_rQ5aSDCHnNl0XiLzAiuS-CEmx74y0boWsUxR5vIURfTObo9LHYvKCyXzY2fN0IVwDMGHzHmDRUoe9tetMKP2-opjkOTsFA3XNGnxkQkqXPodk-qMgh7nTLpwBW46ZkWCWaOejBBgfQWYAbjz1TICIcXYxNfSrx7P3j",
    },
    {
      quote: "The UI design feels so futuristic yet intuitive. Our user engagement tripled within the first month of launching the mobile app.",
      name: "Marco Rossi",
      role: "Founder, ArtDirect",
      imgAlt: "Marco Rossi",
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy2_n_OuDFSoq-Uo3VVEguCuAijy7XS9U6f3jHag7kvW4tr7fKMoCa329jY4nqoQrLXJLubfuKyznw9V6Y4tvuQJvZY_Np22LYWb6P6TN7v1ZmDG8EruLHfZ8Snely8sqXnTZmbqOAk4d_OL_WclXcHP4mta3FmgV2rD8UwuFEutpn7Vo-TyefTjvk96kfU3GIdX3g_uFghjwYanRwO7lNmPY--PrnSLG4HjkNYSyhKV515kkDyK3v8XbIv1Vyh6xHPdbTTHiSoR",
    },
  ];

  return (
    <section style={{ padding: "100px 0" }}>
      <div className="max-w-[1900px] mx-auto px-8 md:px-16 xl:px-24">
        <div className="text-center mb-14">
          <span className="section-eyebrow mb-3">Client Reviews</span>
          <h2
            className="font-syne text-4xl font-extrabold"
            style={{ letterSpacing: "-1px" }}
          >
            What Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
