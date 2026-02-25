const content = {
  brandName: "Wellness With Wade",
  handle: "@wellnesswithwade",
  headline: "Helping busy people get healthier daily with simple systems that stick.",
  subhead:
    "I create practical wellness content, coach people who want consistency, and mentor builders who want structure, community, and accountability.",
  primaryCtas: [
    { label: "Brand collaborations", href: "#brands" },
    { label: "Coaching", href: "#coaching" },
    { label: "Business mentorship", href: "#business" }
  ],
  quickProof: [
    { label: "Audience", value: "95K+", note: "Instagram followers (edit this)" },
    { label: "Content", value: "Daily", note: "Habits, fitness, dad life" },
    { label: "Vibe", value: "Real", note: "Systems over hype" }
  ],
  brandEmail: "collabs@wellnesswithwade.com",
  coachingEmail: "hello@wellnesswithwade.com",
  sections: {
    brands: {
      title: "Collaboration options that feel authentic and convert.",
      subtitle:
        "I partner with brands I genuinely use and create content designed to build trust. Share your goals, timeline, and budget range and I’ll reply with availability and options.",
      offers: [
        {
          title: "UGC video packages",
          body: "Short-form content for ads or organic use.",
          bullets: ["1 / 3 / 5 video bundles", "Hook + story structure", "Usage rights optional"]
        },
        {
          title: "Social integrations",
          body: "On-feed and stories that fit my audience.",
          bullets: ["Reels/TikTok style integrations", "Story sequences with CTA", "Giveaways when aligned"]
        },
        {
          title: "Photo + lifestyle",
          body: "Clean product visuals with real-life context.",
          bullets: ["Product + lifestyle set", "Gym / family / routine settings", "Fast turnaround available"]
        }
      ]
    },
    coaching: {
      title: "Coaching for consistency, not perfection.",
      subtitle:
        "If you’re tired of starting over, I’ll help you build a simple weekly routine that fits your real life.",
      cards: [
        {
          title: "90-day reset",
          body: "A practical system to create momentum.",
          bullets: ["Weekly plan + check-ins", "Simple nutrition structure", "Habit tracking + accountability"]
        },
        {
          title: "Accountability + community",
          body: "Support that keeps you moving.",
          bullets: ["Weekly touchpoints", "Clear weekly goals", "Encouragement and support"]
        },
        {
          title: "Lifestyle-first approach",
          body: "Designed for busy schedules.",
          bullets: ["Realistic meal routine", "Training that fits your week", "Sleep and stress basics"]
        }
      ]
    },
    business: {
      title: "Mentorship, systems, and a weekly rhythm you can follow.",
      subtitle:
        "If you want to build alongside a community and learn how I approach leadership, content, and consistency, let’s talk.",
      leftBullets: [
        "Onboarding guidance and weekly rhythm",
        "Community + accountability",
        "Content and communication support",
        "Leadership development over hype"
      ],
      fit: {
        good: ["Want structure + support", "Like learning by doing", "Can show up weekly"],
        bad: ["Want instant results", "Hate accountability", "Don’t want to learn"]
      }
    }
  },
  faq: [
    {
      q: "Do you have a media kit?",
      a: "Yes. Send your timeline, deliverables, and budget range and I’ll reply with availability and options."
    },
    {
      q: "What coaching do you offer?",
      a: "Simple, structured coaching focused on consistent habits. Apply and I’ll recommend the best path."
    },
    {
      q: "Do you mentor people in your wellness business?",
      a: "Yes. If you want community, a weekly rhythm, and mentorship, reach out and we’ll schedule a chat."
    },
    { q: "How fast do you respond?", a: "Typically within 24–48 hours on weekdays." }
  ],
  footerNote:
    "Independent wellness creator and entrepreneur. Results vary and depend on individual effort and circumstances."
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: 999,
        border: "1px solid #e4e4e7",
        background: "#fff",
        padding: "6px 12px",
        fontSize: 13,
        color: "#3f3f46",
        boxShadow: "0 1px 0 rgba(0,0,0,0.04)"
      }}
    >
      {children}
    </span>
  );
}

