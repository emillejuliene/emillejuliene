import { useState, useEffect } from "react";
import { MousePointer, ArrowRight, ArrowLeft, CircleCheckBig, ThumbsUp, HeartHandshake, Clock, Eye, TrendingUp, Users } from "lucide-react";



const caseStudies = [
  {
    id: "01",
    industry: "Telehealth & Pharmacy",
    title: "Redesigning the Prescription Checkout Flow",
    description: "Rebuilt the end-to-end checkout experience to reduce friction and increase prescription completion rates across web and mobile.",
    tags: ["Product Management", "UX Research", "0→1"],
    metrics: [{ label: "Drop-off reduction", value: "40%" }, { label: "Time to checkout", value: "−2.3 min" }],
    image: null,
    overview: "Patients were abandoning prescriptions at an alarming rate — nearly 60% never completed checkout after being routed from their telehealth visit. The experience was fragmented across three handoff points, required redundant data entry, and lacked trust signals at critical moments.",
    role: "I owned this project end-to-end as the sole PM-designer. I ran discovery, defined the problem, designed the solution, and partnered with a squad of 4 engineers and a clinical ops lead to ship across web and iOS.",
    sections: [
      {
        heading: "Discovery",
        body: "I ran 12 moderated usability sessions with patients who had abandoned checkout in the past 30 days. The top friction points were: (1) being asked to re-enter insurance information already on file, (2) uncertainty around cost before confirming, and (3) a confusing redirect to a third-party pharmacy partner with no context.",
      },
      {
        heading: "Problem Definition",
        body: "We reframed the problem from 'patients aren't completing checkout' to 'patients don't trust the handoff.' The root cause wasn't the number of steps — it was the loss of continuity and context between our platform and the pharmacy. Every moment of uncertainty was a moment patients could, and did, drop off.",
      },
      {
        heading: "Solution",
        body: "We shipped a unified checkout rail that pre-filled all available patient data, surfaced cost estimates before the confirmation step, and replaced the cold redirect with a branded in-app pharmacy experience. We also introduced a persistent order tracker so patients always knew where their prescription stood.",
      },
      {
        heading: "Outcome",
        body: "Drop-off fell 40% in the first 30 days post-launch. Average time-to-checkout dropped by 2.3 minutes. Patient satisfaction scores on checkout rose from 3.1 to 4.6 out of 5. The new flow became the template for two additional prescription categories launched the following quarter.",
      },
    ],
  },
  {
    id: "02",
    industry: "Electronic Medical Records",
    title: "Building an EMR Dashboard for Clinicians",
    description: "Designed a unified dashboard giving clinicians faster access to patient records, reducing tab-switching and cognitive load.",
    tags: ["Product Design", "HIPAA Compliance", "B2B"],
    metrics: [{ label: "Clinics onboarded", value: "200+" }, { label: "Task time reduction", value: "35%" }],
    image: null,
    overview: "Clinicians were spending up to 40% of their patient-facing time navigating between disconnected views in the legacy EMR. The cognitive overhead was affecting both care quality and clinician burnout — a top concern raised by clinic administrators during contract renewals.",
    role: "I led product and design on a 6-month redesign effort, partnering with 3 engineers, a HIPAA compliance officer, and clinical advisors from 5 partner clinics. This was a B2B product, so stakeholder management across clinics with different workflows was a significant part of the work.",
    sections: [
      {
        heading: "Research",
        body: "I shadowed clinicians at 3 clinics for 2 days each, mapping every context switch during a patient visit. The average visit triggered 11 tab changes across 4 tools: the appointment view, the patient summary, the notes editor, and the prescriptions panel. None of these surfaces talked to each other.",
      },
      {
        heading: "Design Principles",
        body: "We established three principles for the redesign: (1) Everything needed for a visit in one view, (2) No field should be filled in twice, (3) HIPAA compliance must be invisible to the clinician — the system handles it, not the user. These became our filter for every design decision.",
      },
      {
        heading: "Solution",
        body: "We built a context-aware dashboard that assembled a visit summary on demand — pulling the relevant patient history, active medications, prior notes, and appointment context into a single persistent panel. Clinicians could write notes inline without leaving the view. Compliance controls ran silently in the background.",
      },
      {
        heading: "Outcome",
        body: "Task time for common visit workflows dropped 35%. We onboarded 200+ clinics in the 6 months following launch. Clinician NPS rose from 22 to 61. Two of our largest clinic groups cited the dashboard as the primary reason they expanded their contracts.",
      },
    ],
  },
  {
    id: "03",
    industry: "Retail Operations Tech",
    title: "Inventory Management System at Scale",
    description: "Built internal tooling for store operations teams to track, manage, and reorder inventory across a growing retail network.",
    tags: ["Software Engineering", "Internal Tools", "Retail Tech"],
    metrics: [{ label: "Locations launched", value: "50+" }, { label: "Manual errors reduced", value: "60%" }],
    image: null,
    overview: "Store operations teams were managing inventory through a mix of spreadsheets, phone calls, and tribal knowledge. As the retail network scaled from 10 to 50+ locations, the cracks turned into crises — missed restocks, duplicate orders, and no reliable view of network-wide stock levels.",
    role: "As an Associate Software Engineer on this project, I built core backend APIs for inventory tracking and contributed to the React-based operations dashboard. I also worked closely with store managers to understand on-the-ground workflows, which shaped several key design decisions.",
    sections: [
      {
        heading: "The Problem",
        body: "Each store was an island. There was no shared system — just a shared inbox. When a location ran low on a SKU, a manager would email HQ, who would check a spreadsheet, call the supplier, and update the spreadsheet manually. Every step was a potential failure point, and at 50 locations, failures were daily.",
      },
      {
        heading: "What We Built",
        body: "We built a centralized inventory platform with three layers: a data ingestion layer that synced stock levels from point-of-sale systems every 15 minutes; an internal dashboard for operations teams to view, adjust, and flag inventory across all locations; and an automated reorder engine that triggered supplier requests when stock fell below configurable thresholds.",
      },
      {
        heading: "Technical Highlights",
        body: "The ingestion layer handled high-frequency writes across 50+ concurrent location feeds without conflicts using an event-driven queue architecture. The reorder engine was configurable per-SKU and per-location, which was critical since different stores had different lead times and buffer preferences.",
      },
      {
        heading: "Outcome",
        body: "Manual inventory errors dropped 60% in the first quarter post-launch. Restock delays fell from an average of 3.2 days to under 18 hours. The platform onboarded all 50+ active locations within the first month and became the foundation for a supplier portal built the following year.",
      },
    ],
  },
  {
    id: "04",
    industry: "Telehealth & Pharmacy",
    title: "Patient Onboarding for Telehealth Platform",
    description: "Streamlined the new patient onboarding flow, cutting time-to-first-visit through smarter intake forms and async communication.",
    tags: ["Product Management", "Growth", "Telehealth"],
    metrics: [{ label: "Time-to-first-visit", value: "3× faster" }, { label: "Completion rate", value: "+28%" }],
    image: null,
    overview: "New patients were taking an average of 4.7 days from signup to first completed visit. Drop-off in the intake flow was 52% — most of it happening on a single long-form medical history screen. For a telehealth platform competing on convenience, this was a direct threat to our growth thesis.",
    role: "I led this as a growth-focused PM initiative, partnering with a designer, 2 engineers, and our clinical team to ensure the simplified flow remained medically safe and compliant. The clinical team's sign-off on every form change was non-negotiable.",
    sections: [
      {
        heading: "The Bottleneck",
        body: "A single screen was asking patients to fill in their full medical history, current medications, allergies, insurance details, and emergency contacts — all before they'd experienced any value from the product. Qualitative research confirmed what the data suggested: patients felt like they were applying for something, not signing up for care.",
      },
      {
        heading: "Redesign Approach",
        body: "We broke the monolithic intake into a progressive disclosure model. Patients provided the minimum information needed to book a visit upfront. Everything else was collected asynchronously — through secure messages, pre-visit reminders, and post-visit follow-ups timed to natural moments in the care journey.",
      },
      {
        heading: "Clinical Collaboration",
        body: "The hardest part wasn't the design — it was the clinical review process. Each deferred question needed a clinical rationale for why it was safe to collect later. We ended up with a tiered system: safety-critical information (severe allergies, active medications) remained upfront; administrative and supplementary information moved to async collection.",
      },
      {
        heading: "Outcome",
        body: "Time-to-first-visit dropped from 4.7 days to 1.5 days — roughly 3× faster. Onboarding completion rose 28%. Critically, clinical incident rates did not increase, validating our tiered information model. The progressive intake pattern was later adopted by two other patient flows on the platform.",
      },
    ],
  },
];

