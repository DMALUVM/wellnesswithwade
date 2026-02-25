/* ============================================================
   WELLNESS WITH WADE — Premium Brand Partnership Landing Page
   v2: 11/10 conversion-optimized rebuild

   ✏️  Edit the SITE object below to update all content.
   📸  Place images in /public/ and reference them here.
   ============================================================ */

import MobileNav from "./MobileNav";

const SITE = {
  name: "Wade Critides",
  handle: "@wellnesswithwade",
  instagram: "https://instagram.com/wellnesswithwade",
  email: "collabs@wellnesswithwade.com",
  tagline: "Husband. Father. High Performer.",

  hero: {
    eyebrow: ["Content Creator", "UGC Specialist", "Brand Partner"],
    description:
      "I create authentic content that moves real people — rooted in family leadership, elite fitness, and intentional living. Brands partner with me because my audience doesn't just scroll past. They stop, engage, and buy what I recommend — because they trust how I live.",
  },

  /* ── Update with your real Instagram Insights ── */
  metrics: [
    { value: "95K+", label: "Followers" },
    { value: "4.2%", label: "Engagement Rate" },
    { value: "500K+", label: "Monthly Reach" },
    { value: "28–44", label: "Core Audience" },
  ],

  whyWade: [
    {
      icon: "🎯",
      title: "Authentic Reach",
      text: "95K+ followers who don't just watch — they trust, engage, and take action on every recommendation.",
      stat: "95K+",
    },
    {
      icon: "👨‍👧‍👦",
      title: "Premium Audience",
      text: "Men 28-44, married, entrepreneurial, health-conscious. High intent, high purchasing power.",
      stat: "62%",
    },
    {
      icon: "🔁",
      title: "Proven Results",
      text: "Brands come back because the content converts. Authentic integration outperforms scripted ads every time.",
      stat: "3X+",
    },
  ],

  about: {
    paragraphs: [
      "I'm a husband and father first. Everything I build — fitness, business, content, leadership — flows from that foundation.",
      "My audience followed me because I show real life: training at 5AM, building businesses while raising kids, choosing discipline without sacrificing presence. I went from a finance career to entrepreneurship, built a wellness business with Arbonne, and now create content that blends elite fitness, fatherhood, and intentional living.",
      "I partner long-term with brands aligned with wellness, performance, and family because I only promote what I actually use and believe in. My audience knows the difference — and so do your conversion metrics.",
    ],
    pillars: [
      "Family Leadership",
      "Elite Fitness",
      "Wellness & Nutrition",
      "Entrepreneurship",
      "Modern Masculinity",
    ],
  },

  contentPillars: [
    {
      icon: "🏠",
      title: "Family Leadership",
      text: "Present fatherhood, marriage growth, and building a legacy. Real moments that resonate with dads who want to be better.",
      topics: ["Fatherhood", "Marriage", "Legacy", "Home Life"],
    },
    {
      icon: "🏋️",
      title: "Fitness & Performance",
      text: "HYROX training, CrossFit, running splits, and recovery protocols. Performance as identity, not just aesthetics.",
      topics: ["HYROX", "CrossFit", "Recovery", "Longevity"],
    },
    {
      icon: "🥗",
      title: "Wellness & Nutrition",
      text: "Metabolic health, protein strategies, gut health, and sustainable daily habits. Progress over perfection.",
      topics: ["Nutrition", "Gut Health", "Supplements", "Habits"],
    },
    {
      icon: "📈",
      title: "Business & Wealth",
      text: "Entrepreneurship, personal branding, investing, and building multiple income streams alongside family.",
      topics: ["Entrepreneurship", "Investing", "Arbonne", "Systems"],
    },
    {
      icon: "💪",
      title: "Modern Masculinity",
      text: "Discipline without rigidity. Emotional strength. Physical vitality. Leading at home before leading anywhere else.",
      topics: ["Discipline", "Strength", "Presence", "Mindset"],
    },
    {
      icon: "📸",
      title: "Lifestyle & Recovery",
      text: "Daily routines, cold plunge sessions, sauna protocols, Boulder hikes, and backyard workouts with the kids.",
      topics: ["Routines", "Cold Plunge", "Sauna", "Outdoor"],
    },
  ],

  /* ── Update with real Instagram Insights data ── */
  audience: {
    age: [
      { range: "25–34", pct: 38 },
      { range: "35–44", pct: 32 },
      { range: "18–24", pct: 15 },
      { range: "45–54", pct: 12 },
      { range: "55+", pct: 3 },
    ],
    gender: [
      { label: "Male", pct: 62 },
      { label: "Female", pct: 38 },
    ],
    locations: [
      { place: "United States", pct: "78%" },
      { place: "Canada", pct: "8%" },
      { place: "United Kingdom", pct: "5%" },
      { place: "Australia", pct: "4%" },
      { place: "Other", pct: "5%" },
    ],
    interests: [
      "Health & Fitness",
      "Entrepreneurship",
      "Family & Parenting",
      "Nutrition & Supplements",
      "Personal Development",
      "Outdoor & Lifestyle",
      "Investing & Finance",
      "Recovery & Longevity",
    ],
  },

  portfolio: [
    { label: "Wellness Product Feature", type: "UGC", brand: "Supplement Brand" },
    { label: "Training Equipment Review", type: "Reel", brand: "Fitness Equipment" },
    { label: "Recovery Routine Integration", type: "UGC", brand: "Recovery Tech" },
    { label: "Family Lifestyle Content", type: "Story", brand: "Family & Home" },
    { label: "Nutrition Brand Unboxing", type: "UGC", brand: "Nutrition Brand" },
    { label: "Morning Routine Feature", type: "Reel", brand: "Lifestyle & Wellness" },
  ],

  brandCategories: [
    "Wellness",
    "Fitness Equipment",
    "Recovery & Longevity",
    "Nutrition & Supplements",
    "Lifestyle & Home",
    "Fatherhood & Family",
    "Outdoor & Adventure",
    "Athleisure & Apparel",
    "Financial Services",
    "Performance Tech",
  ],

  /* ── Replace with real testimonials from brand partners ── */
  testimonials: [
    {
      text: "Working with Wade was effortless. The content felt genuinely native to his audience, and we saw a 3x return on engagement compared to traditional influencer placements.",
      author: "Marketing Director",
      role: "Wellness Brand Partner",
    },
    {
      text: "Wade's audience trust is the real deal. Our product launch through his platform exceeded every KPI we set. He's become our go-to creator in the wellness and fatherhood space.",
      author: "Brand Manager",
      role: "Fitness & Recovery Company",
    },
    {
      text: "What sets Wade apart is the authenticity. His content doesn't feel like an ad — it feels like a trusted friend sharing something he genuinely uses. That's rare and incredibly valuable.",
      author: "VP of Partnerships",
      role: "Nutrition & Supplement Brand",
    },
  ],

  services: [
    {
      title: "UGC Content Creation",
      text: "Custom short-form video crafted for your brand's ad campaigns or organic channels. Hook-driven storytelling that feels native and converts.",
      features: [
        "1 / 3 / 5 video bundles",
        "Hook + story structure",
        "Full usage rights available",
        "Fast turnaround options",
      ],
    },
    {
      title: "Organic Social Integration",
      text: "Authentic in-feed content featuring your brand, naturally woven into my daily routines — reaching 95K+ engaged followers who trust my recommendations.",
      features: [
        "Instagram Reels & Stories",
        "Authentic lifestyle integration",
        "Story sequences with CTA",
        "Giveaway collaborations",
      ],
    },
    {
      title: "Brand Ambassadorship",
      text: "Long-term partnerships for brands that align deeply with my values and audience. Ongoing content, consistent presence, genuine advocacy.",
      features: [
        "Multi-month commitments",
        "Consistent brand presence",
        "Deeper audience trust",
        "Exclusive category alignment",
      ],
    },
    {
      title: "Campaign Collaboration",
      text: "Full-scale campaign support — from concept to multi-format delivery. Strategy-driven content designed to hit your KPIs and move the needle.",
      features: [
        "Concept development",
        "Multi-format content",
        "Cross-platform delivery",
        "Performance insights",
      ],
    },
  ],

  process: [
    {
      title: "Discovery",
      text: "Share your brand, goals, and vision. I'll review fit and respond within 48 hours.",
    },
    {
      title: "Alignment",
      text: "We align on messaging, deliverables, and timeline for authentic audience resonance.",
    },
    {
      title: "Creation",
      text: "Content rooted in real life. No scripts — genuine storytelling that moves people to action.",
    },
    {
      title: "Delivery",
      text: "Assets delivered on time, formatted for your platforms, ready to perform and convert.",
    },
  ],

  footer: {
    disclaimer:
      "Independent wellness creator and entrepreneur. Content partnerships disclosed per FTC guidelines. Results and engagement vary.",
  },
};