function Card({
  title,
  body,
  bullets
}: {
  title: string;
  body: string;
  bullets: string[];
}) {
  return (
    <div
      style={{
        borderRadius: 18,
        border: "1px solid #e4e4e7",
        background: "#fff",
        padding: 20,
        boxShadow: "0 6px 18px rgba(0,0,0,0.04)"
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 16 }}>{title}</div>
      <div style={{ marginTop: 8, color: "#52525b", lineHeight: 1.6 }}>{body}</div>
      <ul style={{ marginTop: 14, paddingLeft: 16, color: "#3f3f46", lineHeight: 1.8, fontSize: 13 }}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.8, color: "#52525b" }}>
        {eyebrow}
      </div>
      <div style={{ marginTop: 10, fontSize: 34, fontWeight: 800, letterSpacing: -0.6 }}>
        {title}
      </div>
      <div style={{ marginTop: 12, fontSize: 16, color: "#52525b", lineHeight: 1.7 }}>{subtitle}</div>
    </div>
  );
}

export default function Page() {
  return (
    <div style={{ minHeight: "100vh", background: "#fafafa", color: "#18181b" }}>
      {/* Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(10px)",
          background: "rgba(255,255,255,0.8)",
          borderBottom: "1px solid #e4e4e7"
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: "#18181b" }} />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 800 }}>{content.brandName}</div>
              <div style={{ fontSize: 12, color: "#52525b" }}>{content.handle}</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 13 }}>
            <a href="#brands" style={{ color: "#3f3f46", textDecoration: "none" }}>
              Brands
            </a>
            <a href="#coaching" style={{ color: "#3f3f46", textDecoration: "none" }}>
              Coaching
            </a>
            <a href="#business" style={{ color: "#3f3f46", textDecoration: "none" }}>
              Mentorship
            </a>
            <a
              href="#contact"
              style={{
                background: "#18181b",
                color: "#fff",
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: 14,
                fontWeight: 800
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 16px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 26, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Pill>High-vibe wellness</Pill>
              <Pill>Fit dad of 3</Pill>
              <Pill>Creator + mentor</Pill>
            </div>

            <div style={{ marginTop: 18, fontSize: 46, fontWeight: 900, letterSpacing: -1.2, lineHeight: 1.05 }}>
              {content.headline}
            </div>
            <div style={{ marginTop: 14, fontSize: 18, color: "#52525b", lineHeight: 1.75 }}>
              {content.subhead}
            </div>

            <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={content.primaryCtas[0].href}
                style={{
                  background: "#18181b",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "12px 16px",
                  borderRadius: 16,
                  fontWeight: 900
                }}
              >
                {content.primaryCtas[0].label}
              </a>
              <a
                href={content.primaryCtas[1].href}
                style={{
                  background: "#fff",
                  color: "#18181b",
                  textDecoration: "none",
                  padding: "12px 16px",
                  borderRadius: 16,
                  border: "1px solid #e4e4e7",
                  fontWeight: 900
                }}
              >
                {content.primaryCtas[1].label}
              </a>
              <a
                href={content.primaryCtas[2].href}
                style={{
                  background: "#fff",
                  color: "#18181b",
                  textDecoration: "none",
                  padding: "12px 16px",
                  borderRadius: 16,
                  border: "1px solid #e4e4e7",
                  fontWeight: 900
                }}
              >
                {content.primaryCtas[2].label}
              </a>
            </div>

            <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {content.quickProof.map((p) => (
                <div
                  key={p.label}
                  style={{
                    border: "1px solid #e4e4e7",
                    borderRadius: 18,
                    background: "#fff",
                    padding: 14,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.04)"
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#52525b" }}>{p.label}</div>
                  <div style={{ marginTop: 6, fontSize: 20, fontWeight: 900 }}>{p.value}</div>
                  <div style={{ marginTop: 4, fontSize: 11, color: "#52525b" }}>{p.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: 24,
              border: "1px solid #e4e4e7",
              background: "#fff",
              padding: 18,
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
            }}
          >
            <div style={{ aspectRatio: "4/5", background: "#f4f4f5", borderRadius: 18 }} />
            <div style={{ marginTop: 10, fontSize: 12, color: "#52525b", lineHeight: 1.6 }}>
              Swap this placeholder for a strong portrait. Add <code>/public/hero.jpg</code> later.
            </div>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div id="brands" style={{ background: "#fff", borderTop: "1px solid #e4e4e7" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 16px" }}>
          <SectionHeader
            eyebrow="FOR BRANDS"
            title={content.sections.brands.title}
            subtitle={content.sections.brands.subtitle}
          />

          <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {content.sections.brands.offers.map((o) => (
              <Card key={o.title} title={o.title} body={o.body} bullets={o.bullets} />
            ))}
          </div>

          <div
            style={{
              marginTop: 22,
              borderRadius: 24,
              border: "1px solid #e4e4e7",
              background: "#fafafa",
              padding: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap"
            }}
          >
            <div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>Request my media kit</div>
              <div style={{ marginTop: 6, color: "#52525b", lineHeight: 1.6 }}>
                Include deliverables, timeline, and budget range.
              </div>
            </div>
            <a
              href={`mailto:${content.brandEmail}?subject=Brand%20Collaboration%20Inquiry&body=Brand:%0AWebsite:%0AGoals:%0ATimeline:%0ABudget%20range:%0A`}
              style={{
                background: "#18181b",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: 16,
                fontWeight: 900
              }}
            >
              Email inquiry
            </a>
          </div>
        </div>
      </div>

      {/* Coaching */}
      <div id="coaching" style={{ background: "#fafafa", borderTop: "1px solid #e4e4e7" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 16px" }}>
          <SectionHeader
            eyebrow="FOR PEOPLE"
            title={content.sections.coaching.title}
            subtitle={content.sections.coaching.subtitle}
          />
          <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {content.sections.coaching.cards.map((c) => (
              <Card key={c.title} title={c.title} body={c.body} bullets={c.bullets} />
            ))}
          </div>

          <div style={{ marginTop: 22, textAlign: "center" }}>
            <a
              href="#contact"
              style={{
                background: "#18181b",
                color: "#fff",
                textDecoration: "none",
                padding: "12px 18px",
                borderRadius: 16,
                fontWeight: 900,
                display: "inline-block"
              }}
            >
              Apply for coaching
            </a>
            <div style={{ marginTop: 10, fontSize: 12, color: "#52525b" }}>
              Application-based so it’s the right fit. No pressure, just clarity.
            </div>
          </div>
        </div>
      </div>

      {/* Business */}
      <div id="business" style={{ background: "#fff", borderTop: "1px solid #e4e4e7" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 16px" }}>
          <SectionHeader
            eyebrow="FOR BUILDERS"
            title={content.sections.business.title}
            subtitle={content.sections.business.subtitle}
          />

          <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <div
              style={{
                borderRadius: 24,
                border: "1px solid #e4e4e7",
                background: "#fafafa",
                padding: 20
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 18 }}>What you’ll get</div>
              <ul style={{ marginTop: 12, paddingLeft: 16, color: "#3f3f46", lineHeight: 1.9, fontSize: 13 }}>
                {content.sections.business.leftBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div style={{ marginTop: 14 }}>
                <a
                  href="#contact"
                  style={{
                    background: "#18181b",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "12px 16px",
                    borderRadius: 16,
                    fontWeight: 900,
                    display: "inline-block"
                  }}
                >
                  Book a discovery chat
                </a>
              </div>
            </div>

            <div
              style={{
                borderRadius: 24,
                border: "1px solid #e4e4e7",
                background: "#fff",
                padding: 20,
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 18 }}>Who it’s for (and who it’s not)</div>
              <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div style={{ borderRadius: 18, border: "1px solid #e4e4e7", background: "#fafafa", padding: 14 }}>
                  <div style={{ fontWeight: 800, fontSize: 13 }}>Great fit if you:</div>
                  <ul style={{ marginTop: 8, paddingLeft: 16, fontSize: 13, color: "#3f3f46", lineHeight: 1.8 }}>
                    {content.sections.business.fit.good.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ borderRadius: 18, border: "1px solid #e4e4e7", background: "#fafafa", padding: 14 }}>
                  <div style={{ fontWeight: 800, fontSize: 13 }}>Not a fit if you:</div>
                  <ul style={{ marginTop: 8, paddingLeft: 16, fontSize: 13, color: "#3f3f46", lineHeight: 1.8 }}>
                    {content.sections.business.fit.bad.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: 12, fontSize: 12, color: "#52525b", lineHeight: 1.6 }}>
                This site avoids income or health claims. Outcomes vary and depend on consistency, effort, and personal circumstances.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ + Contact */}
      <div style={{ background: "#fafafa", borderTop: "1px solid #e4e4e7" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 16px" }}>
          <SectionHeader
            eyebrow="FAQ"
            title="Quick answers"
            subtitle="If you’re not sure where to start, reach out and choose “Not sure.”"
          />

          <div style={{ marginTop: 26, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {content.faq.map((f) => (
              <div
                key={f.q}
                style={{
                  borderRadius: 18,
                  border: "1px solid #e4e4e7",
                  background: "#fff",
                  padding: 18,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.04)"
                }}
              >
                <div style={{ fontWeight: 900 }}>{f.q}</div>
                <div style={{ marginTop: 8, color: "#52525b", lineHeight: 1.7 }}>{f.a}</div>
              </div>
            ))}
          </div>

          <div id="contact" style={{ marginTop: 28 }}>
            <SectionHeader
              eyebrow="CONTACT"
              title="Reach out"
              subtitle="Pick your path and send a short note. I’ll reply with next steps."
            />

            <div
              style={{
                maxWidth: 820,
                margin: "26px auto 0",
                borderRadius: 24,
                border: "1px solid #e4e4e7",
                background: "#fff",
                padding: 20,
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
              }}
            >
              <form
                action={`mailto:${content.coachingEmail}`}
                method="post"
                encType="text/plain"
                style={{ display: "grid", gap: 12 }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 800, color: "#52525b" }}>Name</div>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      style={{
                        marginTop: 6,
                        width: "100%",
                        padding: "12px 12px",
                        borderRadius: 14,
                        border: "1px solid #e4e4e7",
                        outline: "none"
                      }}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 800, color: "#52525b" }}>Email</div>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      style={{
                        marginTop: 6,
                        width: "100%",
                        padding: "12px 12px",
                        borderRadius: 14,
                        border: "1px solid #e4e4e7",
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#52525b" }}>I’m reaching out about</div>
                  <select
                    name="interest"
                    defaultValue="Brands"
                    style={{
                      marginTop: 6,
                      width: "100%",
                      padding: "12px 12px",
                      borderRadius: 14,
                      border: "1px solid #e4e4e7",
                      outline: "none",
                      background: "#fff"
                    }}
                  >
                    <option>Brands</option>
                    <option>Coaching</option>
                    <option>Business mentorship</option>
                    <option>Not sure</option>
                  </select>
                </div>

                <div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#52525b" }}>Message</div>
                  <textarea
                    name="message"
                    required
                    placeholder="Share your goals, timeline, and what you’re looking for."
                    style={{
                      marginTop: 6,
                      width: "100%",
                      minHeight: 140,
                      padding: "12px 12px",
                      borderRadius: 14,
                      border: "1px solid #e4e4e7",
                      outline: "none",
                      resize: "vertical"
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#18181b",
                    color: "#fff",
                    border: "none",
                    padding: "12px 16px",
                    borderRadius: 16,
                    fontWeight: 900,
                    cursor: "pointer"
                  }}
                >
                  Send message
                </button>

                <div style={{ fontSize: 11, color: "#71717a", lineHeight: 1.6 }}>
                  {content.footerNote}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #e4e4e7", background: "#fff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "20px 16px", fontSize: 12, color: "#71717a" }}>
          © {new Date().getFullYear()} {content.brandName} • {content.footerNote}
        </div>
      </div>
    </div>
  );
}