const testimonials = [
  { name: "Jordan Mitchell", relationship: "Direct Report", initials: "JM", quote: "One of the clearest product thinkers I've worked with. They have a rare ability to zoom out to strategy and zoom in to execution without losing the thread." },
  { name: "Priya Nair", relationship: "Cross-functional Partner", initials: "PN", quote: "Working together on the EMR redesign was one of the most productive collaborations of my career. They brought structure, empathy, and sharp instincts to every decision." },
  { name: "Carlos Reyes", relationship: "Engineering Lead", initials: "CR", quote: "Rarely do you find a PM who can speak fluently to both users and engineers. They made our team feel heard and kept us moving without micromanaging." },
];

function CaseStudyPage({ cs, onBack }) {
  return (
    <div className="page-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .page-root { font-family: 'DM Sans', sans-serif; min-height: 100vh;
          background:
            radial-gradient(ellipse 80% 40% at 10% 10%,  rgba(245,200,66,0.28)  0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 90% 5%,   rgba(77,184,212,0.26)  0%, transparent 55%),
            radial-gradient(ellipse 60% 40% at 80% 30%,  rgba(168,192,55,0.22)  0%, transparent 55%),
            radial-gradient(ellipse 75% 45% at 5%  45%,  rgba(224,69,123,0.22)  0%, transparent 60%),
            radial-gradient(ellipse 65% 40% at 95% 55%,  rgba(232,106,26,0.20)  0%, transparent 55%),
            radial-gradient(ellipse 80% 40% at 20% 70%,  rgba(77,184,212,0.24)  0%, transparent 60%),
            radial-gradient(ellipse 70% 45% at 75% 80%,  rgba(224,69,123,0.22)  0%, transparent 55%),
            #f7f6f3;
          background-attachment: fixed;
        }
        .header {
          position: sticky; top: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 24px; height: 56px;
          background: rgba(247, 246, 243, 0.85);
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #eeecea;
        }
        .cs-tag-0 { color: #9e2a58; background: linear-gradient(135deg, rgba(224,69,123,0.13), rgba(240,112,154,0.06)); border: 1px solid rgba(224,69,123,0.28); }
        .cs-tag-1 { color: #7a5c00; background: linear-gradient(135deg, rgba(245,200,66,0.20), rgba(245,220,100,0.08)); border: 1px solid rgba(245,200,66,0.45); }
        .cs-tag-2 { color: #3d5800; background: linear-gradient(135deg, rgba(168,192,55,0.18), rgba(190,210,80,0.07)); border: 1px solid rgba(168,192,55,0.40); }
        .cs-page-container { padding: 0 32px; margin: 0 auto; max-width: 720px; padding-bottom: 80px; }
        @media (min-width: 768px) { .cs-page-container { padding: 0 40px 80px; } }
        @media (min-width: 1024px) { .cs-page-container { max-width: 760px; padding: 0 48px 80px; } }
        .cs-hero-image {
          width: 100%; aspect-ratio: 16 / 7; border-radius: 20px;
          background: #f0ede8; display: flex; align-items: center; justify-content: center;
          margin-top: 40px; overflow: hidden;
        }
        .cs-section { margin-top: 40px; }
        .cs-section h3 { margin: 0 0 10px; font-size: 13px; font-weight: 700; color: #6b6b64; text-transform: uppercase; letter-spacing: 0.1em; }
        .cs-section p { margin: 0; font-size: 15px; color: #444; line-height: 1.75; }
        .cs-metrics-row { display: flex; gap: 12px; margin-top: 40px; }
        .cs-metric { flex: 1; background: #fff; border-radius: 16px; border: 1px solid #eeecea; text-align: center; padding: 18px 14px; }
        .back-btn {
          display: inline-flex; align-items: center; gap: 7px;
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
          color: #555; padding: 0;
        }
        .back-btn:hover { color: #111; }
        .divider { height: 1px; background: #eeecea; margin: 40px 0; }
      `}</style>

      {/* Header */}
      <header className="header">
        <span style={{ fontSize: 14, fontWeight: 700, color: "#111", letterSpacing: "-0.02em" }}>Emille Juliene</span>
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft width="14" height="14" />
          Back
        </button>
      </header>

      <div className="cs-page-container">

        {/* Top meta */}
        <div style={{ marginTop: 40, marginBottom: 28 }}>
          <p style={{ margin: "0 0 10px", fontSize: 11, fontWeight: 600, color: "#6b6b64", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Case Study {cs.id} · {cs.industry}
          </p>
          <h1 style={{ margin: "0 0 16px", fontSize: 26, fontWeight: 700, color: "#111", letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            {cs.title}
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {cs.tags.map((tag, ti) => (
              <span key={tag} className={`cs-tag-${ti % 3}`} style={{ fontSize: 11, fontWeight: 600, borderRadius: 999, padding: "4px 11px" }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="cs-hero-image">
          <svg viewBox="0 0 24 24" fill="none" stroke="#d0ccc6" strokeWidth="1.2" width="40" height="40">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>

        <div className="divider" />

        {/* Overview */}
        <div className="cs-section">
          <h3>Overview</h3>
          <p>{cs.overview}</p>
        </div>

        {/* My Role */}
        <div className="cs-section">
          <h3>My Role</h3>
          <p>{cs.role}</p>
        </div>

        <div className="divider" />

        {/* Narrative sections */}
        {cs.sections.map(section => (
          <div key={section.heading} className="cs-section">
            <h3>{section.heading}</h3>
            <p>{section.body}</p>
          </div>
        ))}

        {/* Back to portfolio */}
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
          <button
            onClick={onBack}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 28px", borderRadius: 999,
              border: "1px solid #e4e2dc", background: "rgba(247,246,243,0.85)",
              backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
              fontSize: 13, fontWeight: 600, color: "#111",
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <ArrowLeft width="13" height="13" />
            Back to Portfolio
          </button>
        </div>

      </div>

      <footer style={{ padding: "24px 32px 40px" }}>
        <p style={{ margin: 0, textAlign: "center", fontSize: 11, color: "#888", fontWeight: 500, letterSpacing: "0.01em" }}>
          © 2026 Emille Juliene Armentia
        </p>
      </footer>
    </div>
  );
}

export default function PMPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const heroLines = [
    "I am a product manager",
    "I'm innovating in\nthe healthcare industry",
    "I turn complex problems\ninto products people love",
    "I ship from 0→1\nand make it look easy",
    "I make clinicians, patients\n& engineers happy",
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroAnim, setHeroAnim] = useState("enter");


  useEffect(() => {
    // Animate in on first load
    const t = setTimeout(() => setHeroAnim("idle"), 50);

    const interval = setInterval(() => {
      setHeroAnim("exit");
      setTimeout(() => {
        setHeroIndex(i => (i + 1) % heroLines.length);
        setHeroAnim("enter");
        setTimeout(() => setHeroAnim("idle"), 400);
      }, 300);
    }, 4000);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (activeCaseStudy) {
    return <CaseStudyPage cs={activeCaseStudy} onBack={() => { setActiveCaseStudy(null); setTimeout(() => { document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }); }, 50); }} />;
  }

  return (
    <div className="page-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        :root {
          --sunrays: #F5C842;
          --lime:    #A8C037;
          --blaze:   #E86A1A;
          --hotpink: #E0457B;
          --skyblue: #4DB8D4;
        }

        .page-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background:
            radial-gradient(ellipse 80% 40% at 10% 10%,  rgba(245,200,66,0.28)  0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 90% 5%,   rgba(77,184,212,0.26)  0%, transparent 55%),
            radial-gradient(ellipse 60% 40% at 80% 30%,  rgba(168,192,55,0.22)  0%, transparent 55%),
            radial-gradient(ellipse 75% 45% at 5%  45%,  rgba(224,69,123,0.22)  0%, transparent 60%),
            radial-gradient(ellipse 65% 40% at 95% 55%,  rgba(232,106,26,0.20)  0%, transparent 55%),
            radial-gradient(ellipse 80% 40% at 20% 70%,  rgba(77,184,212,0.24)  0%, transparent 60%),
            radial-gradient(ellipse 70% 45% at 75% 80%,  rgba(224,69,123,0.22)  0%, transparent 55%),
            radial-gradient(ellipse 60% 35% at 40% 90%,  rgba(245,200,66,0.20)  0%, transparent 55%),
            radial-gradient(ellipse 50% 30% at 85% 95%,  rgba(168,192,55,0.20)  0%, transparent 50%),
            #f7f6f3;
          background-attachment: fixed;
        }

        /* ── SECTION LABEL ROW ── */
        .section-label-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .section-label-row .label-text {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: #6b6b64;
          text-transform: uppercase;
          font-weight: 600;
        }


        .label-hotpink { color: #9e2a58 !important; border-color: rgba(224,69,123,0.6) !important; background: linear-gradient(135deg, rgba(224,69,123,0.18) 0%, rgba(240,112,154,0.08) 100%) !important; }
        .label-lime    { color: #3d5800 !important; border-color: rgba(168,192,55,0.6) !important; background: linear-gradient(135deg, rgba(168,192,55,0.18) 0%, rgba(190,210,80,0.08) 100%) !important; }
        .label-skyblue { color: #0a5a6e !important; border-color: rgba(77,184,212,0.6) !important; background: linear-gradient(135deg, rgba(77,184,212,0.18) 0%, rgba(100,210,230,0.08) 100%) !important; }
        .label-blaze   { color: #7a2e00 !important; border-color: rgba(232,106,26,0.6) !important; background: linear-gradient(135deg, rgba(232,106,26,0.18) 0%, rgba(245,140,60,0.08) 100%) !important; }

        /* ── ACCENT METRIC VALUES PER CARD — black ── */
        .cs-metric-val { color: #1a1a17; }

        /* ── CASE STUDY CARD TAGS — pink, yellow, green ── */
        .cs-tag-0 { color: #9e2a58 !important; background: linear-gradient(135deg, rgba(224,69,123,0.13), rgba(240,112,154,0.06)) !important; border: 1px solid rgba(224,69,123,0.28) !important; }
        .cs-tag-1 { color: #7a5c00 !important; background: linear-gradient(135deg, rgba(245,200,66,0.20), rgba(245,220,100,0.08)) !important; border: 1px solid rgba(245,200,66,0.45) !important; }
        .cs-tag-2 { color: #3d5800 !important; background: linear-gradient(135deg, rgba(168,192,55,0.18), rgba(190,210,80,0.07)) !important; border: 1px solid rgba(168,192,55,0.40) !important; }

        /* ── SCROLL ANIMATIONS ── */
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── STRENGTH CARDS ── */
        .strength-card { position: relative; overflow: hidden; }

        /* ── STRENGTH ICON TINT PER CARD ── */
        .strength-card:nth-child(1) .strength-icon { color: #c0185a; }
        .strength-card:nth-child(2) .strength-icon { color: #c89a00; }
        .strength-card:nth-child(3) .strength-icon { color: #1a8ca8; }
        .strength-card:nth-child(4) .strength-icon { color: #6e9600; }

        /* ── HERO TEXT ANIMATION ── */
        .hero-line {
          display: block;
          transition: opacity 0.35s ease, transform 0.35s ease;
          white-space: pre-line;
          text-align: center;
        }
        .hero-line.idle    { opacity: 1; transform: translateY(0); }
        .hero-line.exit    { opacity: 0; transform: translateY(-60px); }
        .hero-line.enter   { opacity: 0; transform: translateY(60px); }

        /* ── HERO GLOW — centre bloom layered over page gradient ── */
        .hero {
          background:
            radial-gradient(ellipse 55% 60% at 50% 50%, rgba(255,255,255,0.45) 0%, transparent 70%),
            radial-gradient(ellipse 55% 60% at 65% 65%, rgba(224,69,123,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 40% 45% at 35% 55%, rgba(224,69,123,0.14) 0%, transparent 60%);
        }

        /* ── HEADER ── */
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          height: 56px;
          background: rgba(247, 246, 243, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid #eeecea;
        }
        .header-nav { display: none; }
        .header-hamburger { display: flex; }

        /* ── MOBILE OVERLAY MENU ── */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: #f7f6f3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 32px 48px;
        }
        .mobile-overlay a {
          font-size: 20px;
          font-weight: 600;
          color: #111;
          text-decoration: none;
          letter-spacing: -0.02em;
          padding: 14px 0;
          width: 100%;
          text-align: center;
          transition: color 0.15s;
        }
        .mobile-overlay a:hover { color: #888; }

        /* ── HERO ── */
        .hero {
          height: calc(100svh - 56px);
          max-height: calc(720px - 56px);
          padding: 0 32px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hero h1 { font-size: 30px; line-height: 1.25; }
        .hero-text-wrap { height: calc(30px * 1.25 * 2) !important; }

        /* ── CONTAINER ── */
        .container {
          padding: 0 32px;
          margin: 0 auto;
        }

        /* ── CASE STUDIES ── */
        .case-studies-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cs-card {
          background: rgba(255,255,255,0.72);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.9);
          overflow: hidden;
        }
        .cs-card-inner {
          padding: 20px 20px 22px;
          display: flex;
          flex-direction: column;
        }
        .cs-image {
          width: 100%;
          aspect-ratio: 3 / 2;
          border-radius: 12px;
          background: #f0ede8;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* ── KEY STRENGTHS ── */
        .strengths-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* ── TESTIMONIALS ── */
        .testimonials-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ── CTA BUTTONS ── */
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* ── ABOUT ── */
        .about-grid {
          display: flex;
          flex-direction: column;
        }
        .about-photo {
          border-radius: 20px;
          background: rgba(255,255,255,0.60);
          border: 1px solid rgba(255,255,255,0.9);
          aspect-ratio: 5/4;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 28px;
        }

        /* ══════════════════════════════
           TABLET  768px+
        ══════════════════════════════ */
        @media (min-width: 768px) {
          .container {
            max-width: 720px;
            padding: 0 40px;
          }
          .hero h1 { font-size: 38px; }
          .hero-hello { font-size: 20px !important; }
          .hero-text-wrap { height: calc(38px * 1.25 * 2) !important; }

          /* Case studies: 1 col, image alternates left/right */
          .cs-card-inner { flex-direction: row; gap: 20px; align-items: stretch; padding: 20px 20px 22px; }
          .cs-card-inner.reverse { flex-direction: row-reverse; }
          .cs-image {
            flex: 0 0 calc(40% - 10px);
            aspect-ratio: unset;
            align-self: stretch;
            height: auto;
            margin-bottom: 0;
            border-radius: 12px;
          }
          .cs-body { flex: 1; min-width: 0; }

          /* Strengths: 2 col */
          .strengths-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          /* CTA buttons: side by side */
          .cta-buttons {
            flex-direction: row;
            justify-content: center;
          }
          .cta-buttons a, .cta-buttons button { flex: 0 0 auto; min-width: 200px; }
        }

        /* ══════════════════════════════
           DESKTOP  1024px+
        ══════════════════════════════ */
        @media (min-width: 1024px) {
          .container {
            max-width: 960px;
            padding: 0 48px;
          }
          .hero h1 { font-size: 48px; }
          .hero-hello { font-size: 22px !important; }
          .hero-text-wrap { height: calc(48px * 1.25 * 2) !important; }

          /* Header: show nav, hide hamburger */
          .header { padding: 0 48px; }
          .header-hamburger { display: none; }
          .mobile-overlay { display: none; }
          .header-nav {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .header-nav a {
            font-size: 13px;
            font-weight: 600;
            color: #555;
            text-decoration: none;
            padding: 7px 16px;
            border-radius: 999px;
            transition: background 0.15s;
          }
          .header-nav a:hover { background: #eeecea; }

          /* Case studies: 1 col, image alternates left/right (same as tablet) */
          .case-studies-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .cs-card-inner { flex-direction: row; gap: 24px; align-items: stretch; padding: 24px 24px 26px; }
          .cs-card-inner.reverse { flex-direction: row-reverse; }
          .cs-image {
            flex: 0 0 calc(40% - 12px);
            aspect-ratio: unset;
            align-self: stretch;
            height: auto;
            margin-bottom: 0;
            border-radius: 12px;
          }
          .cs-card-inner.reverse .cs-image { border-radius: 12px; }
          .cs-body { flex: 1; min-width: 0; }

          /* Testimonials: 3 col */
          .testimonials-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }

          /* About: 2 col */
          .about-grid {
            flex-direction: row;
            align-items: stretch;
            gap: 40px;
          }
          .about-photo {
            flex: 0 0 38%;
            aspect-ratio: unset;
            align-self: stretch;
            height: auto;
            margin-bottom: 0;
          }
          .about-content { flex: 1; min-width: 0; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header className="header">
        <span style={{ fontSize: 14, fontWeight: 700, color: "#111", letterSpacing: "-0.02em" }}>Emille Juliene</span>
        {/* Desktop nav */}
        <nav className="header-nav">
          <a href="#portfolio">Work</a>
          <a href="#">LinkedIn</a>
          <a href="#">Resume</a>
        </nav>
        {/* Mobile/Tablet hamburger */}
        <button className="header-hamburger" onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "#111", zIndex: 101, position: "relative" }}>
          {menuOpen
            ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="22" height="22"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="22" height="22"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </header>

      {/* ── MOBILE/TABLET FULL-PAGE OVERLAY MENU ── */}
      {menuOpen && (
        <div className="mobile-overlay">
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#" onClick={() => setMenuOpen(false)}>LinkedIn</a>
          <a href="#" onClick={() => setMenuOpen(false)}>Resume</a>
        </div>
      )}

      {/* ── HERO ── */}
      <div className="hero">
        <p className="hero-hello" style={{ margin: "0 0 8px", fontSize: 17, color: "#6b6b64", fontWeight: 400 }}>Hello! I'm Emille Juliene</p>
        <div style={{ overflow: "hidden", height: "calc(30px * 1.25 * 2)", flexShrink: 0, display: "flex", alignItems: "flex-start", justifyContent: "center" }} className="hero-text-wrap">
          <h1 className={`hero-line ${heroAnim}`} style={{ margin: 0, fontWeight: 700, letterSpacing: "-0.03em", color: "#1a1a1a", lineHeight: 1.25, textAlign: "center" }}>
            {heroLines[heroIndex]}
          </h1>
        </div>
      </div>

      <div id="portfolio" className="container">

        {/* ── CASE STUDIES ── */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="section-label-row"><span className="label-text"><MousePointer size={12} />Selected work</span></div>
          <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.2 }}>Case Studies</h2>
        </div>
        <div className="case-studies-grid">
          {caseStudies.map((cs, i) => (
            <div key={cs.id} className={`cs-card cs-card-${i + 1}`}>
              <div className={`cs-card-inner${i % 2 !== 0 ? " reverse" : ""}`}>

                {/* Image */}
                <div className="cs-image">
                  {cs.image
                    ? <img src={cs.image} alt={cs.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <svg viewBox="0 0 24 24" fill="none" stroke="#d0ccc6" strokeWidth="1.2" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  }
                </div>

                {/* Body */}
                <div className="cs-body">
                  <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 600, color: "#6b6b64", letterSpacing: "0.1em", textTransform: "uppercase" }}>{cs.industry}</p>
                  <p style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 700, color: "#111", letterSpacing: "-0.02em", lineHeight: 1.35 }}>{cs.title}</p>
                  <p style={{ margin: "0 0 16px", fontSize: 13, color: "#888", lineHeight: 1.65 }}>{cs.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {cs.tags.map((tag, ti) => (
                      <span key={tag} className={`cs-tag-${ti % 3}`} style={{ fontSize: 11, fontWeight: 600, borderRadius: 999, padding: "4px 11px" }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "stretch", marginBottom: 20 }}>
                    {cs.metrics.map((m, mi) => (
                      <>
                        {mi > 0 && <div key={`div-${mi}`} style={{ width: 1, background: "#e4e2dc", margin: "4px 16px" }} />}
                        <div key={m.label} style={{ flex: 1, padding: "8px 0" }}>
                          <p className="cs-metric-val" style={{ margin: "0 0 2px", fontSize: 18, fontWeight: 700, letterSpacing: "-0.03em" }}>{m.value}</p>
                          <p style={{ margin: 0, fontSize: 11, color: "#6b6b64", fontWeight: 500 }}>{m.label}</p>
                        </div>
                      </>
                    ))}
                  </div>
                  <button
                    onClick={() => { setActiveCaseStudy(cs); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, width: "100%", padding: "12px 0", borderRadius: 999, border: "none", background: "#1a1a17", fontSize: 13, fontWeight: 600, color: "#fff", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box" }}
                  >
                    View Case Study
                    <ArrowRight width="13" height="13" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── KEY STRENGTHS ── */}
        <div style={{ marginTop: 64 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label-row"><span className="label-text"><CircleCheckBig size={12} />Why me?</span></div>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.2 }}>My key strengths</h2>
          </div>
          <div className="strengths-grid">
            {[
              { icon: (<Clock size={26} />), title: "7 Years of Product Experience", desc: "Spanning telehealth, pharmacy, EMR, and retail — building products that serve real users across healthcare and commerce." },
              { icon: (<Eye size={26} />), title: "Product Manager & Designer", desc: "I work across both disciplines — defining strategy and shaping the experience, so nothing gets lost in translation." },
              { icon: (<Users size={26} />), title: "Cross-functional Collaborator", desc: "Led squads of 8+, partnering with engineering, clinical, and ops teams to ship from 0→1 and beyond." },
              { icon: (<TrendingUp size={26} />), title: "Outcome-driven", desc: "Reduced prescription drop-off by 40%, onboarded 200+ clinics, and scaled retail tooling to 50+ locations." },
            ].map((s, i) => (
              <div key={i} className="strength-card fade-up" style={{ background: "rgba(255,255,255,0.70)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderRadius: 20, padding: "28px 20px", border: "1px solid rgba(255,255,255,0.9)", textAlign: "center", transitionDelay: `${i * 0.1}s` }}>
                <div className="strength-icon" style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <p style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 700, color: "#111", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{s.title}</p>
                <p style={{ margin: 0, fontSize: 13, color: "#888", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div style={{ marginTop: 64 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-label-row"><span className="label-text"><ThumbsUp size={12} />Kind words</span></div>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.2 }}>From Colleagues</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, ti) => (
              <div key={t.name} className="fade-up" style={{ background: "rgba(255,255,255,0.70)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderRadius: 24, padding: "24px 22px", border: "1px solid rgba(255,255,255,0.9)", transitionDelay: `${ti * 0.12}s` }}>
                <div style={{ fontSize: 32, lineHeight: 1, color: "#c04c00", fontFamily: "Georgia, serif", marginBottom: 10 }}>"</div>
                <p style={{ margin: "0 0 20px", fontSize: 14, color: "#555", lineHeight: 1.7 }}>{t.quote}</p>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#111" }}>{t.name}</p>
                    <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#111", textDecoration: "none", flexShrink: 0, width: 16, height: 16, border: "1px solid #111", borderRadius: 3 }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="9" height="9"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </div>
                  <p style={{ margin: 0, fontSize: 11, color: "#6b6b64", fontWeight: 500 }}>{t.relationship}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ABOUT + GET IN TOUCH ── */}
        <div style={{ marginTop: 64 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="section-label-row"><span className="label-text"><HeartHandshake size={12} />Get in touch</span></div>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em", color: "#111", lineHeight: 1.2 }}>A little about me</h2>
          </div>

          {/* Single 5:4 photo */}
          <div className="about-grid">
            <div className="about-photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="#c8c5bc" strokeWidth="1.2" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </div>

            <div className="about-content">
              {/* Blurb */}
              <p style={{ margin: "0 0 20px", fontSize: 15, color: "#555", lineHeight: 1.75 }}>
                I'm a product manager with 7 years shipping in healthcare — from prescription checkout flows to EMR dashboards. I care deeply about the humans on both sides of the screen, and I bring the same clarity to a strategy doc as I do to a user interview.
              </p>

              {/* Personality pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {[
                  { label: "INTJ", color: "rgba(224,69,123,0.12)", border: "rgba(224,69,123,0.3)", text: "#9e2a58" },
                  { label: "Healthcare PM", color: "rgba(77,184,212,0.12)", border: "rgba(77,184,212,0.3)", text: "#0a5a6e" },
                  { label: "0→1 Builder", color: "rgba(168,192,55,0.12)", border: "rgba(168,192,55,0.3)", text: "#3d5800" },
                  { label: "Dog mum 🐶", color: "rgba(245,200,66,0.15)", border: "rgba(245,200,66,0.4)", text: "#7a5c00" },
                  { label: "Based in NYC", color: "rgba(232,106,26,0.12)", border: "rgba(232,106,26,0.3)", text: "#7a2e00" },
                ].map(p => (
                  <span key={p.label} style={{ fontSize: 13, fontWeight: 600, color: p.text, background: p.color, border: `1px solid ${p.border}`, borderRadius: 999, padding: "7px 14px" }}>{p.label}</span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 28px", borderRadius: 999, border: "1px solid #e4e2dc", background: "rgba(247,246,243,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", fontSize: 14, fontWeight: 600, color: "#111", cursor: "pointer", textDecoration: "none" }}>
                  Connect on LinkedIn
                </a>
                <button style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 28px", borderRadius: 999, border: "1px solid #e4e2dc", background: "rgba(247,246,243,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", fontSize: 14, fontWeight: 600, color: "#111", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
                  Download my resume
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── FOOTER ── */}
      <footer style={{ marginTop: 64, padding: "24px 32px 40px" }}>
        <p style={{ margin: 0, textAlign: "center", fontSize: 11, color: "#888", fontWeight: 500, letterSpacing: "0.01em" }}>
          © 2026 Emille Juliene Armentia
        </p>
      </footer>

    </div>
  );
}

// ─────────────────────────────────────────────
// PASSWORD GATE
// To change the password: replace the value below with btoa("yournewpassword")
// To change the bypass ref: replace the value below with btoa("yournewref")
// Current password:  productEM26
// Current bypass:    ?ref=sharelink2026
// ─────────────────────────────────────────────
const _EP = "cHJvZHVjdEVNMjY=";          // btoa("productEM26")
const _ER = "c2hhcmVsaW5rMjAyNg==";        // btoa("sharelink2026")
const _AK = "_eja_auth";

function PasswordGate({ children }) {
  const [authed, setAuthed]   = useState(false);
  const [input, setInput]     = useState("");
  const [error, setError]     = useState(false);
  const [ready, setReady]     = useState(false);

  useEffect(() => {
    // 1. Check bypass URL param
    const params = new URLSearchParams(window.location.search);
    const ref    = params.get("ref");
    if (ref && btoa(ref) === _ER) {
      localStorage.setItem(_AK, "1");
      setAuthed(true);
      setReady(true);
      return;
    }
    // 2. Check persisted session
    if (localStorage.getItem(_AK) === "1") {
      setAuthed(true);
    }
    setReady(true);
  }, []);

  const handleSubmit = () => {
    if (btoa(input) === _EP) {
      localStorage.setItem(_AK, "1");
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  if (!ready) return null;
  if (authed) return children;

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 24px",
      background: `
        radial-gradient(ellipse 80% 40% at 10% 10%,  rgba(245,200,66,0.28)  0%, transparent 60%),
        radial-gradient(ellipse 70% 50% at 90% 5%,   rgba(77,184,212,0.26)  0%, transparent 55%),
        radial-gradient(ellipse 60% 40% at 80% 30%,  rgba(168,192,55,0.22)  0%, transparent 55%),
        radial-gradient(ellipse 75% 45% at 5%  45%,  rgba(224,69,123,0.22)  0%, transparent 60%),
        radial-gradient(ellipse 65% 40% at 95% 55%,  rgba(232,106,26,0.20)  0%, transparent 55%),
        #f7f6f3`,
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
      <div style={{
        width: "100%",
        maxWidth: 380,
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: 24,
        border: "1px solid rgba(255,255,255,0.9)",
        padding: "36px 28px",
        textAlign: "center",
      }}>
        <p style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 700, color: "#111", letterSpacing: "-0.03em" }}>
          Emille Juliene
        </p>
        <p style={{ margin: "0 0 28px", fontSize: 13, color: "#888", lineHeight: 1.6 }}>
          This portfolio is password protected.<br />Enter the password to continue.
        </p>
        <input
          type="password"
          value={input}
          onChange={e => { setInput(e.target.value); setError(false); }}
          onKeyDown={handleKey}
          placeholder="Password"
          autoFocus
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 999,
            border: `1px solid ${error ? "rgba(224,69,123,0.6)" : "#e4e2dc"}`,
            background: error ? "rgba(224,69,123,0.05)" : "rgba(247,246,243,0.9)",
            fontSize: 14,
            fontFamily: "'DM Sans', sans-serif",
            color: "#111",
            outline: "none",
            marginBottom: error ? 8 : 12,
            boxSizing: "border-box",
            transition: "border 0.2s, background 0.2s",
          }}
        />
        {error && (
          <p style={{ margin: "0 0 12px", fontSize: 12, color: "#c0185a", fontWeight: 500 }}>
            Incorrect password — please try again.
          </p>
        )}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "13px 0",
            borderRadius: 999,
            border: "none",
            background: "#1a1a17",
            fontSize: 14,
            fontWeight: 600,
            color: "#fff",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <PasswordGate>
      <PMPage />
    </PasswordGate>
  );
}