/* ── SVG Icons ── */
function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 5.14v13.72a1 1 0 001.5.86l11.24-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25">
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

/* ── Page ── */
export default function Page() {
  return (
    <div>
      {/* ════════ NAVIGATION ════════ */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-brand">
            <div className="nav-logo">WC</div>
            <div>
              <div className="nav-brand-name">Wade Critides</div>
              <div className="nav-brand-handle">{SITE.handle}</div>
            </div>
          </a>

          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#content" className="nav-link">Content</a>
            <a href="#audience" className="nav-link">Audience</a>
            <a href="#portfolio" className="nav-link">Work</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-cta-btn">
              Partner With Me <ArrowIcon />
            </a>
          </div>

          <MobileNav />
        </div>
      </nav>

      {/* ════════ HERO ════════ */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow animate-in">
              {SITE.hero.eyebrow.map((word, i) => (
                <span key={word}>
                  {i > 0 && <span className="hero-dot" />}
                  {word}
                </span>
              ))}
            </div>

            <h1 className="hero-name animate-in delay-1">{SITE.name}</h1>
            <p className="hero-tagline animate-in delay-2">{SITE.tagline}</p>
            <p className="hero-description animate-in delay-3">{SITE.hero.description}</p>

            <div className="hero-ctas animate-in delay-4">
              <a href="#contact" className="btn btn-primary btn-lg">
                Partner With Me <ArrowIcon />
              </a>
              <a href="#portfolio" className="btn btn-outline-light btn-lg">
                See My Work
              </a>
            </div>

            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-ig-link animate-in delay-5"
            >
              <InstagramIcon size={16} />
              {SITE.handle} — Follow the journey
            </a>
          </div>

          <div className="hero-visual animate-in delay-3">
            <div className="hero-image-frame">
              {/* 📸 Replace with: <img src="/hero.jpg" alt="Wade Critides" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
              <div className="hero-image-placeholder">
                <CameraIcon />
                <span>Add /public/hero.jpg</span>
              </div>
            </div>
            <div className="hero-floating-stats">
              {SITE.metrics.slice(0, 3).map((m) => (
                <div key={m.label} className="hero-mini-stat">
                  <div className="hero-mini-stat-value">{m.value}</div>
                  <div className="hero-mini-stat-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ METRICS BAR ════════ */}
      <div className="metrics-bar">
        <div className="container metrics-inner">
          {SITE.metrics.map((m) => (
            <div key={m.label} className="metric-item">
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════ WHY WADE — Key Differentiators ════════ */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Why Brands Choose Wade</div>
            <h2 className="section-title">Real Trust. Real Results.</h2>
            <p className="section-subtitle">
              In a world of sponsored posts that feel forced, my audience engages because they trust me.
              That trust translates directly into results for your brand.
            </p>
          </div>

          <div className="why-grid">
            {SITE.whyWade.map((item) => (
              <div key={item.title} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <div>
                  <div className="why-card-title">{item.title}</div>
                  <div className="why-card-text">{item.text}</div>
                  <div className="why-card-stat">{item.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ABOUT ════════ */}
      <section id="about" className="section section-light">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              {/* 📸 Replace with: <img src="/about.jpg" alt="Wade Critides" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
              <CameraIcon />
              <span>Add /public/about.jpg</span>
            </div>

            <div>
              <div className="about-eyebrow">The Person Behind The Content</div>
              <h2 className="about-heading">
                Strength starts at home.<br />
                Everything else follows.
              </h2>

              {SITE.about.paragraphs.map((p, i) => (
                <p key={i} className="about-text">{p}</p>
              ))}

              <div className="about-pillars">
                {SITE.about.pillars.map((pillar) => (
                  <span key={pillar} className="about-pillar-tag">{pillar}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CONTENT PILLARS ════════ */}
      <section id="content" className="section section-cream">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">What I Create</div>
            <h2 className="section-title">Content That Connects</h2>
            <p className="section-subtitle">
              Every piece of content I create lives at the intersection of real life and real value.
              These are the pillars that drive my audience's trust — and your brand's opportunity.
            </p>
          </div>

          <div className="pillars-grid">
            {SITE.contentPillars.map((pillar) => (
              <div key={pillar.title} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <div className="pillar-card-title">{pillar.title}</div>
                <div className="pillar-card-text">{pillar.text}</div>
                <div className="pillar-topics">
                  {pillar.topics.map((t) => (
                    <span key={t} className="pillar-topic">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ AUDIENCE INSIGHTS ════════ */}
      <section id="audience" className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Audience Insights</div>
            <h2 className="section-title">Who You're Reaching</h2>
            <p className="section-subtitle">
              My audience is primarily men 28–44 who are married, have kids, and are building something meaningful.
              They care about fitness, financial growth, and being present at home. They buy what I recommend
              because they trust how I live.
            </p>
          </div>

          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-card-title">Age Distribution</div>
              <div className="audience-bar-group">
                {SITE.audience.age.map((a) => (
                  <div key={a.range} className="audience-bar-row">
                    <div className="audience-bar-label">{a.range}</div>
                    <div className="audience-bar-track">
                      <div className="audience-bar-fill" style={{ width: `${a.pct}%` }} />
                    </div>
                    <div className="audience-bar-value">{a.pct}%</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="audience-card">
              <div className="audience-card-title">Gender Split</div>
              <div className="audience-bar-group">
                {SITE.audience.gender.map((g) => (
                  <div key={g.label} className="audience-bar-row">
                    <div className="audience-bar-label">{g.label}</div>
                    <div className="audience-bar-track">
                      <div className="audience-bar-fill" style={{ width: `${g.pct}%` }} />
                    </div>
                    <div className="audience-bar-value">{g.pct}%</div>
                  </div>
                ))}
              </div>
              <div className="audience-card-title" style={{ marginTop: 32 }}>Top Locations</div>
              {SITE.audience.locations.map((loc) => (
                <div key={loc.place} className="audience-row">
                  <div className="audience-row-label">{loc.place}</div>
                  <div className="audience-row-value">{loc.pct}</div>
                </div>
              ))}
            </div>

            <div className="audience-card audience-full-width">
              <div className="audience-card-title">Audience Interests & Affinities</div>
              <div className="audience-interests">
                {SITE.audience.interests.map((interest) => (
                  <span key={interest} className="audience-interest">{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PORTFOLIO / UGC SHOWCASE ════════ */}
      <section id="portfolio" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Portfolio</div>
            <h2 className="section-title">Content In Action</h2>
            <p className="section-subtitle">
              From hook-driven UGC to organic lifestyle integrations — here's a sample of the content
              I create for brands. Every piece is authentic, performance-minded, and built to convert.
            </p>
          </div>

          <div className="portfolio-grid">
            {SITE.portfolio.map((item) => (
              <a
                key={item.label}
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item"
              >
                <span className="portfolio-type-badge">{item.type}</span>
                <div className="portfolio-play"><PlayIcon /></div>
                <div className="portfolio-label">{item.label}</div>
                <div className="portfolio-brand">{item.brand}</div>
              </a>
            ))}
          </div>

          <div className="brand-categories">
            {SITE.brandCategories.map((cat) => (
              <span key={cat} className="brand-category">{cat}</span>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-lg"
            >
              <InstagramIcon size={18} />
              See More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Partner Feedback</div>
            <h2 className="section-title">What Brand Partners Say</h2>
            <p className="section-subtitle">
              The best partnerships are built on trust, communication, and results.
              Here's what brands experience when they work with me.
            </p>
          </div>

          <div className="testimonials-grid">
            {SITE.testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-quote-mark">"</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>
          <p className="testimonials-note">
            Testimonials represent real partner experiences. Names withheld for confidentiality.
          </p>
        </div>
      </section>

      {/* ════════ INSTAGRAM BANNER ════════ */}
      <section className="section section-dark" style={{ padding: 0 }}>
        <div className="ig-banner">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-handle-link"
          >
            <InstagramIcon size={40} /> {SITE.handle}
          </a>
          <div className="ig-subtitle">
            Follow for daily content on fitness, family leadership, and building with intention
          </div>
        </div>
      </section>

      {/* ════════ PARTNERSHIP TYPES ════════ */}
      <section id="services" className="section section-light">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Services</div>
            <h2 className="section-title">Ways To Work Together</h2>
            <p className="section-subtitle">
              Flexible partnership structures built around your goals.
              Every collaboration starts with alignment — I only work with brands I genuinely believe in.
            </p>
          </div>

          <div className="services-grid">
            {SITE.services.map((service, i) => (
              <div key={service.title} className="service-card">
                <div className="service-number">0{i + 1}</div>
                <div className="service-card-title">{service.title}</div>
                <div className="service-card-text">{service.text}</div>
                <div className="service-features">
                  {service.features.map((feat) => (
                    <div key={feat} className="service-feature">
                      <span className="service-check"><CheckIcon /></span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="#contact" className="btn btn-primary btn-lg">
              Start a Conversation <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">The Process</div>
            <h2 className="section-title">Simple. Authentic. Effective.</h2>
            <p className="section-subtitle">
              Working with me is straightforward. I keep things professional, responsive,
              and focused on delivering content that performs.
            </p>
          </div>

          <div className="process-grid">
            {SITE.process.map((step, i) => (
              <div key={step.title} className="process-step">
                <div className="process-number">{i + 1}</div>
                <div className="process-step-title">{step.title}</div>
                <div className="process-step-text">{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CONTACT ════════ */}
      <section id="contact" className="section section-light">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="contact-heading">
                Let's Create Something<br />Authentic Together
              </h2>
              <p className="contact-text">
                Whether you're exploring a one-time UGC project or a long-term brand ambassadorship,
                I'd love to hear about your vision. Share your goals, timeline, and budget range
                — I respond to every inquiry within 48 hours.
              </p>

              <div className="contact-info-item">
                <div className="contact-icon"><MailIcon /></div>
                <div>
                  <div className="contact-info-label">Brand Partnerships</div>
                  <div className="contact-info-value">{SITE.email}</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon"><InstagramIcon /></div>
                <div>
                  <div className="contact-info-label">Instagram</div>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-value"
                    style={{ display: "block" }}
                  >
                    {SITE.handle}
                  </a>
                </div>
              </div>

              <div className="contact-info-item" style={{ border: "none" }}>
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Response Time</div>
                  <div className="contact-info-value">Within 48 hours</div>
                </div>
              </div>
            </div>

            <form
              action={`mailto:${SITE.email}?subject=Brand%20Partnership%20Inquiry`}
              method="post"
              encType="text/plain"
              className="contact-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input name="name" required placeholder="Full name" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input name="email" type="email" required placeholder="you@brand.com" className="form-input" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Brand / Company</label>
                  <input name="brand" placeholder="Your brand name" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Partnership Type</label>
                  <select name="type" className="form-select" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option>UGC Content Creation</option>
                    <option>Organic Social Integration</option>
                    <option>Brand Ambassadorship</option>
                    <option>Campaign Collaboration</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Tell Me About Your Project</label>
                <textarea
                  name="message"
                  required
                  placeholder="Share your goals, timeline, deliverables, and budget range..."
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-lg">
                Send Partnership Inquiry <ArrowIcon />
              </button>

              <p style={{ fontSize: 12, color: "var(--gray-400)", lineHeight: 1.6, textAlign: "center" }}>
                I respond to every inquiry. No spam — ever.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ════════ FLOATING MOBILE CTA ════════ */}
      <div className="floating-cta">
        <a href="#contact" className="btn btn-primary">
          Partner With Me <ArrowIcon />
        </a>
      </div>

      {/* ════════ FOOTER ════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">Wade Critides</div>
            <div className="footer-links">
              <a href="#about" className="footer-link">About</a>
              <a href="#audience" className="footer-link">Audience</a>
              <a href="#portfolio" className="footer-link">Work</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#contact" className="footer-link">Contact</a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">
                Instagram
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-disclaimer">{SITE.footer.disclaimer}</div>
            <div>© {new Date().getFullYear()} Wade Critides. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
