import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Sparkles, Slack, Smartphone, Trophy, Bell, Users, Globe2, Clock,
  HeartHandshake, Shuffle, Brain, ArrowRight, Check, Quote, ChevronRight,
  Mail, ShieldCheck, Activity, Settings2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] } }),
};

function Nav() {
  return (
    <header className="sticky top-0 z-40">
      <div className="absolute inset-0 backdrop-blur-md bg-[hsl(var(--bg))]/60 border-b border-white/5" />
      <div className="relative max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-orange-500 grid place-items-center shadow-[0_0_24px_-4px_rgba(249,115,22,0.7)]">
            <Trophy className="h-4 w-4 text-slate-950" strokeWidth={2.5} />
          </div>
          <span className="font-display text-[17px] font-semibold tracking-tight">BracketCulture</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#team-building" className="hover:text-white transition">Team Building</a>
          <a href="#events" className="hover:text-white transition">Events</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden sm:inline-flex text-sm text-slate-300 hover:text-white">Sign in</a>
          <Button asChild className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-semibold h-9 rounded-full px-4">
            <a href="#hero-form">Get a demo <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [email, setEmail] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: 'You\'re on the list.', description: `We\'ll send setup details to ${email}.` });
    setEmail('');
  };
  return (
    <section id="top" className="relative overflow-hidden">
      {/* aurora */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[1100px] rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
      <div className="absolute top-20 -left-32 h-[360px] w-[360px] rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1240px] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs text-slate-300 px-3 py-1 rounded-full glass">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            HR-compliant · SOC 2 in progress · Used by 240+ People Ops teams
          </span>
        </motion.div>

        <motion.h1
          initial="hidden" animate="show" variants={fadeUp} custom={1}
          className="font-display text-center text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-[-0.03em] text-slate-50"
        >
          Zero-Maintenance
          <br />
          <span className="relative inline-block">
            <span className="highlight-underline">Office Pools</span>
            <span className="font-script text-orange-400 text-3xl md:text-4xl absolute -right-16 -top-2 rotate-[8deg] hidden md:inline">no spreadsheets!</span>
          </span>
        </motion.h1>

        <motion.p
          initial="hidden" animate="show" variants={fadeUp} custom={2}
          className="mt-6 text-center text-slate-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Set up in <span className="text-white font-semibold">60 seconds</span>. Scoring runs itself, Slack stays in the loop, and HR sleeps at night.
        </motion.p>

        <motion.form
          id="hero-form"
          onSubmit={submit}
          initial="hidden" animate="show" variants={fadeUp} custom={3}
          className="mt-9 max-w-xl mx-auto flex flex-col sm:flex-row gap-3"
        >
          <div className="flex-1 relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="work@yourcompany.com"
              className="h-12 pl-10 bg-slate-900/70 border-white/10 text-slate-100 placeholder:text-slate-500 focus-visible:ring-orange-500"
            />
          </div>
          <Button type="submit" className="h-12 rounded-md bg-orange-500 hover:bg-orange-400 text-slate-950 font-semibold px-6 shadow-[0_10px_30px_-10px_rgba(249,115,22,0.6)]">
            Start a Pool <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </motion.form>
        <p className="mt-3 text-center text-xs text-slate-500">Free 14-day pilot · No card required · Cancel inside Slack</p>

        {/* Hero stat strip */}
        <motion.div
          initial="hidden" animate="show" variants={fadeUp} custom={4}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10"
        >
          {[
            { k: '60s', v: 'Average setup time' },
            { k: '94%', v: 'Employee participation' },
            { k: '0', v: 'Spreadsheets needed' },
            { k: '12+', v: 'Native integrations' },
          ].map((s) => (
            <div key={s.v} className="bg-slate-950/60 px-6 py-5">
              <div className="font-display text-3xl md:text-4xl font-semibold text-white">{s.k}</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* logo marquee */}
      <div className="relative border-y border-white/5 bg-slate-950/40 py-5 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[hsl(var(--bg))] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[hsl(var(--bg))] to-transparent z-10" />
        <div className="flex w-max marquee gap-14 text-slate-500">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            ['FIFA', 'EPL', 'Super Bowl', 'UFC', 'NBA', 'MLB', 'IPL', 'ICC', 'UEFA'].map((n) => (
              <span key={`${i}-${n}`} className="font-display text-2xl tracking-tight whitespace-nowrap">{n}</span>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function FeatureColumn({ tag, title, items, icon: Icon }) {
  return (
    <div className="glass rounded-2xl p-6 md:p-7 relative group hover:border-orange-400/30 transition">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-orange-300/90">
        <span className="h-px w-6 bg-orange-400/60" /> {tag}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-orange-500/15 text-orange-300 grid place-items-center border border-orange-500/20">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-xl text-white font-semibold">{title}</h3>
      </div>
      <ul className="mt-6 space-y-4">
        {items.map((it) => (
          <li key={it.t} className="flex gap-3">
            <div className="mt-1 h-5 w-5 rounded-md bg-slate-800 border border-white/10 grid place-items-center shrink-0">
              <Check className="h-3 w-3 text-orange-400" strokeWidth={3} />
            </div>
            <div>
              <div className="text-slate-100 font-medium">{it.t}</div>
              <div className="text-sm text-slate-400 mt-0.5">{it.d}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative max-w-[1240px] mx-auto px-6 py-24 md:py-32">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-orange-300">02 · Platform</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-white">
          Built for the people who <em className="not-italic text-orange-300">actually</em> run the office.
        </h2>
        <p className="mt-4 text-slate-300 text-lg">Three teams, three problems, one platform. BracketCulture replaces commissioner burnout, integration hell, and clunky participant flows.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        <FeatureColumn
          tag="For Admins"
          title="The Commissioner's Dream"
          icon={Settings2}
          items={[
            { t: 'Automated live scoring', d: 'Real-time feeds from official data partners. No manual entry, ever.' },
            { t: 'Custom rule engine', d: 'Tiebreakers, scoring weights, and bonus rounds without writing a line of code.' },
            { t: 'Audit-ready exports', d: 'One-click reports for finance, HR, and legal — CSV, PDF, API.' },
          ]}
        />
        <FeatureColumn
          tag="For Company"
          title="Company Culture Angle"
          icon={Slack}
          items={[
            { t: 'Slack & MS Teams native', d: 'Picks, leaderboards, and trash talk push directly into your workspace.' },
            { t: 'Enterprise scalability', d: 'SSO, SCIM, regional data residency. Tested from 50 to 50,000 seats.' },
            { t: 'HRIS-aware grouping', d: 'Auto-bracket by department, office, or cohort from Workday or BambooHR.' },
          ]}
        />
        <FeatureColumn
          tag="For Players"
          title="The Player Experience"
          icon={Smartphone}
          items={[
            { t: 'Mobile-first picks', d: 'Make selections in under 30 seconds on any device. No app install required.' },
            { t: 'Community hubs', d: 'Reactions, GIF threads, and water-cooler banter scoped to each pool.' },
            { t: 'Smart notifications', d: 'Only the moments that matter — quiet hours respected globally.' },
          ]}
        />
      </div>
    </section>
  );
}

function WhyItWorks() {
  const cards = [
    { icon: Shuffle, title: 'Breaks departmental silos', body: 'Sales and engineering finally talk — about a 14-seed upset, but they\'re talking.' },
    { icon: HeartHandshake, title: 'Inclusive by design', body: 'No sports knowledge required. Random-pick mode levels the bracket from minute one.' },
    { icon: Globe2, title: 'Async across time zones', body: 'Tokyo locks picks while Austin sleeps. Everyone arrives Monday with the same scoreboard.' },
    { icon: Brain, title: 'Replaces forced fun', body: 'Organic competition replaces awkward icebreakers and mandatory mixers.' },
    { icon: Activity, title: 'Sustained micro-engagement', body: '4–8 weeks of daily check-ins beats a single offsite. Habit beats event.' },
    { icon: ShieldCheck, title: 'HR-safe by default', body: 'No real-money wagers. Prize tiers configurable per jurisdiction.' },
  ];
  return (
    <section id="team-building" className="relative max-w-[1240px] mx-auto px-6 py-24 md:py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-orange-300">03 · Why it works</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-white">Six reasons HR keeps renewing.</h2>
        </div>
        <p className="text-slate-400 max-w-md">Pulled from 18 months of usage data across 240+ customers — from 80-person startups to Fortune 500 ops teams.</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.04, duration: 0.5 }}
            className="glass rounded-2xl p-6 hover:bg-slate-800/40 hover:-translate-y-0.5 transition group"
          >
            <div className="h-10 w-10 rounded-lg bg-slate-800 border border-white/10 grid place-items-center text-orange-300 group-hover:bg-orange-500/15 group-hover:border-orange-400/30 transition">
              <c.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-white">{c.title}</h3>
            <p className="mt-2 text-slate-400 text-sm leading-relaxed">{c.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Science() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 border-t border-white/5">
      <div className="absolute inset-0 -z-10 grain" />
      <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-orange-300">04 · Research</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-white">The science of play.</h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              Competitive group events trigger measurable lifts in cross-team communication, psychological safety, and information sharing — not just on the day of the event, but for weeks after.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="border-l-2 border-orange-400/60 pl-4">
                <div className="text-xs uppercase tracking-wider text-orange-300/80">Harvard Business Review</div>
                <p className="text-slate-200 mt-1">"Friendly intra-company competition reliably increases the volume and quality of information sharing across departmental boundaries."</p>
              </li>
              <li className="border-l-2 border-orange-400/60 pl-4">
                <div className="text-xs uppercase tracking-wider text-orange-300/80">Journal of Applied Psychology</div>
                <p className="text-slate-200 mt-1">Time-bound, low-stakes contests outperform unstructured social events at building durable in-group trust (d = 0.41).</p>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            <blockquote className="glass-strong rounded-2xl p-7 relative">
              <Quote className="h-7 w-7 text-orange-400/60 -ml-1" />
              <p className="font-display text-xl text-white leading-snug mt-3">
                "You can discover more about a person in an hour of play than in a year of conversation."
              </p>
              <footer className="mt-5 text-sm text-slate-400">— Plato, <span className="italic">Laws</span></footer>
            </blockquote>
            <blockquote className="glass-strong rounded-2xl p-7 sm:mt-10 relative">
              <Quote className="h-7 w-7 text-orange-400/60 -ml-1" />
              <p className="font-display text-xl text-white leading-snug mt-3">
                "The strength of the team is each individual member. The strength of each member is the team."
              </p>
              <footer className="mt-5 text-sm text-slate-400">— Phil Jackson, 11× NBA champion coach</footer>
            </blockquote>
            <div className="sm:col-span-2 glass rounded-2xl p-6 flex items-center gap-5">
              <div className="font-display text-5xl font-semibold text-orange-300">3.4×</div>
              <div className="text-slate-300 text-sm">
                Cross-departmental Slack DMs between participating employees in the four weeks following a BracketCulture pool, vs. matched control cohorts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Event cards with rich SVG hover backgrounds ---------- */

function CardShell({ children, className = '', ...rest }) {
  return (
    <div
      {...rest}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-[0_30px_80px_-30px_rgba(249,115,22,0.4)] ${className}`}
    >
      {children}
    </div>
  );
}

function EventBody({ kicker, title, copy, footer }) {
  return (
    <div className="relative z-10 p-7 md:p-8 h-full flex flex-col">
      <div className="text-xs uppercase tracking-[0.2em] text-orange-300/90">{kicker}</div>
      <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300/90 max-w-md leading-relaxed">{copy}</p>
      <div className="flex-1" />
      <div className="mt-6 flex items-center gap-2 text-sm text-orange-300 group-hover:gap-3 transition-all">
        {footer} <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  );
}

/* SVG decoration layers */
function WorldCupBg() {
  return (
    <>
      {/* base tri-color bands */}
      <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition duration-700">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-b from-emerald-500/40 to-emerald-700/10" />
        <div className="absolute inset-y-0 left-1/3 w-1/3 bg-gradient-to-b from-red-500/40 to-red-800/10" />
        <div className="absolute inset-y-0 left-2/3 w-1/3 bg-gradient-to-b from-blue-500/40 to-blue-800/10" />
      </div>
      <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-700" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {/* goal net */}
        <g stroke="rgba(255,255,255,0.18)" strokeWidth="1">
          {Array.from({ length: 18 }).map((_, i) => <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="400" />)}
          {Array.from({ length: 10 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 45} x2="800" y2={i * 45} />)}
        </g>
        {/* footballs */}
        {[
          [90, 320, 22], [690, 90, 18], [420, 340, 16], [620, 280, 14], [180, 120, 12]
        ].map(([cx, cy, r], i) => (
          <g key={i} transform={`translate(${cx} ${cy})`}>
            <circle r={r} fill="#f8fafc" opacity="0.92" />
            <polygon points="0,-7 6,-2 4,5 -4,5 -6,-2" fill="#0f172a" />
            <circle r={r} fill="none" stroke="#0f172a" strokeOpacity="0.5" />
          </g>
        ))}
        {/* jerseys */}
        {[
          { x: 540, c: '#dc2626', s: '#fbbf24', label: 'POR' },
          { x: 600, c: '#60a5fa', s: '#fff', label: 'ARG' },
          { x: 660, c: '#fff', s: '#000', label: 'GER' },
          { x: 720, c: '#1e3a8a', s: '#fff', label: 'ENG' },
        ].map((j, i) => (
          <g key={i} transform={`translate(${j.x} 30)`}>
            <path d="M0 10 L14 0 L30 8 L44 0 L58 10 L52 24 L44 22 L44 70 L14 70 L14 22 L6 24 Z" fill={j.c} stroke={j.s} strokeWidth="1.5" />
            <text x="29" y="50" fontSize="9" fontWeight="700" textAnchor="middle" fill={j.s}>{j.label}</text>
          </g>
        ))}
        {/* goalpost */}
        <g stroke="#fff" strokeOpacity="0.5" strokeWidth="3" fill="none">
          <path d="M30 350 L30 230 L240 230 L240 350" />
        </g>
      </svg>
      {/* overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30 group-hover:from-slate-950/85" />
    </>
  );
}

function WorldCupCard() {
  return (
    <CardShell className="md:col-span-2 min-h-[360px]">
      <WorldCupBg />
      <div className="relative z-10 grid md:grid-cols-[1.2fr_1fr] gap-6 h-full">
        <EventBody
          kicker="Feature Event · Summer 2026"
          title="World Cup 2026"
          copy="48 teams. 104 matches. Three host nations. The biggest tournament in football history, scored automatically and pushed live into your Slack."
          footer="Open the 2026 bracket"
        />
        <div className="relative hidden md:flex items-center justify-center p-8">
          <div className="absolute inset-6 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md" />
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-2 text-2xl">
              <span title="Canada">🇨🇦</span><span title="Mexico">🇲🇽</span><span title="USA">🇺🇸</span>
            </div>
            <div className="mt-2 font-display text-[120px] leading-none font-bold text-white tracking-tighter">
              <span className="bg-gradient-to-b from-amber-200 to-amber-500 bg-clip-text text-transparent">26</span>
            </div>
            <div className="mt-2 inline-flex items-center gap-2 text-amber-300 text-sm">
              <Trophy className="h-4 w-4" /> 48 teams · 104 matches
            </div>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

function MarchMadnessCard() {
  return (
    <CardShell className="min-h-[320px]">
      <div className="absolute inset-0 opacity-25 group-hover:opacity-100 transition duration-700">
        <svg viewBox="0 0 400 320" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
          {/* bracket lines */}
          <g stroke="rgba(251,146,60,0.55)" strokeWidth="1.2" fill="none">
            {[40, 80, 120, 160, 200, 240, 280].map((y) => (<line key={y} x1="20" y1={y} x2="90" y2={y} />))}
            <path d="M90 40 L110 40 L110 80 L90 80" />
            <path d="M90 120 L110 120 L110 160 L90 160" />
            <path d="M90 200 L110 200 L110 240 L90 240" />
            <path d="M110 60 L150 60 L150 140 L110 140" />
            <path d="M110 220 L150 220 L150 140" />
            <path d="M150 140 L210 140" />
            {/* right mirror */}
            <g transform="translate(400 0) scale(-1 1)">
              <path d="M20 40 L90 40 M20 80 L90 80 M20 120 L90 120 M20 160 L90 160 M20 200 L90 200 M20 240 L90 240" />
              <path d="M90 40 L110 40 L110 80 L90 80" />
              <path d="M90 120 L110 120 L110 160 L90 160" />
              <path d="M110 60 L150 60 L150 140 L110 140 L150 140 L210 140" />
            </g>
          </g>
          {/* basketball */}
          <g transform="translate(320 250)">
            <circle r="32" fill="#ea580c" />
            <path d="M-32 0 A32 32 0 0 0 32 0" stroke="#1c0a04" strokeWidth="2" fill="none" />
            <path d="M0 -32 L0 32" stroke="#1c0a04" strokeWidth="2" />
            <path d="M-28 -16 Q0 -8 28 -16" stroke="#1c0a04" strokeWidth="2" fill="none" />
            <path d="M-28 16 Q0 8 28 16" stroke="#1c0a04" strokeWidth="2" fill="none" />
          </g>
          {/* hoop */}
          <g transform="translate(60 250)" stroke="#f97316" strokeWidth="2" fill="none">
            <ellipse cx="0" cy="0" rx="24" ry="6" />
            <path d="M-22 2 L-14 28 M-8 4 L-4 30 M8 4 L4 30 M22 2 L14 28" />
            <rect x="-30" y="-22" width="60" height="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.3)" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-950/40" />
      <EventBody
        kicker="Annual · March"
        title="March Madness"
        copy="68 teams, one weekend of chaos. Auto-generated brackets, Cinderella-aware scoring, and survivor pools layered in."
        footer="Bracket builder ready"
      />
    </CardShell>
  );
}

function SuperBowlCard() {
  return (
    <CardShell className="min-h-[320px]">
      <div className="absolute inset-0 opacity-30 group-hover:opacity-100 transition duration-700">
        <svg viewBox="0 0 400 320" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <defs>
            <linearGradient id="field" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#064e3b" stopOpacity="0.6" />
              <stop offset="1" stopColor="#022c22" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="400" height="320" fill="url(#field)" />
          {/* hash marks */}
          <g stroke="rgba(255,255,255,0.45)" strokeWidth="1">
            {[60, 100, 140, 180, 220, 260, 300].map((x) => (
              <g key={x}>
                <line x1={x} y1="60" x2={x} y2="78" />
                <line x1={x} y1="242" x2={x} y2="260" />
                <text x={x} y="170" fill="rgba(255,255,255,0.18)" fontSize="36" fontWeight="800" textAnchor="middle">{x % 80 === 60 ? '10' : '20'}</text>
              </g>
            ))}
          </g>
          {/* goalposts yellow */}
          <g stroke="#facc15" strokeWidth="3" fill="none">
            <path d="M30 60 L30 260" />
            <path d="M15 80 L45 80" />
            <path d="M15 80 L15 160" />
            <path d="M45 80 L45 160" />
            <path d="M370 60 L370 260" />
            <path d="M355 80 L385 80" />
            <path d="M355 80 L355 160" />
            <path d="M385 80 L385 160" />
          </g>
          {/* spiral football */}
          <g transform="translate(220 230) rotate(-18)">
            <ellipse rx="26" ry="12" fill="#7c2d12" />
            <path d="M-18 0 Q0 -6 18 0" stroke="#fff" strokeWidth="1.5" fill="none" />
            <path d="M-6 -3 L-6 3 M-2 -4 L-2 4 M2 -4 L2 4 M6 -3 L6 3" stroke="#fff" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30" />
      <EventBody
        kicker="Annual · February"
        title="Super Bowl Squares"
        copy="100-square grid auto-assigned by department. Quarter-by-quarter payouts (prize tier or kudos) settle the second the clock hits zero."
        footer="Auto-generate squares"
      />
    </CardShell>
  );
}

function FightNightCard() {
  return (
    <CardShell className="min-h-[320px]">
      <div className="absolute inset-0 opacity-30 group-hover:opacity-100 transition duration-700">
        <svg viewBox="0 0 400 320" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
          {/* octagon cage */}
          <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none">
            <polygon points="200,30 320,90 340,200 260,290 140,290 60,200 80,90" />
            {/* chain link */}
            <g opacity="0.45">
              {Array.from({ length: 14 }).map((_, i) => (
                <line key={`d${i}`} x1={40 + i * 25} y1="40" x2={20 + i * 25} y2="300" />
              ))}
              {Array.from({ length: 14 }).map((_, i) => (
                <line key={`r${i}`} x1={20 + i * 25} y1="40" x2={40 + i * 25} y2="300" />
              ))}
            </g>
          </g>
          {/* gloves */}
          <g transform="translate(100 220)">
            <path d="M0 0 q-10 -30 10 -42 q22 -10 36 6 q14 18 4 38 q-10 18 -28 16 z" fill="#dc2626" />
            <path d="M30 4 q14 -4 20 6" stroke="#7f1d1d" strokeWidth="2" fill="none" />
          </g>
          <g transform="translate(260 220) scale(-1 1)">
            <path d="M0 0 q-10 -30 10 -42 q22 -10 36 6 q14 18 4 38 q-10 18 -28 16 z" fill="#2563eb" />
            <path d="M30 4 q14 -4 20 6" stroke="#1e3a8a" strokeWidth="2" fill="none" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/30" />
      <EventBody
        kicker="Per-card · UFC & Boxing"
        title="Fight Night"
        copy="Pick-em on every bout, method-of-victory bonus rounds, and post-event highlights threaded straight into your channels."
        footer="Build a card pool"
      />
    </CardShell>
  );
}

function CricketCard() {
  return (
    <CardShell className="min-h-[320px]">
      <div className="absolute inset-0 opacity-30 group-hover:opacity-100 transition duration-700">
        <svg viewBox="0 0 400 320" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
          {/* oval field */}
          <ellipse cx="200" cy="170" rx="170" ry="120" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.45)" strokeWidth="1.5" />
          <ellipse cx="200" cy="170" rx="60" ry="42" fill="none" stroke="rgba(16,185,129,0.35)" strokeWidth="1" strokeDasharray="3 4" />
          {/* pitch */}
          <rect x="186" y="130" width="28" height="80" fill="rgba(217,180,140,0.35)" stroke="rgba(217,180,140,0.5)" />
          {/* stumps top */}
          <g transform="translate(186 122)" stroke="#fef3c7" strokeWidth="2">
            <line x1="3" y1="0" x2="3" y2="10" />
            <line x1="14" y1="0" x2="14" y2="10" />
            <line x1="25" y1="0" x2="25" y2="10" />
            <line x1="0" y1="-1" x2="28" y2="-1" stroke="#fde68a" strokeWidth="1.5" />
          </g>
          {/* stumps bottom */}
          <g transform="translate(186 210)" stroke="#fef3c7" strokeWidth="2">
            <line x1="3" y1="0" x2="3" y2="10" />
            <line x1="14" y1="0" x2="14" y2="10" />
            <line x1="25" y1="0" x2="25" y2="10" />
            <line x1="0" y1="11" x2="28" y2="11" stroke="#fde68a" strokeWidth="1.5" />
          </g>
          {/* bat */}
          <g transform="translate(70 230) rotate(-30)">
            <rect x="0" y="0" width="14" height="70" rx="3" fill="#fcd9a8" stroke="#92400e" />
            <rect x="3" y="-22" width="8" height="22" fill="#7c2d12" />
          </g>
          {/* red leather ball */}
          <g transform="translate(310 230)">
            <circle r="16" fill="#b91c1c" />
            <path d="M-14 -4 Q0 -10 14 -4" stroke="#fde68a" strokeWidth="1.2" fill="none" strokeDasharray="2 2" />
            <path d="M-14 4 Q0 10 14 4" stroke="#fde68a" strokeWidth="1.2" fill="none" strokeDasharray="2 2" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/30" />
      <EventBody
        kicker="Global · IPL · T20 WC · Champions Trophy · Tests"
        title="Cricket"
        copy="From a 3-hour T20 to a five-day Test — our scoring engine handles every format, every overseas time zone, every umpire's call."
        footer="See cricket templates"
      />
    </CardShell>
  );
}

function Events() {
  return (
    <section id="events" className="relative max-w-[1240px] mx-auto px-6 py-24 md:py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-orange-300">05 · Events</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-white">Every major tournament, ready out of the box.</h2>
        </div>
        <p className="text-slate-400 max-w-md">Templates ship with scoring rules, prize structures, and Slack flows pre-wired. Customize anything — or just hit launch.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <WorldCupCard />
        <MarchMadnessCard />
        <SuperBowlCard />
        <FightNightCard />
        <CricketCard />
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: 'Our March Madness pool went from a 4-hour spreadsheet nightmare to a 60-second launch. I had 312 picks locked before standup.',
      name: 'Priya Raman',
      role: 'Operations Manager, Lattice',
      tag: 'Setup speed',
    },
    {
      quote: 'The ROI conversation with our CFO was the easiest one I\'ve had. Engagement scores up 22%, voluntary attrition down. He signed the annual on the spot.',
      name: 'Marcus Whitfield',
      role: 'Head of Culture, Veridian Health',
      tag: 'ROI',
    },
    {
      quote: 'The live Slack integration is the killer feature. Score updates, trash talk, and a Monday recap thread — all without my team writing a single bot.',
      name: 'Daniela Ortiz',
      role: 'IT & Workspace Lead, Forge Robotics',
      tag: 'Slack integration',
    },
    {
      quote: 'Finally a team-building tool that doesn\'t require a kickoff offsite. Our Singapore office is just as loud as Brooklyn now — async cricket pools did that.',
      name: 'Tomáš Havel',
      role: 'VP People, Northwind Cloud',
      tag: 'Global engagement',
    },
  ];
  return (
    <section className="relative max-w-[1240px] mx-auto px-6 py-24 md:py-32 border-t border-white/5">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-[0.2em] text-orange-300">06 · Social proof</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-white">People Ops talks. We listen.</h2>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="glass rounded-2xl p-6 flex flex-col h-full hover:border-orange-400/30 transition"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-orange-300/90">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> {t.tag}
            </div>
            <blockquote className="mt-4 text-slate-100 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 grid place-items-center font-display text-slate-950 font-bold">
                {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-slate-400">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      category: 'Friends & Family',
      size: 'Small',
      original: 19.99,
      highlight: false,
      features: [
        'Clean, mobile-friendly entry point',
        'Automatic scoring throughout the tournament',
        'Event for families, office teams, groups, and small clubs',
        'Self-managed — Low cost',
        'No logos, ads, or any entry fees',
      ],
    },
    {
      category: 'Friends & Family',
      size: 'Medium',
      original: 29.99,
      highlight: false,
      features: [
        'Automate scoring & leaderboards',
        'Single contest dashboard',
        'Edit images, text and additional customizations',
        'Self-managed — Low cost',
        'Perfect for larger groups of friends.',
      ],
    },
    {
      category: 'Friends & Family',
      size: 'Large',
      original: 59.99,
      highlight: false,
      features: [
        'Automate scoring & leaderboards',
        'Single contest dashboard',
        'Edit images, text and additional customizations',
        'Self-managed — Low cost',
        'Perfect for small teams & companies.',
      ],
    },
    {
      category: 'Fundraiser',
      size: 'Small',
      original: 34.99,
      highlight: false,
      features: [
        'Just a single one-time platform fee',
        'You keep 100% of funds raised',
        'Automated scoring & options',
        'Self-managed — Low cost',
        'Ideal for schools, youth teams, PTOs, churches & neighborhood groups.',
      ],
    },
    {
      category: 'Fundraiser',
      size: 'Medium',
      original: 69.99,
      highlight: false,
      features: [
        'Just a single one-time platform fee',
        'You keep 100% of funds raised',
        'Automated scoring & options',
        'Self-managed — Low cost',
        'Ideal for schools, youth leagues, PTOs, large churches & neighborhood groups.',
      ],
    },
    {
      category: 'Fundraiser',
      size: 'Large',
      original: 299.00,
      highlight: true,
      features: [
        'Full branding + sponsor placement',
        'Custom donation flows',
        'API access for CRM & reporting',
        'White-label experience available (may cost extra depending on scope)',
        'Dedicated engineering support',
        'High volume participants with full branding and optional custom workflows.',
      ],
    },
    {
      category: 'Small Organization',
      size: '',
      original: 89.99,
      highlight: false,
      features: [
        'Automatic scoring & leaderboards',
        'TV ready leaderboard mode for on-site presentation',
        'Edit images, text and additional customizations',
        'Self-managed — Low cost',
        'Perfect for small clubs and bars.',
      ],
    },
    {
      category: 'White Label Custom',
      size: '',
      original: 399.00,
      highlight: false,
      features: [
        'Dedicated white-label hosting',
        'Custom scoring, rules, and entry flows',
        'Special structures & promotional modules',
        'Automated CRM Sync for marketing teams',
        'Exportable data & reporting tools',
        'Dedicated engineering support',
      ],
    },
    {
      category: 'Enterprise Solutions',
      size: '',
      original: 499.00,
      highlight: false,
      features: [
        'Saving at $499 for 2,000 users + 25¢ per add\'l',
        'Dedicated white-label hosting',
        'Fulfilled or regional multi-headline contests',
        'Custom scoring, rules, and entry flows',
        'Special structures & promotional modules',
        'Real-Time API (Frames & Leaderboards)',
        'For organizations requiring deep customization, multiple locations, or technical integrations — full brand control and white-label capabilities.',
      ],
    },
  ];

  return (
    <section id="pricing" className="relative max-w-[1240px] mx-auto px-6 py-24 md:py-32 border-t border-white/5">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] text-orange-300">07 · Pricing</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-white">Flexible plans for every pool size.</h2>
        <p className="mt-4 text-slate-300">From casual friend groups to enterprise-wide tournaments. All plans include unlimited participants and full feature access.</p>
        {/* Global discount callout */}
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/30">
          <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-sm font-semibold text-red-300">🏆 FIFA WC 2026 Special: 40% OFF all plans</span>
        </div>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {tiers.map((tier) => {
          const inflated = tier.original * 3;
          const discounted = inflated * 0.6;
          const savings = inflated - discounted;

          return (
            <div
              key={`${tier.category}-${tier.size}`}
              className={`relative rounded-2xl transition-all ${
                tier.highlight
                  ? 'p-[1.5px] bg-gradient-to-br from-orange-400 via-orange-500 to-amber-300 shadow-[0_30px_80px_-30px_rgba(249,115,22,0.55)]'
                  : ''
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-orange-500 text-slate-950 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap z-10">
                  Most popular
                </div>
              )}
              <div className={`rounded-2xl p-6 flex flex-col h-full ${tier.highlight ? 'bg-slate-950/90' : 'glass'}`}>

                {/* Category + size label */}
                <div className="text-xs uppercase tracking-[0.18em] text-orange-300/90 font-medium">{tier.category}</div>
                {tier.size && (
                  <h3 className="mt-1 font-display text-lg text-white font-semibold leading-tight">{tier.size}</h3>
                )}

                {/* Pricing block */}
                <div className="mt-5 pb-5 border-b border-white/8">
                  {/* Original inflated price in orange, large font */}
                  <div className="mb-2">
                    <span className="font-display text-3xl font-bold text-orange-400">${inflated.toFixed(2)}</span>
                    <span className="text-xs text-slate-500 ml-1">/event</span>
                  </div>
                  {/* Crossed out original with discount badge */}
                  <div className="flex items-baseline gap-1.5 mb-3">
                    <span className="text-sm text-slate-500 line-through">${inflated.toFixed(2)}</span>
                    <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full bg-red-500/25 border border-red-500/50 text-red-300 text-[11px] font-bold tracking-wide">
                      40% OFF - FIFA WC 2026
                    </span>
                  </div>
                  {/* Current discounted rate — big and prominent */}
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl font-bold text-white">${discounted.toFixed(2)}</span>
                    <span className="text-slate-400 text-sm">/event</span>
                  </div>
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/35 text-emerald-300 text-xs font-semibold">
                      You save ${savings.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Feature list */}
                <ul className="mt-5 space-y-2.5 text-sm flex-1">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex gap-2.5 items-start">
                      <Check className="h-4 w-4 text-orange-400 mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-slate-300 leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-6 rounded-full h-10 font-semibold text-sm ${
                    tier.highlight
                      ? 'bg-orange-500 hover:bg-orange-400 text-slate-950 shadow-[0_8px_24px_-8px_rgba(249,115,22,0.7)]'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10'
                  }`}
                >
                  Get started
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-10 text-center text-xs text-slate-500">
        All plans include unlimited events, custom scoring rules, and HR-compliant setup. Enterprise custom pricing available.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/60">
      {/* final CTA */}
      <div className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-10 md:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white leading-tight">
                Your next pool launches before lunch.
              </h3>
              <p className="mt-3 text-slate-300 max-w-lg">Spin up a free 14-day pilot, invite a department, and watch the engagement chart move. We'll get out of your way.</p>
            </div>
            <div className="flex md:justify-end gap-3 flex-wrap">
              <Button className="bg-orange-500 hover:bg-orange-400 text-slate-950 font-semibold h-12 px-6 rounded-full">Start free pilot</Button>
              <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/5 h-12 px-6 rounded-full">Book a demo</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-orange-500 grid place-items-center">
                <Trophy className="h-4 w-4 text-slate-950" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-semibold">BracketCulture</span>
            </a>
            <p className="mt-4 text-slate-400 max-w-xs">Zero-maintenance, HR-compliant office sports pools for the modern hybrid workplace.</p>

          </div>
          <div>
            <div className="text-white font-semibold mb-3">Product</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#events" className="hover:text-white">Events</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Company</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#team-building" className="hover:text-white">Team Building</a></li>
              <li><a href="#" className="hover:text-white">Customers</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Legal</div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">DPA</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3 justify-between text-xs text-slate-500">
          <div>© {new Date().getFullYear()} BracketCulture, Inc. All rights reserved.</div>
          <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> All systems operational</div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-100">
      <Nav />
      <main>
        <Hero />
        <Features />
        <WhyItWorks />
        <Science />
        <Events />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
